import React from "react";
import styled from "styled-components";
import Layout from "../../components/Layout/Layout"

const Home = (props) => {
    const { children } = props;
  return (
    <Layout activePage="home">dfgh
      {/* <Header>
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
      </Footer> */}
    </Layout>
  );
};

export default Home;
