import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Focus extends Component {
  render() {
    return (
      <div className="detail">
        <span className="focus">
          Focus on <span className="skill">{this.props.skill}</span>
        </span>
        : {this.props.children}
      </div>
    );
  }
}

Focus.propTypes = {
  skill: PropTypes.string.isRequired,
};
