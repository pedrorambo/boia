import React from "react";
import { atom, useRecoilValue, selector } from "recoil";
import BuyerAdder from "../BuyerAdder";
import BuyerItem from "../BuyerItem";
import Freight from "../Freight";
import ResultItem from "../ResultItem";

export interface Buyer {
  id: any;
  name: string;
  value: number;
}

export const buyerListState = atom({
  key: "buyerList",
  default: [] as Buyer[],
});

export const freightState = atom({
  key: "freight",
  default: 0,
});

export const resultState = selector({
  key: "result",
  get: ({ get }) => {
    const buyersList = get(buyerListState);
    const freight = get(freightState);

    const freightValueToAddToEachBuyer = freight / buyersList.length;

    return buyersList.map((buyer) => ({
      ...buyer,
      value: buyer.value + freightValueToAddToEachBuyer,
    }));
  },
});

export default function Buyers() {
  const buyerList = useRecoilValue(buyerListState);
  const result = useRecoilValue(resultState);

  return (
    <>
      <div className="container mt-5">
        <div className="row mb-3">
          <div className="col-lg-12">
            <h2>Pessoas:</h2>
            <BuyerAdder />
            {buyerList.map((buyer) => (
              <BuyerItem key={buyer.id} item={buyer} />
            ))}
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-lg-12">
            <h2>Frete:</h2>
            <Freight />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-lg-12">
            <h2>Resultado:</h2>
            {result.map((result) => (
              <ResultItem key={result.id} item={result} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
