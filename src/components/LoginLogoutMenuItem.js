import React from "react";
import { connect } from "react-redux";
import { Menu, Icon, Dropdown, Loader, Image } from "semantic-ui-react";
import { login, logout } from "../reducers/userReducer";

const LoginLogoutMenuItem = ({
  dropdown,
  login,
  logout,
  user,
  loading,
  errored
}) => {
  if (loading) {
    return <Loader active />;
  }

  const logoutText = () => {
    return (
      <>
        <Icon name="sign-out" />
        Kirjaudu ulos
      </>
    )    
  }

  const loginText = () => {
    return (
      <>
        <Icon name="sign-in" />
        {errored ? (
          <span style={{ color: "red" }}>
            Kirjautuminen epäonnistui yritä uudelleen
          </span>
        ) : (
          
            "Kirjaudu sisään"
          
        )}
      </>
    )
  }

  const DropdownMenu = () => {
    if (user) {
      return (
        <>
          <Dropdown.Item>
          <Image inline size="mini" circular src={user.picture} alt="Käyttäjäkuvake"/>
            {user.nickname}
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={() => logout()}>
            {logoutText()}
          </Dropdown.Item>
        </>
      );
    }
    return (
      <Dropdown.Item onClick={() => login()}>
        {loginText()}
      </Dropdown.Item>
    );
  };

  const NormalMenu = () => {
    if (user) {
      return (
        <Menu.Item onClick={() => logout()}>
          
            <div>Kirjautunut:  {user.nickname} </div>
            <Image style={{ marginLeft: "10px" }} inline size="mini" circular src={user.picture} alt="Käyttäjäkuvake"/>            
          <Menu.Item>
            {logoutText()}
          </Menu.Item>
        </Menu.Item>
      );
    }
    return (
      <Menu.Item onClick={() => login()}>
        {loginText()}
      </Menu.Item>
    );
  };

  if (dropdown) {
    return <DropdownMenu />;
  }
  return <NormalMenu />;
};

const mapsStateToProps = state => {
  return {
    user: state.user.user,
    loading: state.user.loading,
    errored: state.user.errored
  };
};

export default connect(mapsStateToProps, { login, logout })(
  LoginLogoutMenuItem
);
