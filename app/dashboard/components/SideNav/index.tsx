import React from "react";
import Logo from "./components/Logo";
import Links from "./components/Links";

type Props = {};

export default function SideNav(props: Props) {
  const navLinks = [
    { label: "FAQ", path: "/dashboard/faq" },
    { label: "Drafts", path: "/dashboard/drafts" },
    { label: "Videos", path: "/dashboard/videos" },
    { label: "Posts", path: "/dashboard/posts" },
    { label: "Terms of use", path: "/dashboard/terms-of-use" },
  ];

  return (
    <div className="prose m-auto">
      <Logo />
      <Links links={navLinks} />
    </div>
  );
}
