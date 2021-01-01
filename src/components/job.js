import React, { Component } from "react";
import PropTypes from "prop-types";

class Job extends Component {
  constructor(props) {
    super(props);
    this.state = { opened: false };
  }

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
    if (
      this.props.company.match(reText) ||
      this.props.title.match(reText) ||
      this.props.keyProjects.match(reText)
    ) {
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

  get matchingFocusElements() {
    const reText = this.matchRegExp;
    const matching = [];
    React.Children.forEach(this.props.focusElements, (element) => {
      if (element.props && element.props.skill) {
        let found = false;
        if (element.props.skill.match(reText)) {
          found = true;
        } else {
          React.Children.forEach(element.props.children, (child) => {
            if (child.match(reText)) {
              found = true;
            }
          });
        }
        if (found) {
          matching.push(element);
        }
      }
    });
    return matching;
  }

  render() {
    return this.matches ? (
      <div className="job" key={this.props.key}>
        <div className="row">
          <div className="col-3">
            <div className="where">{this.props.company}</div>
            <div className="year">{this.props.dates}</div>
          </div>
          <div className="col-9">
            <div className="profession">{this.props.title}</div>
            <p className="description">{this.props.children}</p>
            {this.isMatching || this.state.opened ? (
              <div>
                <div className="hidden-phone key-projects">
                  {this.props.keyProjects}
                </div>
                <div className="hidden-phone focus-elements">
                  {this.matchingFocusElements.map((elem, index) => (
                    <div key={index}>{elem}</div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="more">
                <a
                  href="/"
                  onClick={(evt) => {
                    evt.preventDefault();
                    this.setState({ opened: true });
                  }}
                >
                  Find out more...
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    ) : null;
  }
}

Job.defaultProps = {
  searchText: "",
  keyProjects: "",
};

Job.propTpes = {
  dates: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  focusElements: PropTypes.arrayOf(PropTypes.node).isRequired,
  keyProjects: PropTypes.string,
  searchText: PropTypes.string,
};

export default Job;
