import React from "react";
import { Card, CardBody, Button } from "reactstrap";

const UserCard = ({ user, query }) => {
  return (
    <Card className="text-center mt-3 mb-4 usercard ">
      <style>{"body { background-color: #F3F5F7; }"}</style>
      <img src={user.avatar_url} className="userimg" />
      <CardBody>
        <div
          className=" cardtxt"
          style={{
            paddingBottom: "15px",
            fontWeight: "500",
            letterSpacing: "1px",
            fontSize: "20px",
            color: "#0e153a",
            opacity: "90%",
          }}
        >
          Name :{" "}
          <span
            style={{ opacity: "80%", fontWeight: "500", paddingLeft: "5px" }}
          >
            {user.name ? user.name : "None"}
          </span>
        </div>
        <div
          className="cardtxt"
          style={{
            fontWeight: "500",
            letterSpacing: "1px",
            fontSize: "20px",
            color: "#0e153a",
            opacity: "90%",
          }}
        >
          {user.location}
        </div>
        {/* <div className="text-primary">{user.bio}</div> */}
        {/* <div className="text-info">
          Available for Hire: {user.hireable ? "Yes" : "No"}
        </div> */}
        <div
          className="cardtxt"
          style={{
            paddingBottom: "15px",
            fontWeight: "500",
            letterSpacing: "1px",
            fontSize: "20px",
            color: "#0e153a",
            opacity: "90%",
          }}
        >
          Followers:
          <span
            style={{ opacity: "60%", fontWeight: "500", paddingLeft: "10px" }}
          >
            {user.followers}
          </span>
        </div>
        <a href={user.html_url} target="_blank">
          <Button className="visitbutton" color="primary">
            Check Profile
          </Button>
        </a>
      </CardBody>
    </Card>
  );
};

export default UserCard;
