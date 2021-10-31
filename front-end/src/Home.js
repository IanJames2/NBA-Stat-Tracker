import React from "react";
import { Route } from "react-router";
import { TeamList } from "./components/teams/TeamList";

export const Home = () => {
  <>
    <Route>
      <TeamList></TeamList>
    </Route>
  </>;
};
