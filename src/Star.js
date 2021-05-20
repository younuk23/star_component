import React from "react";
import "./Zook.scss";

class Star extends React.Component {
  postRatingWithScore = () => {
    const { postRating, score } = this.props;
    postRating(score);
  };

  changeRating = (e) => {
    const { setRating, score } = this.props;

    if (e.nativeEvent.offsetX > e.currentTarget.offsetWidth / 2) {
      setRating(score);
    } else {
      setRating(score - 0.5);
    }
  };

  render() {
    const { score, rating } = this.props;
    return (
      <div
        className="Star"
        onClick={this.postRatingWithScore}
        onMouseMove={this.changeRating}
      >
        {rating >= score && <span>큰 별</span>}
        {rating - score === -0.5 && <span>작은 별</span>}
      </div>
    );
  }
}

export default Star;
