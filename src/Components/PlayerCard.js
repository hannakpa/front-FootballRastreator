import React from "react";
import PropTypes from "prop-types";
import { Container, Col, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Grafico from "./Grafico";
import GraficoPie from "./GraficoPie";

const PlayerCard = () => {
  const { player } = useLocation().state;

  const datosgol = [
    player.goals_selection,
    player.goal_champ,
    player.own_goal_champ,
    player.own_goal_cup,
    player.goal_cup,
    player.goal_continent,
    player.own_goal_continent,
  ];

  const datostarjetas = [
    player.red_card_continent,
    player.yellow_card_champ,
    player.second_yellow_card_champ,
    player.red_card_champ,
    player.yellow_card_cup,
    player.red_card_cup,
    player.yellow_card_continent,
    player.second_yellow_card_continent,
    player.second_yellow_card_cup,
  ];

  // states line. GOLS
  const statesLine = {
    // etiquetas de días de los datos para el gráfico
    labels: [
      "Goals Selection ",
      "Goal Champ",
      "Own Goal Champ ",
      " Own Goal Cup",
      "Goal Cup",
      "Goal Continent",
      "Own Goal Continent",
    ],
    datasets: [
      {
        label: "Goals",
        // cifras para el gráfico
        data: datosgol,

        tension: 0.2,
        fill: true,
        backgroundColor: "#6979F8",
        pointBorderColor: "#6979F8",
        pointBackgroundColor: "#6979F8",
        pointRadius: 5,
      },
    ],
  };

  // array con las opciones de formato al imprimir el gráfico
  const chartOptionsLine = {
    plugins: {
      legend: {
        display: false,
      },

      scales: {
        x: {
          offset: true,
        },
      },

      title: {
        text: "Goals",
        display: false,
        fontSize: 20,
      },
    },
  };

  // STATES PIE TARJETAS
  const statesPie = {
    // etiquetas de días de los datos para el gráfico
    labels: [
      "Red Card Continent",
      "Yellow Card Champ",
      "Second Yellow Card Champ",
      "Red Card Champ",
      "Yellow Card Cup",
      "Red Card Cup",
      "Yellow Card Continent",
      "Second Yellow Card Continent",
      "Second Yellow Card Cup",
    ],
    datasets: [
      {
        label: "Graphic",
        // cifras para el gráfico
        data: datostarjetas,

        tension: 0.2,
        fill: true,
        backgroundColor: [
          "#ff7f50",
          "#87cefa",
          "#da70d6",
          "#32cd32",
          "#6495ed",
          "#ff69b4",
          "#ba55d3",
          "#cd5c5c",
          "#ffa500",
        ],
        pointBorderColor: "#6979F8",
        pointBackgroundColor: "#6979F8",
        pointRadius: 5,
      },
    ],
  };

  // array con las opciones de formato al imprimir el gráfico
  const chartOptionsPie = {
    plugins: {
      legend: {
        display: false,
      },

      scales: {
        x: {
          offset: true,
        },
      },

      title: {
        display: false,
        fontSize: 20,
      },
    },
  };

  return (
    <Container>
      <div className="big-box-players">
        <Row className="m-5">
          <Col>
            <Row>
              <h1 style={{ fontWeight: "bolder" }}>ID: {player?.id}</h1>
              <h2>Price: <b>{player?.price}€</b></h2>
            </Row>
          </Col>
          <Col>
            <h2>Information</h2>
            <p>Age: <b>{player?.age}</b></p>
            <p>Position: <b>{player?.position}</b></p>
            <p>Nation: <b>{player?.nation}</b></p>
            <p>Team: <b>{player?.team}</b></p>
          </Col>
        </Row>
        <Row className="p-3">
          <h2> Goals </h2>
          <Grafico options={chartOptionsLine} data={statesLine} />
        </Row>

        <Row className="m-5">
          <Col>
            <h2>Statistics</h2>

            <p>Selections Nation: <b>{player?.selections_nation}</b></p>
            <p>Assist Champ: <b>{player?.assist_champ}</b></p>
            <p>Assist Cup: <b>{player?.assist_cup}</b></p>
            <p>Assist Continent: <b>{player?.assist_continent}</b></p>
          </Col>

          <Col>
            <h2> Cards </h2>
            <GraficoPie options={chartOptionsPie} data={statesPie} />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default PlayerCard;

PlayerCard.propTypes = {
  player: PropTypes.shape({
    nation: PropTypes.string,
  }),
};
