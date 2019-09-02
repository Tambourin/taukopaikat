import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

const HeaderMenu = () => {
  return (
    <Menu stackable inverted color="olive" fluid>
      <Menu.Item as={Link} to="/">
        <h2>Taukopaikat.fi</h2>
      </Menu.Item>
    </Menu>
  )
}

export default HeaderMenu;