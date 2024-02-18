"use client";
import React from "react";
import { signIn } from "next-auth/react";
export default function LoginButton() {
  return (
    <div className=" sm:ml-16 sm:mt-0 sm:flex-none">
      <button
        onClick={() => signIn("id-server", { callbackUrl: "/" })}
        type="button"
        className="block rounded-md
       bg-indigo-600 px-3 py-2 text-center 
       text-sm font-semibold text-white shadow-sm
        hover:bg-indigo-500 focus-visible:outline 
        focus-visible:outline-2 focus-visible:outline-offset-2
         focus-visible:outline-indigo-600"
      >
        Login
      </button>
    </div>
  );
}
