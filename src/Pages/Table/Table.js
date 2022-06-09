import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { AgGridReact } from "ag-grid-react";
import axios from "axios";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Table = () => {
  const gridRef = useRef(null);
  const [rowData, setRowData] = useState();
  const [isRowSelected, setIsRowSelected] = useState(false);
  const [isMultipleRowSelected, setIsMultipleRowSelected] = useState(false);
  const [player, setPlayer] = useState({});
  const [playersToCompare, setPlayersToCompare] = useState({});

  const gridStyle = useMemo(() => ({ height: "760px", width: "1350px" }), []);
  const suppressRowHoverHighlight = true;
  const columnHoverHighlight = true;
  const pagination = true;
  const paginationPageSize = 100;

  const getApi = () => {
    axios.get("train.json").then((res) => {
      setRowData(res.data);
    });
  };

  useEffect(() => {
    getApi();
  }, []);

  window.scrollTo(0, 0)

  const [columnDefs] = useState([
    {
      field: "id",
      headerName: "id",
      sortable: true,
      maxWidth: 80,
    },
    {
      field: "league",
      headerName: "League",
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      field: "team",
      headerName: "Team",
      maxWidth: 160,
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      field: "position",
      headerName: "Position",
      maxWidth: 170,
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      field: "price",
      headerName: "Price",
      maxWidth: 115,
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      field: "nation",
      headerName: "Nation",
      maxWidth: 130,
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      field: "age",
      headerName: "Age",
      maxWidth: 80,
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      field: "goals_selection",
      headerName: "Goals Selection",
      maxWidth: 175,
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      field: "selections_nation",
      headerName: "Selections Nation",
      maxWidth: 180,
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      field: "goal_champ",
      headerName: "Goal Champ",
      maxWidth: 150,
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      field: "assist_champ",
      headerName: "Assist Champ",
      maxWidth: 160,
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      field: "own_goal_champ",
      headerName: "Own Goal Champ",
      maxWidth: 170,
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      field: "yellow_card_champ",
      headerName: "Yellow Card Champ",
      maxWidth: 180,
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      field: "red_card_champ",
      headerName: "Red Card Champ",
      maxWidth: 160,
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      field: "goal_cup",
      headerName: "Goal Cup",
      maxWidth: 110,
      sortable: true,
      filter: true,
      resizable: true,
    },
  ]);

  const onRowSelected = useCallback((event) => {
    if (event.node.isSelected()) {
      setIsRowSelected(event.node.isSelected());
      setPlayer(event.node.data);
    } else setIsRowSelected(!event.node.isSelected());
  }, []);

  const onSelectionChanged = useCallback((event) => {
    const selectedRows = gridRef.current.api.getSelectedRows();
    const rowCount = event.api.getSelectedNodes().length;
    if (rowCount === 0) {
      setIsRowSelected(false);
    }
    if (rowCount >= 2) {
      setIsMultipleRowSelected(true);
      setPlayersToCompare(selectedRows);
    }
  }, []);

  return (
    <>
      <Container>
        <h1 className="main-title">Explore</h1>
        {/* envolvemos con row y así el contenido tendrá márgenes */}
        <Row className="row-btn">
          <div className="buttonsTable">
            <Col className="m-6 col-btn">
              <Link to={`player/${player.id}`} state={{ player }}>
                <button className="underline-link" disabled={!isRowSelected}>
                  Show player info
                </button>{" "}
              </Link>
            </Col>
            <Col className="m-6 col-btn">
              <Link to={`charts`} state={{ playersToCompare }}>
                <button className="underline-link" disabled={!isMultipleRowSelected}>
                  Compare players
                </button>{" "}
              </Link>
            </Col>
          </div>
          <div className="ag-theme-alpine" style={gridStyle}>
            <AgGridReact
              ref={gridRef}
              rowData={rowData}
              columnDefs={columnDefs}
              rowSelection="multiple"
              pagination={pagination}
              paginationPageSize={paginationPageSize}
              suppressRowHoverHighlight={suppressRowHoverHighlight}
              columnHoverHighlight={columnHoverHighlight}
              groupSelectsChildren={true}
              onRowSelected={onRowSelected}
              onSelectionChanged={onSelectionChanged}
            ></AgGridReact>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Table;
