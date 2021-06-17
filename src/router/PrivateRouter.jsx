import React from "react";
import { Route, Redirect, Switch } from "react-router";
import { privateRoutes } from "./routes/privateRoutes";

const PrivateRouter = () => {
  const username = "admin";
  return (
    <Switch>
      {username ? (
        privateRoutes.map((route, index) => {
          return <Route key={index} {...route} />;
        })
      ) : (
        <Redirect to="/" />
      )}
    </Switch>
  );
};

export default PrivateRouter;
