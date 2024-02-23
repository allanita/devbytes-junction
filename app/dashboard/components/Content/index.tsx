import React from "react";
import Header from "./components/Header";
import Feed from "./components/Feed";

type Props = {};

const Content = (props: Props) => {
  return (
    <div>
      <Header />
      <Feed />
    </div>
  );
};

export default Content;
