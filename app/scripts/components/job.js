import React, {Component} from 'react';

export default class Job extends Component {
  constructor(props) {
    super(props);
    this.state = {opened: false};
  }

  get matchText() {
    return this.props.searchText.replace(/^\s+/, '').replace(/\s+$/, '');
  }

  get isMatching() {
    return (this.matchText.length > 0);
  }

  get matchRegExp() {
    return new RegExp(this.matchText, "i");
  }

  get matches() {
    if (!this.isMatching) {
      return true;
    }
    const reText = this.matchRegExp;
    if (this.props.company.match(reText) ||
      this.props.title.match(reText) ||
      this.props.keyProjects.match(reText) ) {
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
      <div className="job clearfix" key={this.props.key}>
        <div className="col-xs-3">
          <div className="where">{this.props.company}</div>
          <div className="year">{this.props.dates}</div>
        </div>
        <div className="col-xs-9">
          <div className="profession">{this.props.title}</div>
          <div className="description">{this.props.children}</div>
          {this.isMatching || this.state.opened ? (
            <div>
              <div className="hidden-phone key-projects">{this.props.keyProjects}</div>
              <div className="hidden-phone focus-elements">
                {this.matchingFocusElements.map((elem, index) => (
                  <div key={index}>
                    {elem}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="more">
              <a onClick={(evt) => {
                evt.preventDefault();
                this.setState({opened: true});
              }}>Find out more...</a>
            </div>
          )}
        </div>
      </div>
    ) : null;
  }
};

Job.defaultProps = {
  searchText: "",
  keyProjects: ""
};

Job.propTpes = {
  dates: React.PropTypes.string.isRequired,
  company: React.PropTypes.string.isRequired,
  location: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  focusElements: React.PropTypes.arrayOf(React.PropTypes.node).isRequired,
  keyProjects: React.PropTypes.string,
  searchText: React.PropTypes.string
};
