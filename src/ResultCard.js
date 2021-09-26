import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./ResultCard.css";
import { DataLayer } from "./DataLayer";

function ResultCard() {
  const { state, setstate } = useContext(DataLayer);
  const data = state.data[0];
  console.log(state.data);
  return (
    <div className="result-card">
      <button onClick={() => setstate({ success: false })}>Close</button>
      <div className="result-header">
        <img className="result-flag" src={data.flags[0]} alt="flag" />
        <h1>
          {data.name.common} {data.name.nativeName.hin.common}{" "}
          <h5>{data.capital}</h5>
        </h1>
      </div>
      <div className="result-info">
        {/* <h5>Alpha2code: {data.alpha2Code}</h5>
        <h5>Alpha3code: {data.alpha3Code}</h5> */}
        {/* <h5>Top level Domain: {data.topLevelDomain.join(",")}</h5> */}

        {/* <h5>Calling Code: {data.callingCodes.join(" ,")}</h5> */}
        <h5>Region: {data.region}</h5>
        <h5>Sub-Region: {data.subregion}</h5>

        {/* <h5>Population: {data.population}</h5> */}
        <h5>Area: {data.area}</h5>
        {/* <h5>Timezone: {data.timezones.join(",")}</h5> */}
        <h5>Borders: {data.borders.join(" ,")}</h5>
        {/* <h5>Languages: {data.languages.map((lan) => lan.name).join(",")}</h5> */}
        {/* <h5>Currencies: {data.currencies.map((lan) => lan.name).join(",")}</h5> */}
        {/* <h5>
          Regional Block:
          {data.regionalBlocs.map((bl) => bl.name).join(",")}
        </h5> */}
      </div>
    </div>
  );
}

export default ResultCard;
