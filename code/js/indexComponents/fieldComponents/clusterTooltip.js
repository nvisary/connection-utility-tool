import React from 'react';
import ReactDOM from "react-dom";
import mainPage_lang from "../../lang/mainPage_lang";;

// The component is responsible for displaying the tooltip when hovering over the inactive Create button

class ClusterTooltip extends React.Component {
  render() {
    return (
      <div id="clusterTooltip">
        {mainPage_lang.ClusterTooltip_descr}
      </div>
    );
  };
};

export default (ClusterTooltip);
