import React from "react";
import Button from "../../components/Button";
import { signOut, useSession } from "next-auth/react";
import { useCurrentUser } from "@/app/helpers/currentUser";
export default function DeskTopProfile() {
  // const { data: currentUser } = useSession();
  const { fullname } = useCurrentUser();

  // console.log(currentUser?.user.fullname);
  async function logout() {
    await signOut();
  }
  // const user = await getCurrentUser();
  return (
    <li className="-mx-6 mt-auto flex ps-2  items-center">
      <a
        href="#"
        className="flex items-center space-x-1  py-3 text-sm font-semibold leading-6 text-white hover:bg-gray-800"
      >
        <img
          className="h-8 w-8 rounded-full bg-gray-800 "
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <span className="sr-only">Your profile</span>
        <span>{fullname}</span>
      </a>
      <Button
        onClick={() => {
          logout();
        }}
      >
        log out
      </Button>
    </li>
  );
}
