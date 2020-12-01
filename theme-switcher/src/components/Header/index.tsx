import React, {useContext} from "react";
import Switch from "react-switch";
import { ThemeContext } from "styled-components"


import { Container } from "./styles";

interface HeaderProps {
  toggleTheme(): void;
}

const Header: React.FC<HeaderProps> = ({toggleTheme}) => {
  const {colors, title} = useContext(ThemeContext)

  return (
  <Container>
    <h1>Olá Daniel Bem vindo</h1>

    <Switch
    onChange={toggleTheme}
    checked={title === 'dark'}
    checkedIcon={false}
    uncheckedIcon={false}
    offColor={colors.light}
    onColor={colors.dark}
    />
  </Container>
  );
};

export default Header;
