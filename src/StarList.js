import React from "react";
import Star from "./Star";
import "./ZookList.scss";

class StarList extends React.Component {
  constructor() {
    super();
    this.state = {
      rating: 2.5,
    };
  }

  setRating = (newRating) => {
    this.setState({
      rating: newRating,
    });
  };

  postRating = (newRating) => {
    this.setRating(newRating);
    // fetch("url", {
    //   body: {
    //     rating: newRating,
    //   },
    // }).then(() => this.setState());
  };

  render() {
    return (
      <div className="StarList">
        {new Array(5).fill(1).map((_, index) => (
          <Star
            key={index}
            rating={this.state.rating}
            score={index + 1}
            setRating={this.setRating}
            postRating={this.postRating}
          />
        ))}
      </div>
    );
  }
}

export default StarList;
