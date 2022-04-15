import React, { useCallback, useRef, useState } from "react";
import { useSetRecoilState } from "recoil";
import { buyerListState } from "../Buyers";
import { v4 as uuidv4 } from "uuid";

export default function BuyerAdder() {
  const [inputValue, setInputValue] = useState("");
  const [value, setValue] = useState("");
  const setBuyerList = useSetRecoilState(buyerListState);
  const firstFormInput = useRef(null);

  const addItem = () => {
    setBuyerList((oldBuyerList) => [
      ...oldBuyerList,
      {
        id: uuidv4(),
        name: inputValue,
        value: Number(value),
      },
    ]);
    setInputValue("");
  };

  const onChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const onSubmit = useCallback(
    (e: any) => {
      e.preventDefault();
      addItem();
      setInputValue("");
      setValue("");
      // @ts-ignore
      firstFormInput?.current?.focus();
    },
    [addItem]
  );

  return (
    <form onSubmit={onSubmit} className="mb-3">
      <div className="row">
        <div className="col-lg-5 col-md-5 col-sm-12">
          <input
            type="text"
            value={inputValue}
            onChange={onChange}
            ref={firstFormInput}
            className="form-control"
            placeholder="Nome"
          />
        </div>
        <div className="col-lg-5 col-md-5 col-sm-12">
          <input
            type="text"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            className="form-control"
            placeholder="Valor"
          />
        </div>
        <div className="col-lg-2 col-md-2 col-sm-12">
          <input
            type="submit"
            className="form-control btn btn-primary"
            value="Adicionar"
          />
        </div>
      </div>
    </form>
  );
}
