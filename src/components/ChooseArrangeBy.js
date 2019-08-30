import React from "react";
import { connect } from "react-redux";
import { Button } from "semantic-ui-react";
import { setArrangeBy, arrangeOptions } from "../reducers/viewOptionsReducer";

const ChooseArrangeBy = ({ arrangeBy, setArrangeBy }) => {
  return (
    <Button.Group basic>
      <Button
        active={arrangeBy === arrangeOptions.VOTES}
        onClick={() => setArrangeBy(arrangeOptions.VOTES)}>
        Parhaat ensin
      </Button>
      <Button
        active={arrangeBy === arrangeOptions.APLHABETIC}
        onClick={() => setArrangeBy(arrangeOptions.APLHABETIC)}>
        Aakkosjärjestys
      </Button>
    </Button.Group>
  );
};

const mapStateToProps = state => {
  return {
    arrangeBy: state.viewOptions.arrangeBy
  };
};

export default connect(
  mapStateToProps,
  { setArrangeBy }
)(ChooseArrangeBy);
