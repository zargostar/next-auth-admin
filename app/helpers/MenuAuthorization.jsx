"use client";
import React from "react";
import { useCurrentUser } from "./currentUser";
export default function MenuAuthorization({ children, roles, role }) {
  const isAuthorized = roles?.findIndex((userRole) => userRole === role);
  return <div> {isAuthorized > 0 && children}</div>;
}
