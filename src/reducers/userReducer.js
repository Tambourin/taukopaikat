import createAuth0Client from "@auth0/auth0-spa-js";
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
      const authClient = await createAuth0Client(authConfig());
      if (window.location.search.includes("code=")) {
        await authClient.handleRedirectCallback();
        window.history.replaceState({}, document.title, "/");
      }
      const isAuthenticated = await authClient.isAuthenticated();
      let user = null;
      let token = null;
      if (isAuthenticated) {
        user = await authClient.getUser();
        token = await authClient.getTokenSilently();
        placeService.setToken(token);
      }
      dispatch({
        type: CONFIGURE_SUCCESS,
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
  return async dispatch => {
    console.log("login");
    dispatch({ type: CONFIGURE_START });
    try {
      const authClient = await createAuth0Client(authConfig());
      await authClient.loginWithRedirect({
        redirect_uri:
          process.env.NODE_ENV === "production"
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
  return async dispatch => {
    dispatch({ type: CONFIGURE_START });
    try {
      const authClient = await createAuth0Client(authConfig());
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
