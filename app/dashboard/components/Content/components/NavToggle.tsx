"use client";
import React from "react";
import SideNav from "../../SideNav";

type Props = {};

const NavToggle = (props: Props) => {
  // show toggle button below lg breakpoint
  // if toggle button is clicked show SideNav like on the side modal

  return (
    <div className="block lg:hidden">
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn"
        onClick={() =>
          (
            document.getElementById("top_modal1") as HTMLDialogElement
          ).showModal()
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>

      <dialog id="top_modal1" className="modal modal-top">
        <div className="modal-box">
          <SideNav />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default NavToggle;
