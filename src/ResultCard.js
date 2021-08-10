import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./ResultCard.css";
import { DataLayer } from "./DataLayer";

function ResultCard() {
  const { state, setstate } = useContext(DataLayer);
  console.log(state.data);
  return (
    <div className="result-card">
      <button onClick={() => setstate({ success: false })}>Close</button>
      <div className="result-header">
        <img className="result-flag" src={state.data[0].flag} alt="flag" />
        <h1>
          {state.data[0].name} {state.data[0].nativeName}{" "}
          <h5>{state.data[0].capital}</h5>
        </h1>
      </div>
      <div className="result-info">
        <h5>Alpha2code: {state.data[0].alpha2Code}</h5>
        <h5>Alpha3code: {state.data[0].alpha3Code}</h5>
        <h5>Top level Domain: {state.data[0].topLevelDomain.join(",")}</h5>

        <h5>Calling Code: {state.data[0].callingCodes.join(" ,")}</h5>
        <h5>Region: {state.data[0].region}</h5>
        <h5>Sub-Region: {state.data[0].subregion}</h5>

        <h5>Population: {state.data[0].population}</h5>
        <h5>Area: {state.data[0].area}</h5>
        <h5>Timezone: {state.data[0].timezones.join(",")}</h5>
        <h5>Borders: {state.data[0].borders.join(" ,")}</h5>
        <h5>
          Languages: {state.data[0].languages.map((lan) => lan.name).join(",")}
        </h5>
        <h5>
          Currencies:{" "}
          {state.data[0].currencies.map((lan) => lan.name).join(",")}
        </h5>
        <h5>
          Regional Block:
          {state.data[0].regionalBlocs.map((bl) => bl.name).join(",")}
        </h5>
      </div>
    </div>
  );
}

export default ResultCard;
