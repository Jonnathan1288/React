import logo from './logo.svg';
import './App.css';

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Container, Row } from "reactstrap";
import ListProduct from "./ListProduct";
import FormProduct from './FormProduct';

function App() {
  const [pro, setPro] = useState([]);

  const cargaPro = () => {
    axios.get("http://localhost:8080/api/list").then(({ data }) => setPro(data));
  };

  useEffect(cargaPro, []);
  return (
    <>
    <Container>
      <Row>
        <Col md={6}>
          <ListProduct productos={pro} />
        </Col>

        <Col md={6}>
         <FormProduct/>
        </Col>
      </Row>
    </Container>
  </>
  );
}

export default App;
