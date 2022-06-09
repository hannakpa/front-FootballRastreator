import { Container, Row, Col, CardGroup, Card } from "react-bootstrap";
import { CgArrowsExchange } from "react-icons/cg";
import { IoMdFootball } from "react-icons/io";
import { MdTravelExplore } from "react-icons/md";
import { GiThink } from "react-icons/gi";
import ScrollReveal from "scrollreveal";
import { Link } from "react-router-dom";

import "./homePage.css";

const sr = ScrollReveal({
  origin: "top",
  distance: "50px",
  duration: 1500,
  reset: true,
});

const HomePage = () => {
  // Makes smooth appearing animation on scroll

  /** First Viewport */
  sr.reveal(".mainText h1", {});
  sr.reveal(".mainText h1", { delay: 150 });
  sr.reveal(".mainText p", { delay: 150 });

  /** Second Viewport */
  sr.reveal(".card-group", {});
  sr.reveal(".cardsSection h1", { delay: 150 });
  sr.reveal(".card-title", { delay: 150 });
  sr.reveal(".card-text", { delay: 250 });
  sr.reveal(".goTableButton", { delay: 100 });

  return (
    <>
      <div className="imgHome">
        <div className="mainText">
          <Container>
            <h1>Fair prices, fair play</h1>
            <p>
              On our site you can find the most up-to-date statistics on all football players from
              world football. Statistics of each footballer in all championships and national
              leagues, goals scored and penalties received.
            </p>
            <p>
              We provide opportunities to analyze the information, compare the performance of the
              players and draw your own conclusion if the player is overrated or underestimated.
            </p>
            <p>
              You can also enter the statistics of any player, our algorithms will analyze the data
              and help you make a conclusion about the FAIR value of the player in the market.
            </p>
          </Container>
        </div>
        {/* <img src="imgs/football_opaca1.jpg" width="100%" height="100%" /> */}
      </div>

      <Container>
        <Row className="cardsSection vh-100">
          <h1>¿How do we change the game?</h1>
          <CardGroup className="cardContainer">
            <Col xs={12} lg={3} sm={12}>
              <Card className="cardStyle">
                <Card.Body>
                  <Card.Title className="text-center">
                    <div className="homeCardIcons">
                      <MdTravelExplore className="iconHome" />
                    </div>
                    <span>Explore</span>
                  </Card.Title>
                  <Card.Text>
                    Explore the more than 8000 football players of all over the world.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} lg={3} sm={12}>
              <Card className="cardStyle">
                <Card.Body>
                  <Card.Title className="text-center">
                    <div className="homeCardIcons">
                      <IoMdFootball className="iconHome" />
                      <CgArrowsExchange className="iconHome" />
                      <IoMdFootball className="iconHome" />
                    </div>
                    <span>Compare</span>
                  </Card.Title>
                  <Card.Text>
                    Compare multiple players to see which ones fits better in your team with your
                    current budget, make your own analysis and start scaling positions with your
                    team!{" "}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} lg={3} sm={12}>
              <Card className="cardStyle">
                <Card.Body>
                  <Card.Title className="text-center">
                    <div className="homeCardIcons">
                      <GiThink className="iconHome" />
                    </div>
                    <span>Analyze</span>
                  </Card.Title>
                  <Card.Text>
                    We provide opportunities to analyze the information, compare the performance of
                    the players and draw your own conclusion if the player is overrated or
                    underestimated.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </CardGroup>
          <div className="containerButtons">
            <div className="goTableButton">
              <Link to="/table">Discover</Link>
            </div>
            <div className="goTableButton">
              <Link to="/table">Compare</Link>
            </div>
            <div className="goTableButton">
              <Link to="/analyze">Analyze</Link>
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
};
export default HomePage;
