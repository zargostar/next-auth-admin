"use client";
import { useSession } from "next-auth/react";
import React, { useEffect } from "react";

export default function TokenTest() {
  const { data: session, status } = useSession();

  return <div>TokenTest {session?.user.accessToken}</div>;
}
