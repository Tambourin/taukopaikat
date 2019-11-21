import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Menu, Icon, Dropdown, Responsive } from "semantic-ui-react";
import LoginLogoutMenuItem from "./LoginLogoutMenuItem";

const HeaderMenu = ({ user }) => {
  const AddPlaceMenuItem = (dropdown) => {
    if(!user) {
      return null;
    }
    if (dropdown) {
      return (
        <Dropdown.Item as={Link} to="/edit/new">
          <Icon name="add square" />
          Lisää uusi taukopaikka
        </Dropdown.Item>
      );
    }
    return (
      <Menu.Item as={Link} to="/edit/new">
        <Icon name="add square" />
        Lisää uusi taukopaikka
      </Menu.Item>
    );
  }

  const FullMenu = () => {
    return (
      <Responsive as={Menu.Menu} position="right" minWidth={Responsive.onlyTablet.minWidth}>
        <AddPlaceMenuItem />
        <LoginLogoutMenuItem />
      </Responsive>
    );
  };

  const MobileMenu = () => {
    return (
      <Responsive as={Menu.Menu} position="right" maxWidth={Responsive.onlyTablet.minWidth}>
        <Menu.Item>
          <Dropdown icon="bars" floating>
            <Dropdown.Menu>            
              <AddPlaceMenuItem dropdown/>
              <LoginLogoutMenuItem dropdown/>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>
      </Responsive>
    );
  }
  

  return (
    <Menu
      borderless
      inverted
      color="olive"
      fluid      
      style={{ marginBottom: "0px" }}
    >
      <Menu.Item as={Link} to="/">
        <h1 style={{ fontSize: "32px" }}>Taukopaikat.fi</h1>
      </Menu.Item>
      <FullMenu />
      <MobileMenu />
    </Menu>
  );
};

const mapsStatetoProps = state => {
  return {
    user: state.user.user    
  };
};

export default connect(
  mapsStatetoProps
)(HeaderMenu);
