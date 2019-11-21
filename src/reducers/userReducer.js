import createAuth0Client from "@auth0/auth0-spa-js";
import { createBrowserHistory } from "history";
import authConfig from "../authConfig";
import placeService from "../services/placesService";

const CONFIGURE_START = "CONFIGURE_START";
const CONFIGURE_SUCCESS = "CONFIGURE_SUCCESS";
const CONFIGURE_FAILURE = "CONFIGURE_FAILURE";
const LOGOUT = "LOGOUT";

const defaultState = {
  authClient: null,
  isAuthenticated: false,
  token: null,
  user: null,
  loading: false,
  errored: false
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CONFIGURE_START:
      return { ...state, loading: true, errored: false };
    case CONFIGURE_SUCCESS:
      return {
        ...state,
        loading: false,
        errored: false,
        authClient: action.authClient,
        user: action.user,
        token: action.token,
        isAuthenticated: action.isAuthenticated
      };
    case CONFIGURE_FAILURE:
      return {
        ...state,
        loading: false,
        errored: true,
        isAuthenticated: false,
        user: null,
        token: null
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
        token: null,
        isAuthenticated: null,
        loading: false,
        errored: false
      };
    default:
      return state;
  }
};



export const initializeAuth = () => {
  return async dispatch => {
    console.log("init auth");
    dispatch({ type: CONFIGURE_START });
    try {
      const auth0 = await createAuth0Client(authConfig());
      console.log("authClient: ", auth0);
      if (window.location.search.includes("code=")) {
        console.log("Auth0 handleRedirect");
        const { appState } = await auth0.handleRedirectCallback();
        console.log(appState.targetUrl);        
        createBrowserHistory().replace(appState.targetUrl);
      }
      const isAuthenticated = await auth0.isAuthenticated();
      let user = null;
      let token = null;      
      if (isAuthenticated) {
        user = await auth0.getUser();
        token = await auth0.getTokenSilently();
        placeService.setToken(token);
      }
      console.log("isAuthenticated:", isAuthenticated);
      console.log("user:", user);
      console.log("token:", token);      
      dispatch({
        type: CONFIGURE_SUCCESS,
        authClient: auth0,
        isAuthenticated: isAuthenticated,
        token: token,
        user: user
      });
    } catch (error) {
      dispatch({ type: CONFIGURE_FAILURE });
      console.log(error);
    }
  };
};

export const login = () => {
  return async (dispatch, getState) => {
    console.log("login");
    dispatch({ type: CONFIGURE_START });
    try {
      const authClient = getState().user.authClient;
      await authClient.loginWithRedirect({
        appState: { targetUrl: window.location.pathname },
        redirect_uri: process.env.NODE_ENV === "production"
            ? "https://taukopaikat.herokuapp.com"
            : "http://localhost:3000"
      });
    } catch (error) {
      dispatch({ type: CONFIGURE_FAILURE });
      console.log(error);
    }
  };
};

export const logout = () => {
  return async (dispatch, getState) => {
    dispatch({ type: CONFIGURE_START });
    try {
      const authClient = getState().user.authClient;
      authClient.logout({
        returnTo: window.location.origin
      });
      dispatch({
        type: LOGOUT
      });
    } catch (error) {
      dispatch({ type: CONFIGURE_FAILURE });
      console.log(error);
      return;
    }
  };
};

export default userReducer;
