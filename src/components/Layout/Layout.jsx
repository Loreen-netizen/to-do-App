import React from "react";
import styled from "styled-components";
import Link from "../Link/Link"

const Header = styled.header`
  background: #b5179e;
  color: white;
  text-align: center;
  padding: 0.1em;
  border-radius: 8px;
`;

const Title = styled.h1`
  background: #b5179e;
  color:white
  font-family: Arial, sans-serif;
  letter-spacing: -1px;
`;

const Footer = styled.footer`
  background: #f7a2dd;
  border-radius: 8px;
  position: fixed;
  bottom: 0;
  left: 0;
  text-align: center;
  width: 100%;
  color:#A846A0;
  font-weight:900;
`;

const List = styled.ul`
  list-style: none;
  font-family: Arial, Sans-serif;
  display:flex;
  width: 100%;
  padding:0;
  margin:0;
`;

const LinkWrap = styled.li`
width: 50% `

const Home = (props) => {
    const {children, activePage="home"}= props;
      return (
    <>
      <Header>
        <Title>To Do App</Title>
      </Header>

    {children}

      <Footer>
        <nav>
          <List>
            <LinkWrap>
              <Link>Home</Link>
            </LinkWrap>

            <LinkWrap>
              <Link>Add</Link>
            </LinkWrap>
          </List>
        </nav>
      </Footer>
    </>
  );
};
export default Home;
