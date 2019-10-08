import React from "react";
import { Link } from "react-router-dom";
import { Menu, Icon } from "semantic-ui-react";

const HeaderMenu = () => {
  return (
    <Menu borderless inverted color="olive" fluid style={{ marginBottom: "0px" }}>
      <Menu.Item as={Link} to="/">
        <h1 style={{ fontSize: "32px" }}>Taukopaikat.fi</h1>
      </Menu.Item>
      <Menu.Item position="right">
        <Icon name="sign-in" />
        Kirjaudu sisään
      </Menu.Item>
    </Menu>
  )
}

export default HeaderMenu;