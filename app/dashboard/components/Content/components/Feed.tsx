import Image from "next/image";
import React from "react";

type Props = {};

const Feed = (props: Props) => {
  const scrollbarHideStyle =
    "[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]";

  return (
    <div>
      <div
        className={`w-1/2 h-screen lg:h-[calc(100vh-64px)] overflow-auto mx-auto ${scrollbarHideStyle}`}
      >
        {/* {Array.from({ length: 40 }).map((_, i) => (
          <div key={i} className="card lg:card-side bg-base-100 shadow-xl my-9">
            <figure>
              <Image
                src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
                alt="Album"
                width={200}
                height={200}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">New album is released!</h2>
              <p>Click the button to listen on Spotiwhy app.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Listen</button>
              </div>
            </div>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default Feed;
