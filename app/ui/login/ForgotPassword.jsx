import React from "react";

export default function ForgotPassword() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <input
          id="remember-me"
          name="remember-me"
          type="checkbox"
          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
        />
        <label
          htmlFor="remember-me"
          className="ml-3 block text-sm leading-6 text-gray-700"
        >
          Remember me
        </label>
      </div>

      <div className="text-sm leading-6">
        <a
          href="#"
          className="font-semibold text-indigo-600 hover:text-indigo-500"
        >
          Forgot password?
        </a>
      </div>
    </div>
  );
}
