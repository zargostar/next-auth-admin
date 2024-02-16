import React from "react";
import Link from "next/link";
export default function User({ users, setSidebarOpen }) {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <li>
      <div className="text-xs font-semibold leading-6 text-gray-400">
        Your teams
      </div>
      <ul role="list" className="-mx-2 mt-2 space-y-1">
        {users.map((team) => (
          <li key={team.name} onClick={() => setSidebarOpen(true)}>
            <Link
              href={team.href}
              className={classNames(
                team.current
                  ? "bg-gray-800 text-white"
                  : "text-gray-400 hover:text-white hover:bg-gray-800",
                "group flex flex-row-reverse gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
              )}
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">
                {team.initial}
              </span>
              <span className="truncate">{team.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}
