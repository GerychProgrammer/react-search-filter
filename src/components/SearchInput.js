import React, {useState} from "react";
import "./SearchInput.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

  function SearchInput (props) {
    const [serchWord, setSearchWord] = useState(""); 
    
    return (
      <div className="searchContainer">
        <div className="searchInput">
          <input onChange={(event) => {
            setSearchWord(event.target.value);
            props.getSerchWord(serchWord);
          }} placeholder="Search..." type="text" />
          <FontAwesomeIcon icon={faMagnifyingGlass} className="faMagnifyingGlass"/>
        </div>        
      </div>
    ) 
  }

export default SearchInput;