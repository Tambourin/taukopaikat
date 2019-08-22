import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import './index.css';
import App from './App';
import placesReducer from "./reducers/placesReducer";
import filterReducer from "./reducers/filterReducer";
import votesReducer from "./reducers/votesReducer";

const reducer = combineReducers({
  places: placesReducer,
  votes: votesReducer,
  filter: filterReducer,
});
const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>  
  , document.getElementById('root')
);

