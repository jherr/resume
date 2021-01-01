import {createStore} from "redux";

const searchStore =  (state = {searchText: ""}, action) => {
  switch (action.type) {
    case "SET":
      return {...state, searchText: action.searchText};
    default:
      return state;
  }
};

let store = createStore(searchStore);

export default store;
