import React from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import UserIBackground from "../../../src/Images/Header/imgBackground.png";
function Header() {
  const Pages = ["form", "Api"];
  return (
    <MainWrapper>
      <Container>
        <ContentWrapper>
          <Nav>
            <Ul>
              {Pages.map((item, index) => {
                return (
                  <List key={index}>
                    <NavLink to={item === "form" ? "/" : `/${item}`}>{item}</NavLink>
                  </List>
                );
              })}
            </Ul>
          </Nav>
          <Line></Line>
          <NameWrapper>
            <Name>Uour name</Name>
            <Img src={UserIBackground} alt="user img backgorund" />
          </NameWrapper>
        </ContentWrapper>
      </Container>
    </MainWrapper>
  );
}

export default Header;

const MainWrapper = styled.div`
  color: #ffffff;
  font-size: 44px;
  display: flex;
  justify-content: center;
  border-bottom: 2px solid #fff;
`;
const Container = styled.div`
  max-width: 100%;
  width: 90%;
`;
const ContentWrapper = styled.div`
  /* padding: 35px 0; */
  display: flex;
  align-items: center;
`;
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
  list-style: none;
  border-bottom: none;
`;
const List = styled.li`
  color: #ffffff;
  font-size: 40px;
  font-weight: 700;
`;
const Line = styled.div`
  width: 2px;
  background: #fff;
  min-height: 120px;
  margin: 0 53px;
`;
const NameWrapper = styled.div`
  display: flex;
  max-width: 500px;
  font-size: 18px;
  width: max-content;
`;
const Name = styled.span`
  font-size: 40px;
  margin-right: 47px;
  white-space: nowrap;
  cursor: pointer;
`;
const Img = styled.img`
  cursor: pointer;
`;
