import React, {useState} from "react";
import SearchInput from "./components/SearchInput.js";
import "./index.css";
import TestData from "./test_data.json";

function App () {
  const [serchWord, setSearchWord] = useState(""); 

  function getSerchWord (value) {
    setSearchWord(value)
  }

  function filterData () {
    let newArr = TestData.filter((value) => {
      if (serchWord === "") {
        return value
      } else if (value.first_name.toLowerCase().includes(serchWord.toLowerCase())) {
        return value
      }          
    })
  
    return newArr
  }  
  
  return (
    <div>
      <SearchInput getSerchWord={getSerchWord}/>
      <div className="testData">
        {filterData().map((value) => {
          return (
            <p>{value.first_name}</p>
          )
        })}
      </div>
    </div>
  )
}

export default App;