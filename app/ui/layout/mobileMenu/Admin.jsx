import React from "react";
import Link from "next/link";

export default function Admin({ admins, setSidebarOpen }) {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <li>
      <ul role="list" className="-mx-2 space-y-1">
        {admins.map((item) => (
          <li key={item.name} onClick={() => setSidebarOpen(false)}>
            <Link
              href={item.href}
              className={classNames(
                item.current
                  ? "bg-gray-800 text-red-800 "
                  : "text-gray-400 hover:text-white hover:bg-gray-800",
                "group flex flex-row-reverse gap-x-3 rounded-md p-2 text-sm leading-6 font-vazirlight "
              )}
            >
              <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}
