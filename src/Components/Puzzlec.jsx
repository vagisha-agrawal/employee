import React, { Component } from "react";
import { Button, Container, Row } from "react-bootstrap";

export default class Puzzlec extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numArr: ["1", "2", "3", "4", "5", "6", "7", "", "8"],
    };
    this.submit = this.submit.bind(this);
  }

  // componentDidMount() {
  //   this.getNumberArray();
  // }

  getNumberArray() {
    let { numArr } = this.state;
    let i = numArr.length,
      j = 0,
      temp = 0;

    while (i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = numArr[i];
      numArr[i] = numArr[j];
      numArr[j] = temp;
    }
    this.setState({ numArr });
  }

  startOver = () => {
    this.getNumberArray();
  };

  getValue(e, index) {
    const value = e.target.value;
    const { numArr } = this.state;

    numArr[index] = "";
    switch (index) {
      case 8:
        if (numArr[5] === "") {
          numArr[5] = value;
        } else if (numArr[7] === "") {
          numArr[7] = value;
        }
        console.log(numArr);
        break;

      case 7:
        if (numArr[4] === "") {
          numArr[4] = value;
        } else if (numArr[6] === "") {
          numArr[6] = value;
        } else if (numArr[8] === "") {
          numArr[8] = value;
        }
        break;

      case 6:
        if (numArr[3] === "") {
          numArr[3] = value;
        } else if (numArr[7] === "") {
          numArr[7] = value;
        }
        break;

      case 5:
        if (numArr[2] === "") {
          numArr[2] = value;
        } else if (numArr[4] === "") {
          numArr[4] = value;
        } else if (numArr[8] === "") {
          numArr[8] = value;
        }
        break;

      case 4:
        if (numArr[1] === "") {
          numArr[1] = value;
        } else if (numArr[3] === "") {
          numArr[3] = value;
        } else if (numArr[5] === "") {
          numArr[5] = value;
        } else if (numArr[7] === "") {
          numArr[7] = value;
        }
        break;

      case 3:
        if (numArr[0] === "") {
          numArr[0] = value;
        } else if (numArr[4] === "") {
          numArr[4] = value;
        } else if (numArr[6] === "") {
          numArr[6] = value;
        }
        break;

      case 2:
        if (numArr[1] === "") {
          numArr[1] = value;
        } else if (numArr[5] === "") {
          numArr[5] = value;
        }
        break;

      case 1:
        if (numArr[0] === "") {
          numArr[0] = value;
        } else if (numArr[2] === "") {
          numArr[2] = value;
        } else if (numArr[4] === "") {
          numArr[4] = value;
        }
        break;

      // Index 0
      default:
        if (numArr[1] === "") {
          numArr[1] = value;
        } else if (numArr[3] === "") {
          numArr[3] = value;
        }
        break;
    }

    this.setState({ numArr }, () => {
      setTimeout(() => {
        this.submit();
      }, 500);
    });
  }

  submit() {
    let { numArr } = this.state;
    //console.log(numArr);
    if (
      numArr[0] === "1" &&
      numArr[1] === "2" &&
      numArr[2] === "3" &&
      numArr[3] === "4" &&
      numArr[4] === "5" &&
      numArr[5] === "6" &&
      numArr[6] === "7" &&
      numArr[7] === "8"
    ) {
      alert("You win");
    } else {
      console.log("Game is still pending");
    }
  }

  render() {
    let { numArr } = this.state;

    return (
      <div>
        <Container className="Number-puzzle">
          <Row className="justify-content-center">
            <div className="col-6">
              <h1>Number Puzzle Sliding</h1>
            </div>
          </Row>
          <Row className="justify-content-center mt-4">
            <div className="col-3">
              <Button onClick={this.startOver}>Start Over</Button>
            </div>
          </Row>
          <Row className="justify-content-center">
            <div className="col-3">
              <Row className="mt-5 justify-content-center bg-light py-2">
                {numArr.map((number, index) => (
                  <div className="col-4 mt-4" key={index}>
                    <Button
                      size="lg"
                      onClick={(e) => this.getValue(e, index)}
                      value={number}
                    >
                      {number}
                    </Button>
                  </div>
                ))}
              </Row>
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}
