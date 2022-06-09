/* eslint-disable react/prop-types */
import React, { Component } from "react";
import { AgChartsReact } from "ag-charts-react";

function getTotal(datum) {
  return datum.price;
}

export default class StackedBarCharts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        autoSize: true,
        data: this.props.data.sort((a, b) => getTotal(b) - getTotal(a)),
        theme: {
          overrides: {
            bar: {
              series: {
                strokeWidth: 0,
                highlightStyle: {
                  series: {
                    strokeWidth: 1,
                    dimOpacity: 0.3,
                  },
                },
              },
            },
          },
        },
        title: {
          text: "Compare",
          fontSize: 18,
        },
        subtitle: {
          text: "Some subtitle",
        },
        series: [
          {
            type: "bar",
            xKey: "price",
            yKey: "goals_selection",
            yName: "Goals Selection",
            xName: "id",
            stacked: true,
          },
          {
            type: "bar",
            xKey: "price",
            xName: "id",
            yKey: "selections_nation",
            yName: "Selections Nation",
            stacked: true,
          },
          {
            type: "bar",
            xKey: "price",
            xName: "id",
            yKey: "goal_champ",
            yName: "Goal Champ",
            stacked: true,
          },
          {
            type: "bar",
            xKey: "price",
            xName: "id",
            yKey: "goal_cup",
            yName: "Goal Cup",
            stacked: true,
          },
          {
            type: "bar",
            xKey: "price",
            xName: "id",
            yKey: "goal_continent",
            yName: "Goal Continent",
            stacked: true,
          },
        ],
        axes: [
          {
            type: "category",
            position: "left",
          },
          {
            type: "number",
            position: "bottom",
          },
        ],
        legend: {
          position: "bottom",
        },
        tooltip: {
          enabled: true,
        },
        listeners: {
          seriesNodeClick: (event) => {
            const { datum } = event;
            console.log(`Id: ${datum[event.series.xName]} `);
          },
        },
      },
    };
  }

  render() {
    return <AgChartsReact options={this.state.options} />;
  }
}
