import React, { useEffect, useState } from "react";
import ExchangeCase from "./exchange/ExchangeCase";
import ExchangeBase from "./exchange/ExchangeBase";
import ExchangeInput from "./userData/ExchangeInput";
import GetEurInfo from "./Hook/Krweur";
import { EurInfoTypes } from "./types/type";

export const App = () => {
  const { isReady, eurInfo } = GetEurInfo();
  return (
    <div className="App">
      {eurInfo && (
        <>
          <ExchangeBase eurInfo={eurInfo} />
          <ExchangeCase eurInfo={eurInfo} />
          <ExchangeInput eurInfo={eurInfo} />
        </>
      )}
    </div>

  );
};

export default App;
