import React from "react";
import { connect } from "react-redux";
import { Menu, Icon, Dropdown, Loader } from "semantic-ui-react";
import { login, logout } from "../reducers/userReducer";

const LoginLogoutMenuItem = ({ dropdown, login, logout, user, loading, errored }) => {
  if(loading) {
    return <Loader active/>;
  }

  if(errored) {
    return <div>Kirjautuminen epäonnistui</div>
  }

  const DropdownMenu = () => {    
    if (user) {
      return (
        <Dropdown.Item onClick={() => logout()}>       
          <Icon name="sign-out" />
          Kirjaudu ulos                 
        </Dropdown.Item>
      );
    }
    return (
      <Dropdown.Item onClick={() => login()}>
        <Icon name="sign-in" />
        Kirjaudu sisään
      </Dropdown.Item>
    );
  }

  const NormalMenu = () => {
    if (user) {
      return (
        <Menu.Item onClick={() => logout()}>    
          <Menu.Header>{user.nickname}</Menu.Header>            
          <Menu.Item>     
            <Icon name="sign-out" />
            Kirjaudu ulos
          </Menu.Item>        
        </Menu.Item>
      );
    }

    return (
      <Menu.Item onClick={() => login()}>
        <Icon name="sign-in" />
        Kirjaudu sisään
      </Menu.Item>
    )
  }

  
  if(dropdown) {
    return <DropdownMenu />
  } 
  return <NormalMenu />
  
}

const mapsStateToProps = state => {
  return { 
    user: state.user.user,
    loading: state.user.loading,
    errored: state.user.errored
  }
}

export default connect(mapsStateToProps, { login, logout })(LoginLogoutMenuItem);