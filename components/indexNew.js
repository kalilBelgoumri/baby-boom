import { Router } from "next/router";
import React, { Component } from "react";
import { Icon, Menu } from "semantic-ui-react";
import Link from "next/link";

export default class MenuExampleVerticalDropdown extends Component {
  state = { activeItem: "Adresses e-mail" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu
        secondary
        vertical
        size="massive"
        className="size"
        pointing
        vertical
      >
        <Menu.Item
          Link
          passHref
          href="../dashboard/picture"
          picture
          name="Adresses e-mail"
          active={activeItem === "Adresses e-mail"}
          onClick={this.handleItemClick}
        />

        <Menu.Item
          name="Numéros de téléphone"
          active={activeItem === "Numéros de téléphone"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="Changer le mot de passe"
          active={activeItem === "Changer le mot de passe"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="Photo de profile"
          active={activeItem === "Photo de profile"}
          onClick={this.handleItemClick}
          Link
          passHref
          href="dashboard/picture"
        />
      </Menu>
    );
  }
}
