import React, { useState, useContext } from "react";
import Axios from "axios";

import {
  Row,
  Container,
  Col,
  Input,
  Button,
  InputGroup,
  InputGroupAddon,
} from "reactstrap";

import UserCard from "../components/UserCard";
import Repos from "../components/Repos";
import { Redirect } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { toast } from "react-toastify";
import Footer from "../layout/Footer";

const Home = () => {
  const context = useContext(UserContext);

  const [query, setQuery] = useState("");
  const [user, setUser] = useState(null);

  const fetchDetails = async () => {
    try {
      const { data } = await Axios.get(`https://api.github.com/users/${query}`);

      setUser(data);
      console.log({ data });
    } catch (error) {
      toast("Not able to locate User", { type: "error" });
    }
  };

  // Put Any Page behind the login

  if (!context.user?.uid) {
    return <Redirect to="/signin" />;
  }

  return (
    <Container>
      <Row className=" mt-3 ">
        <InputGroup>
          <Input
            type="text"
            className="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Please provide the username"
          />
          <InputGroupAddon addonType="append">
            <Button
              onClick={fetchDetails}
              className="searchbutton"
              color="primary"
              id="search"
            >
              Fetch User
            </Button>
          </InputGroupAddon>
        </InputGroup>
        <Col md="4" className="mt-5">
          {user ? <UserCard user={user} query={query} /> : null}
        </Col>
        <Col md="7" className="ms-5 mt-5">
          {user ? <Repos repos_url={user.repos_url} /> : null}
        </Col>
      </Row>

      {user ? null : <Footer />}
    </Container>
  );
};

export default Home;
