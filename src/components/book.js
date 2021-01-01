import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Book extends Component {
  get matchText() {
    return this.props.searchText.replace(/^\s+/, "").replace(/\s+$/, "");
  }

  get isMatching() {
    return this.matchText.length > 0;
  }

  get matchRegExp() {
    return new RegExp(this.matchText, "i");
  }

  get matches() {
    if (!this.isMatching) {
      return true;
    }
    const reText = this.matchRegExp;
    if (this.props.title.match(reText)) {
      return true;
    }
    let found = false;
    React.Children.forEach(this.props.children, (child) => {
      if (child.match(reText)) {
        found = true;
      }
    });
    return found;
  }

  render() {
    return this.matches ? (
      <div className="book">
        <div className="row">
          <div className="col-3">
            <a href={this.props.url} border="0">
              <img alt={`${this.props.title} cover`} src={this.props.image} />
            </a>
          </div>
          <div className="col-9">
            <div className="title">
              <a href={this.props.url} border="0">
                {this.props.title}
              </a>
            </div>
            <p className="description">{this.props.children}</p>
          </div>
        </div>
      </div>
    ) : null;
  }
}

Book.propTpes = {
  url: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
