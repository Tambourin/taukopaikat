import React from "react";
import { Icon, Statistic } from "semantic-ui-react";

const RatingsGroup = ({ votes, googleRating }) => {
  return (
    <div>    
        <Statistic color="red" size="mini">
          <Statistic.Value>
            <Icon name="like" />
            {votes}
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