import React from "react";
import { GrClose } from "react-icons/gr";

export default function Newsletter({ setNewsletter }: { setNewsletter: any }) {
  // get the theme color from meta tag
  const themeColor = document
    .querySelector("meta[name=theme-color]")
    ?.getAttribute("content") as string;

  return (
    <div
      style={{
        border: `3px solid ${themeColor}`,
        backgroundColor: "white",
        left: "50%",
        top: "50%",
        zIndex: 100,
        transform: "translate(-50%,-50%)",
      }}
      className={`bg absolute flex h-min w-4/5 flex-col gap-y-5 rounded-lg p-4 pt-8 md:w-72`}
    >
      <GrClose
        onClick={() => setNewsletter(false)}
        className="absolute top-1 right-1 m-2 h-8 w-auto cursor-pointer md:h-6"
      />
      <p style={{ color: themeColor }} className="text-center">
        Sign up for our newsletter
      </p>
      <input
        type="email"
        placeholder="Email"
        className="rounded-md border-2 p-2 outline-none invalid:border-red-500"
      />
      <button
        onClick={() => setNewsletter(false)}
        style={{ backgroundColor: themeColor }}
        className="w-min rounded-md p-2 text-white"
      >
        Submit
      </button>
    </div>
  );
}