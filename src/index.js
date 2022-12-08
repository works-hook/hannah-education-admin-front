import React, {Suspense} from "react";
import ReactDOM from "react-dom";
import "./assets/scss/style.scss";
import "./assets/scss/_variables.scss";
import App from "./App";
import { HashRouter } from "react-router-dom";
import Loader from "./layouts/loader/Loader";
import store from './token/index';
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';

ReactDOM.render(
  <Suspense fallback={<Loader/>}>
    <HashRouter>
      <CookiesProvider>
        <Provider store={store}>
          <App/>
        </Provider>
      </CookiesProvider>
    </HashRouter>
  </Suspense>,

  document.getElementById("root")
);

