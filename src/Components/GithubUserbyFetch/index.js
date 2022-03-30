import React, { useState, useEffect } from "react";
import "./style.css";
const GithubUserbyFetch = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const response = await fetch("https://api.github.com/users");
    // const data = await response.json();
    setUsers(await response.json());
    // console.log(data);
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <div className="main">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h2>List of Github Users</h2>
        </div>

        <div className="mappingHere">
          {users.map((item) => {
            return (
              <>
                <div className="cardOuter">
                  <div className="cardMain">
                    <div className="imageDiv" key={item.id}>
                      <img
                        src={item.avatar_url}
                        alt="random"
                        className="cardImg"
                      />
                    </div>
                    <div className="cardBodyMain">
                      <h3>{item.login}</h3>
                      <p>{item.html_url}</p>
                      <div className="cardFollower">
                        <div>
                          <h3>type</h3>
                          <h3>{item.type}</h3>
                        </div>
                        <div>
                          <h3>Id</h3>
                          <h3>{item.id}</h3>
                        </div>
                        <div>
                          <h3>Gravatar id</h3>
                          <h3>{item.gravatar_id}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default GithubUserbyFetch;
