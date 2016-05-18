import React, {Component} from 'react';
import {connect} from 'react-redux';
import store from '../store/store';

class SearchableItems extends Component {
  render() {
    return (
      <div className="box">
        <h2>{this.props.title}</h2>
        {this.props.items.map((item, index) => React.cloneElement(item, {searchText: this.props.searchText, key: index}))}
      </div>
    )
  }
}

export default connect(state => { return {searchText: state.searchText}})(SearchableItems);
