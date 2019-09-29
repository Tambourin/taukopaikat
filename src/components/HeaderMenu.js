import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

const HeaderMenu = () => {
  return (
    <Menu stackable inverted color="olive" fluid style={{ marginBottom: "0px" }}>
      <Menu.Item as={Link} to="/">
        <h2 style={{fontFamily: "'Source Sans Pro', sans-serif"}}>Taukopaikat.fi</h2>
      </Menu.Item>
    </Menu>
  )
}

export default HeaderMenu;