import React, { Component } from "react";

class Video extends Component {
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
      <div className="video">
        <a href={this.props.url}>{this.props.title}</a> - {this.props.children}
      </div>
    ) : null;
  }
}

export default Video;
