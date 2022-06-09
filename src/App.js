import "./scss/base/app.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/HomePage/Home";
import Table from "./Pages/Table/Table";
import Charts from "./Pages/Charts/Charts";
import PlayerCard from "./Components/PlayerCard";
import PlayersCharts from "./Components/PlayersCharts";
// eslint-disable-next-line import/no-named-as-default
import Footer from "./Components/Footer";
import "@fontsource/montserrat";
import "bootstrap/dist/css/bootstrap.min.css";
import FormNewPlayer from "./Components/FormNewPlayer";
import Login from "./Components/Login";

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="table" element={<Table />}></Route>
            <Route path="table/player/:id" element={<PlayerCard />}></Route>
            <Route path="table/charts" element={<PlayersCharts />}></Route>
            <Route path="charts" element={<Charts />}></Route>
            <Route path="analyze" element={<FormNewPlayer />}></Route>
            <Route path="login" element={<Login />}></Route>
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
