import React, { useState } from "react";
import "./inputSearch.css";
import clock from "../../image/clock.svg";
import lupa from "../../image/lupa.svg";
import error from "../../image/error.svg";
const InputSearch = () => {
  const [buttonClear,setbuttonClear] = useState(false);
  const [searchValue,setSearchValue] = useState(" ");
  const clearInput = () => {
    setbuttonClear(true)
    setSearchValue("")
  }
  const handleSearch = (event) => {
    setSearchValue(event.target.value)
    if ((event.target.value) >= 0) {
      setbuttonClear(true)
    }else{
      setbuttonClear(false)
    }
  }
  return (
    <div className="container__search">
      <div className="item__search_1">
        <label htmlFor="inputSearch">
          <img src={lupa}  alt="img"/>
        </label>
        <input type="text" id="inputSearch" value={searchValue} onChange={(e) =>(handleSearch(e))} />
      </div>
      <div className="item__search_2">
        <span>
          <img src={error} onClick={clearInput} className={(buttonClear) ? "d-none" : "d-block"} alt="img"/>
        </span>
        <span>
          <img src={clock}  alt="img"/>
        </span>
        <span>
          <img src="https://placeimg.com/1520/1520/animals"  alt="img"/>
        </span>
      </div>
    </div>
  );
};

export default InputSearch;
