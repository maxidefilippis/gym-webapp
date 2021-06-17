import React from "react";
import { Route, Switch } from "react-router-dom";
import { publicRoutes } from "./routes/publicRoutes";

const PublicRouter = () => {
  return (
    <Switch>
      {publicRoutes.map((route, index) => {
        return <Route key={index} {...route} />;
      })}
    </Switch>
  );
};

export default PublicRouter;
