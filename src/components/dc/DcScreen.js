import React from "react";
import { HeroList } from "../heros/HeroList";

export const DcScreen = () => {
  return (
    <div>
      <h1>DC Comics</h1>
      <HeroList publisher="DC Comics" />
    </div>
  );
};
