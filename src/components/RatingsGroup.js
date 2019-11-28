import React from "react";
import { Icon, Statistic } from "semantic-ui-react";

const RatingsGroup = ({ votes, googleRating, small }) => {
  if(small) {
    return (
      <div>        
        <span>
          <Icon name="like" color="red"/>
          {votes.length}
        </span>
        <span style={{ marginInlineStart: "10px" }}>
          <Icon name="star" color="blue"/>
          {googleRating} / 5
        </span>
      </div>
    )
  }
  return (
    <div>    
        <Statistic color="red" size="mini">
          <Statistic.Value>
            <Icon name="like" />
            {votes.length}
          </Statistic.Value>
          <Statistic.Label>taukopaikat.fi</Statistic.Label>
        </Statistic>
        <Statistic color="blue" size="mini">
          <Statistic.Value>
            <Icon name="star" />
            {googleRating}
          </Statistic.Value>
          <Statistic.Label>Arvio Google Mapsissa</Statistic.Label>
        </Statistic>
    </div>

  );
};

export default RatingsGroup;