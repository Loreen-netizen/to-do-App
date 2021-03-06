import React, { useState, useEffect } from "react";
import { v4 as createId } from "uuid";
import { HashRouter, Switch, Route, useParams } from "react-router-dom";

import Home from "../../views/Home/Home";
import Add from "../../views/Add/Add";
import Edit from "../../views/Edit/Edit";

const EditWrapper = (props) => {
  const { list, ...remainingProps } = props;
  const { taskId } = useParams();
  console.log({ taskId });
  const { name } = list.find((item) => item.id === taskId);

  return <Edit {...remainingProps} taskId={taskId} initialName={name} />;
};

const App = () => {
  const [loaded, setLoaded] = useState(false);
  const [list, setList] = useState([]);

  useEffect(() => {
    const listAsString = window.localStorage.getItem("list");

    if (listAsString) {
      setList(JSON.parse(listAsString));
    }

    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) {
      window.localStorage.setItem("list", JSON.stringify(list));
    }
  }, [list, loaded]);

  const handleAddItem = (name) => {
    setList([{ id: createId(), name, checked: false }, ...list]);
    window.location.replace("#/");
  };

  const handleCheckToggle = (taskId) => {
    const newList = list.map((item) => {
      if (item.id !== taskId) return item;

      return {
        ...item,
        checked: !item.checked,
      };
    });
    setList(newList);
  };

  const handleDeleteItem = (taskId) => {
    const newList = list.filter((item) => item.id !== taskId);
    setList(newList);
  };

  const handleEditItem = (taskId, name) => {
    const newList = list.map((item) => {
      if (item.id !== taskId) return item;

      return {
        ...item,
        name,
      };
    });
    setList(newList);
    window.location.replace("#/");
  };
  return (
    <HashRouter>
      <Switch>
        <Route
          path="/edit/:taskId"
          children={<EditWrapper list={list} onSave={handleEditItem} />}
        />
        <Route path="/add/" children={<Add onSave={handleAddItem} />} />
        <Route
          path="/"
          children={
            <Home
              list={list}
              onCheckToggle={handleCheckToggle}
              onDeleteItem={handleDeleteItem}
            />
          }
        />
      </Switch>
    </HashRouter>
  );
};
export default App;
