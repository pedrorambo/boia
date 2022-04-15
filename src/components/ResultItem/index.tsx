import React, { useCallback, useRef, useState } from "react";
import { useSetRecoilState, useRecoilState } from "recoil";
import { buyerListState, resultState } from "../Buyers";
import { v4 as uuidv4 } from "uuid";

export default function ResultItem({ item }: any) {
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
        </div>
      </div>
    </div>
  );
}
