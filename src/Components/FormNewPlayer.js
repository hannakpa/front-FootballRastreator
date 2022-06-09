/* eslint-disable camelcase */
import { useState } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import ModalAnalyze from "./ModalAnalyze";

const FormNewPlayer = () => {
  const [validated, setValidated] = useState(false);
  const [player, setPlayer] = useState({
    age: undefined,
    goals_selection: undefined,
    selections_nation: undefined,
    goal_champ: undefined,
    goal_cup: undefined,
    goal_continent: undefined,
    price: undefined,
  });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { age, goals_selection, selections_nation, goal_champ, goal_cup, goal_continent, price } =
    player;

  const handleChange = (e) => {
    setPlayer({
      ...player,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    console.log("player: ", player);
  };

  return (
    <>
      <Row>
        <Col md={12}>
          <h1 className="titleAnalyze">Analyze a player</h1>
        </Col>
      </Row>
      <InputGroup className="mb-3 form-input-group centerInputGroup">
        <Row>
          <Col md={12}>
            <div className="analyzeContainer">
              <Container style={{ width: "60vh" }}>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Row>
                    <Col>
                      <Form.Group className="mb-3 mt-2">
                        <Form.Label>Age</Form.Label>
                        <Form.Control
                          value={age}
                          id="age"
                          onChange={handleChange}
                          type="number"
                          min="16"
                          max="60"
                          placeholder="Enter age"
                          required
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Goals Selection</Form.Label>
                        <Form.Control
                          value={goals_selection}
                          id="goals_selection"
                          onChange={handleChange}
                          type="number"
                          min="0"
                          placeholder="Goals Selection"
                          required
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Selections Nation</Form.Label>
                        <Form.Control
                          value={selections_nation}
                          onChange={handleChange}
                          id="selections_nation"
                          type="number"
                          min="0"
                          placeholder="Selections Nation"
                          required
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Goal Champ</Form.Label>
                        <Form.Control
                          value={goal_champ}
                          id="goal_champ"
                          onChange={handleChange}
                          type="number"
                          min="0"
                          placeholder="Goal Champ"
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3 mt-2">
                        <Form.Label>Goal Cup</Form.Label>
                        <Form.Control
                          value={goal_cup}
                          id="goal_cup"
                          onChange={handleChange}
                          type="number"
                          min="0"
                          placeholder="Goal Cup"
                          required
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Goal Continent</Form.Label>
                        <Form.Control
                          value={goal_continent}
                          id="goal_continent"
                          onChange={handleChange}
                          type="number"
                          min="0"
                          placeholder="Goal Continent"
                          required
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Enter your price</Form.Label>
                        <Form.Control
                          value={price}
                          id="price"
                          onChange={handleChange}
                          type="number"
                          min="0"
                          step="1000"
                          placeholder="Enter your price"
                          required
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Position</Form.Label>
                        <Form.Select
                          aria-label="Select player position"
                          id="position"
                          onChange={handleChange}
                        >
                          <option>Choose player position</option>
                          <option value="Goalkeeper">Goalkeeper</option>
                          <option value="LeftWinger">LeftWinger</option>
                          <option value="RightWinger">RightWinger</option>
                          <option value="LeftMidfield">LeftMidfield</option>
                          <option value="RightMidfield">RightMidfield</option>
                          <option value="DefensiveMidfield">DefensiveMidfield</option>
                          <option value="CentralMidfield">CentralMidfield</option>
                          <option value="SecondStriker">SecondStriker</option>
                          <option value="Defender">Defender</option>
                          <option value="Midfielder">Midfielder</option>
                          <option value="AttackingMidfield">AttackingMidfield</option>
                          <option value="Forward">Forward</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Button type="submit" onClick={handleShow} className="analyzeSubmitButton underline-link">
                      Analyze
                    </Button>
                  </Row>
                </Form>
                <ModalAnalyze show={show} onHide={handleClose} data={player} />
              </Container >
            </div>
          </Col>
        </Row>
      </InputGroup>
    </>
  );
};

export default FormNewPlayer;
