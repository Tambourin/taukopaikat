import React from "react";
import { connect } from "react-redux";
import { Input } from "semantic-ui-react";
import { setSearchWord } from "../reducers/filterReducer";

const SearchWordInput = ({ searchWord, setSearchWord }) => {
  return (
    <div>
      <Input        
        fluid
        icon="search" 
        placeholder="Rajaa sanahaulla"
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

  