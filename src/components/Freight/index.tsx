import React, { useCallback, useRef, useState } from "react";
import { useSetRecoilState, useRecoilState } from "recoil";
import { buyerListState, freightState } from "../Buyers";
import { v4 as uuidv4 } from "uuid";

export default function Freight() {
  const [freight, setFreight] = useRecoilState(freightState);

  const onChange = (e: any) => {
    setFreight(e.target.value);
  };

  return (
    <div className="row">
      <div className="col-lg-12">
        <input
          type="text"
          value={freight}
          onChange={onChange}
          className="form-control"
          placeholder="Frete"
        />
      </div>
    </div>
  );
}
