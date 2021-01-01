import React, { Component } from "react";
import { Motion, spring } from "react-motion";
import PropTypes from "prop-types";

export default class Skill extends Component {
  render() {
    return (
      <Motion defaultStyle={{ x: 0 }} style={{ x: spring(this.props.level) }}>
        {(value) => (
          <div className="item-skills" style={{ width: `${value.x}%` }}>
            {this.props.children}
          </div>
        )}
      </Motion>
    );
  }
}

Skill.propTypes = {
  level: PropTypes.number.isRequired,
};
