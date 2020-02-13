import React, { Component } from "react";

class Like extends Component {
  state = {};
  render() {
    let classes = "fa fa-heart";
    if (!this.props.liked) classes += "-o";
    let iduse = "like";
    if (classes === "fa fa-heart-o") iduse = "like1";
    return (
      <i
        id={iduse}
        onClick={this.props.onClick}
        className={classes}
        aria-hidden="true"
        style={{ cursor: "pointer" }}
      ></i>
    );
  }
}

export default Like;
