import React from "react";

import TokenTest from "../components/TokenTest";
import { getCurentUser } from "../actions/authAction";

export default async function PageSession() {
  const session = await getCurentUser();

  return (
    <div className="text-blue-400 text-xl text-left">
      <pre> {JSON.stringify(session?.role, null, 2)}</pre>

      <TokenTest />
    </div>
  );
}
