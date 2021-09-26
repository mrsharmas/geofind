import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Search.css";
import { DataLayer } from "./DataLayer";
import axios from "axios";

function Search() {
  const [value, setvalue] = useState("");

  const { setstate } = useContext(DataLayer);

  const findresult = () => {
    axios.get(`https://restcountries.com/v3/name/${value}?fullText=true`).then(
      (res) => {
        if (res.data) setstate({ data: res.data, success: true });
      },
      () => {
        alert("No such country");
      }
    );
  };

  return (
    <div>
      <div className="container h-100">
        <div className="d-flex justify-content-center h-100">
          <div className="searchbar">
            <input
              className="search_input"
              type="text"
              name=""
              placeholder="Search..."
              value={value}
              onChange={(e) => setvalue(e.target.value)}
            />
            <button className="search_icon" onClick={findresult}>
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
