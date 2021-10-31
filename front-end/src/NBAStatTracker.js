import React from "react";
import { Route } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";

export const NBAStatTracker = () => {
  <>
    <Route
      render={() => {
        return (
          <>
            <ApplicationViews />
          </>
        );
      }}
    />
  </>;
};
