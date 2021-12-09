//https://api.github.com/users/theCodeNilesh/repos
//https://api.github.com/users/theCodeNilesh main API
//"https://github.com/theCodeNilesh/Easier"  {html_ur} visit repo link

import React, { useState, useEffect } from "react";
import Axios from "axios";
import { ListGroup, ListGroupItem } from "reactstrap";

const Repos = ({ repos_url }) => {
  const [repos, setRepos] = useState([]);

  const fetchRepos = async () => {
    const { data } = await Axios.get(repos_url);
    setRepos(data);
  };

  useEffect(() => {
    fetchRepos();
  }, [repos_url]);

  return (
    <ListGroup className="mb-5">
      {repos.map((repo) => (
        <ListGroupItem className="listgroup repocard" key={repo.id}>
          <div
            className="listgrouptxt"
            style={{
              paddingTop: "15px",
              fontWeight: "500",
              letterSpacing: "2px",
              fontSize: "22px",
              color: "#0e153a",
            }}
          >
            Repo name: {repo.name}
          </div>
          <div
            className=" listgrouptxt"
            style={{
              paddingTop: "15px",
              fontWeight: "500",
              letterSpacing: "2px",
              fontSize: "18px",
              color: "#0e153a",
              opacity: "90%",
            }}
          >
            {" "}
            Repo language:{" "}
            <span
              style={{ opacity: "80%", fontWeight: "400", paddingLeft: "5px" }}
            >
              {repo.language}
            </span>
          </div>
          <div
            className=" listgrouptxt"
            style={{
              fontWeight: "500",
              letterSpacing: "2px",
              fontSize: "18px",
              color: "#0e153a",
              opacity: "90%",
            }}
          >
            Repo description:
            <span
              style={{ opacity: "80%", fontWeight: "400", paddingLeft: "5px" }}
            >
              {" "}
              {repo.description ? repo.description : "None"}{" "}
            </span>
          </div>
          <div
            className=" listgrouptxt"
            style={{
              paddingBottom: "15px",
              fontWeight: "500",
              letterSpacing: "2px",
              fontSize: "18px",
              color: "#0e153a",
              opacity: "90%",
            }}
          >
            Repo link:-
            <a
              href={repo.html_url}
              style={{
                opacity: "80%",
                fontWeight: "400",
                paddingLeft: "5px",
                inlineSize: "150px",
                overflowWrap: "break-word",
              }}
              target="_blank link "
            >
              {repo.html_url}
            </a>
          </div>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default Repos;
