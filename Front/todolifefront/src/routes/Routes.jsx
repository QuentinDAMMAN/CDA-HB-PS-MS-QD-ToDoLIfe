import React, { Component } from "react";
import Switch from "react-bootstrap/esm/Switch";
import { Route } from "react-router";

import Home from "../views/home/Home";
import ConnexionForm from "../components/form/ConnexionForm";
import InscriptionForm from "../components/form/InscriptionForm";
import AttenteValidation from "../components/pageArrive/AttenteValidation";

import { createBrowserHistory } from "history";

import {
  URL_ATTENTE,
  URL_CONNEXION,
  URL_HOME,
  URL_INSCRIPTION,
  URL_JOURNAL,
  URL_TODO_LIST,
  URL_WATCHLIST,
  PAGE_CONNEXION,
  PAGE_DECONNEXION,
  URL_NEW_TODO_LIST,
  URL_UPDATE_TODO_LIST,
  URL_INSIDE_TODOLIST,
} from "../constant/URL_CONST";

import { PrivateRoute } from "./PrivateRoute";
import TodoListView from "../views/TodoListView";
import { ToastContainer, Zoom } from "react-toastify";
import MonJournal from "../components/journal/MonJournal";
import MaWatchlist from "../components/watchlist/MaWatchlist";

import Auth from "../service/Auth";
import AddList from "../components/todoList/AddList";
import UpdateList from "../components/todoList/UpdateList";
import TodoInside from "../components/todoList/TodoInside";
// import Error404 from "../views/Error404";

const CustomHistory = createBrowserHistory();

class Routes extends Component {
  state = {
    connected: false,
  };

  render() {
    return (
      <>
        <Switch history={CustomHistory}>
          {/* Home */}
          <Route exact path={URL_HOME} component={Home} />

          {/* Form Inscription */}
          <Route path={URL_INSCRIPTION} component={InscriptionForm} />

          {/* page d'attente de validation */}
          <Route path={URL_ATTENTE} component={AttenteValidation} />

          {/* Form Connection */}
          <Route path={URL_CONNEXION} component={ConnexionForm} />

          {/* page connection */}
          <Route path={PAGE_CONNEXION} component={Auth} />
          {/* page connection */}
          <Route path={PAGE_DECONNEXION} component={Auth} />

          {/* view todolist */}
          <PrivateRoute path={URL_TODO_LIST} component={TodoListView} />

          {/* add todolist */}
          <PrivateRoute path={URL_NEW_TODO_LIST} component={AddList} />

          {/* update todolist */}
          <PrivateRoute path={URL_UPDATE_TODO_LIST} component={UpdateList} />
          
          {/* add todo on todolist */}
          <PrivateRoute path={URL_INSIDE_TODOLIST} component={TodoInside} />

          {/* view journal*/}
          <PrivateRoute path={URL_JOURNAL} component={MonJournal} />

          {/* view watchlist*/}
          <PrivateRoute path={URL_WATCHLIST} component={MaWatchlist} />
          {/* <Route component={Error404} /> */}

          {/* composants toaster */}
          <ToastContainer
            draggable={false}
            transition={Zoom}
            autoClose={10000}
          />
        </Switch>
      </>
    );
  }
}

export default Routes;
