import React, { Component } from "react";
import { Card } from "react-bootstrap";
export default class User extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.handleClick}
          style={{ justifyself: "center" }}>
          Click for Info
        </button>
        {/* map threw then data from the server */}
        {this.props.UserData.map((user) => {
          return (
            <>
              {/* put the data into card form for better display */}
              <Card style={{ width: "18rem", textAlign: "center" }}>
                <Card.Body>
                  <Card.Title>{user.username}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {user.email}
                  </Card.Subtitle>
                  <Card.Text>
                    Bio: {user.bio}
                    <br></br>
                    Region: {user.region}
                  </Card.Text>
                </Card.Body>
              </Card>
            </>
          );
        })}
      </div>
    );
  }
}
