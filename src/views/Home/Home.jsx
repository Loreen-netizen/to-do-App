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
  align-items:center;
`;
const Name = styled.h2`
flex-grow:1;
text-align:center;`;


const Task = (props) => {
    const {id, name, checked} = props;
  return (
    <Item>
      <Checkbox checked={checked}/>
      <Name>{name}</Name>
      <div>
         <IconButton href={`edit/${id}`}><Edit/></IconButton> 
       <IconButton><Delete /></IconButton> 
      </div>
    </Item>
  );
};

const Home = (props) => {
  const { list} = props;
  return (
    <Layout activePage="home">
        {list.map(({id,name,checked})=>(
        <Task id = {id} name ={name} checked={checked}/>))}
      <List>
        <Task />
        <Task />
        <Task />
      </List>
    </Layout>
  );
};

export default Home;
