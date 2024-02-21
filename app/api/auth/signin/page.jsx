import LoginMessage from "@/app/ui/components/LoginMessage";
import React from "react";

export default function page({ searchParams }) {
  console.log("calback");
  const callbackUrl = searchParams.callbackUrl;
  console.log(callbackUrl);
  return (
    <div>
      <LoginMessage />
    </div>
  );
}
