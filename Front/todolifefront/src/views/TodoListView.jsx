import "../assets/css/todolist/todo-list.css";

import React, { useEffect, useState } from "react";
import TodolistService from "../service/TodolistService";
import { useHistory } from "react-router";
import {
  URL_INSIDE_TODOLIST,
  URL_NEW_TODO_LIST,
  URL_UPDATE_TODO_LIST,
} from "../constant/URL_CONST";

const TodoListView = () => {
  const history = useHistory();
  const [list, setList] = useState("");

  useEffect(() => {
    getListByUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getListByUser = () => {
    TodolistService.getListByUser(localStorage.getItem("id")).then((res) => {
      let dataRecup = res.data;
      let postData = dataRecup.map((elem) => (
        <div
          key={elem.idTodoList}
          className="overflow-auto mx-auto align-middle d-flex flex-row justify-content-around row css-list-todo"
        >
          <div
            className="media-todo-list col-3"
            onClick={() => clickTodo(elem.idTodoList, elem.label)}
          >
            <h6 className="text text-white w-100">{elem.label}</h6>
          </div>
          <div className="media-todo-list col-3">
            <button
              onClick={() => updateList(elem.idTodoList, elem.label)}
              className="todo-button-update"
            ></button>
          </div>
          <div className="media-todo-list col-3">
            <button
              onClick={() => removeList(elem.idTodoList)}
              className="todo-button-remove"
            ></button>
          </div>
        </div>
      ));

      setList(postData);
    });
  };

  const removeList = (id) => {
    TodolistService.removeById(id).then((res) => {
      console.log(res);
    });
    history.go(0);
  };

  const updateList = (id, label) => {
    history.push({
      pathname: URL_UPDATE_TODO_LIST,
      labelList: label,
      idList: id,
    });
  };

  const clickTodo = (id, label) => {
    history.push({
      pathname: URL_INSIDE_TODOLIST,
      labelList: label,
      idList: id,
    });
  };

  const clickAdd = () => {
    history.push(URL_NEW_TODO_LIST);
  };

  return (
    <>
      {list.length > 1 ? (
        <div className="todo-app">
          <h1 className=" text-white text-center">Mes Todo listes :</h1>
          <br />
          <div className="text-center d-flex">
            <div className="justify-content-aound m-auto p-auto">{list}</div>
          </div>
          <br />
          <button onClick={clickAdd} className="todo-button-add"></button>
        </div>
      ) : (
        <div className="todo-app">
          <h1 className="text-white text-center">Mes Todo liste :</h1>
          <br />
          <div className="text-center d-flex">
            <div className="justify-content-aound m-auto p-auto">{list}</div>
          </div>
          <br />
          <button onClick={clickAdd} className="todo-button-add"></button>
        </div>
      )}
    </>
  );
};

export default TodoListView;
