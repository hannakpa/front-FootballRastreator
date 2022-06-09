/* eslint-disable camelcase */
import React from "react";
import { useLocation } from "react-router-dom";
// eslint-disable-next-line import/no-cycle
import StackedBarCharts from "./StackedBarCharts";

const PlayersCharts = () => {
  const { playersToCompare } = useLocation().state;

  return (
    <div className="charts-container" style={{ height: "70vh" }}>
      <StackedBarCharts data={playersToCompare} />
    </div>
  );
};

export default PlayersCharts;
