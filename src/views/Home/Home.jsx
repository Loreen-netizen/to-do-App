import React from "react";
import styled from "styled-components";
import Layout from "../../components/Layout/Layout";
import { Checkbox, IconButton} from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Item = styled.li`
  margin: 0.1rem 0;
  background: #eee;
  padding: 1rem;
  display:flex;
  width:100%;
`;
const Name = styled.h2``;
const Task = () => {
  return (
    <Item>
      <Checkbox/>
      <Name>Name Of Task</Name>
      <div>
         <IconButton><Edit/></IconButton> 
       <IconButton><Delete /></IconButton> 
      </div>
    </Item>
  );
};

const Home = (props) => {
  const { children } = props;
  return (
    <Layout activePage="home">
      <List>
        <Task />
        <Task />
        <Task />
      </List>
    </Layout>
  );
};

export default Home;
