import React, { useCallback, useRef, useState } from "react";
import { useSetRecoilState, useRecoilState } from "recoil";
import { buyerListState } from "../Buyers";
import { v4 as uuidv4 } from "uuid";

export default function BuyerItem({ item }: any) {
  const [buyerList, setBuyerList] = useRecoilState(buyerListState);

  const deleteItem = () => {
    setBuyerList((oldBuyerList) =>
      oldBuyerList.filter((buyer) => buyer.id !== item.id)
    );
  };

  return (
    <div className="card mb-1">
      <div className="card-body">
        <div className="row">
          <div className="col-7">
            <p className="mb-0">{item.name}</p>
          </div>
          <div className="col-3">
            <p className="mb-0">{item.value}</p>
          </div>
          <div className="col-2">
            <button
              type="button"
              onClick={deleteItem}
              className="btn btn-outline-danger btn-sm"
            >
              D
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
