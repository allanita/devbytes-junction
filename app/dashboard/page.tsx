import React from "react";
import SideNav from "./components/SideNav";
import Content from "./components/Content";

type Props = {};

const Page = (props: Props) => {
  return (
    <div className="h-screen grid grid-cols-12 grid-rows-4">
      {/* RIGHT */}
      <div className="col-span-12 md:col-span-3 lg:col-span-2 row-span-4 bg-base-200 p-4">
        <SideNav />
      </div>

      {/* CONTENT */}
      <div className="col-span-12 md:col-span-9 lg:col-span-10 row-span-4 p-4">
        <Content />
      </div>
    </div>
  );
};

export default Page;
