import React from "react";
import { connect } from "react-redux";
import { Input } from "semantic-ui-react";
import { setSearchWord } from "../../reducers/filterReducer";

const SearchWordInput = ({ searchWord, setSearchWord }) => {
  return (
    <div>
      <Input
        id="searchWordInput"        
        fluid
        icon="search" 
        placeholder="Hae nimen ja paikkakunnan perusteella"
        value={searchWord}
        onChange={(event, data) => {setSearchWord(data.value)}} 
    />
    </div>    
  )
}
const mapStateToProps = (state) => {
  return {
    searchWord: state.filter.searchWord
  }
}

export default connect(mapStateToProps, { setSearchWord })(SearchWordInput);

  