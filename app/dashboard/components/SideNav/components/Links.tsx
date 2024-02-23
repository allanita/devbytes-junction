import Link from "next/link";
import React from "react";

type Props = {
  links: { label: string; path: string }[];
};

const Links = (props: Props) => {
  return (
    <div className="my-4">
      <ul className="list-inside list-disc">
        {props.links.map((x) => (
          <Link
            key={x.path}
            className="not-prose hover:text-base-content w-full"
            href={x.path}
          >
            <li>{x.label}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Links;
