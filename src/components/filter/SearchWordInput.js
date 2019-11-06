import React from "react";
import { connect } from "react-redux";
import { Input, Form } from "semantic-ui-react";
import { setSearchWord } from "../../reducers/filterReducer";

const SearchWordInput = ({ searchWord, setSearchWord }) => {
  const handleSubmit = () => {
    window.scrollBy(0, 300);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <label htmlFor="searchWordInput">Hakusana</label>
      <Input
        id="searchWordInput"        
        fluid
        icon="search" 
        placeholder="Hae nimen tai paikkakunnan perusteella"
        value={searchWord}
        onChange={(event, data) => {setSearchWord(data.value)}} 
      />
    </Form>    
  )
}
const mapStateToProps = (state) => {
  return {
    searchWord: state.filter.searchWord
  }
}

export default connect(mapStateToProps, { setSearchWord })(SearchWordInput);

  