"use client";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import DeskTopAdmin from "./deskTopMenu/DeskTopAdmin";
// import Link from "next/link";

import Button from "../components/Button";
import User from "./mobileMenu/User";
import Operator from "./mobileMenu/Operator";
import Admin from "./mobileMenu/Admin";
import DeskTopUser from "./deskTopMenu/DeskTopUser";
import DeskTopOperator from "./deskTopMenu/DeskTopOperator";
import DeskTopProfile from "./profile/DeskTopProfile";
import MobileProfile from "./profile/MobileProfile";

const admins = [
  { name: "داشبورد", href: "/app/index", icon: HomeIcon, current: true },
  {
    name: "ثبت نام کاربران",
    href: "/app/userIndex",
    icon: UsersIcon,
    current: false,
  },
  { name: "صدور سند", href: "/app/payment", icon: FolderIcon, current: false },
  { name: "محصولات", href: "/product", icon: FolderIcon, current: false },
  {
    name: "گزارشات",
    href: "/app/report",
    icon: CalendarIcon,
    current: false,
  },
  {
    name: "تنظیمات سایت",
    href: "#",
    icon: DocumentDuplicateIcon,
    current: false,
  },
  {
    name: "Reports",
    href: "/app/siteManager",
    icon: ChartPieIcon,
    current: false,
  },
];
const appUsers = [
  { id: 1, name: "Heroicons", href: "#", initial: "H", current: false },
  { id: 2, name: "Tailwind Labs", href: "#", initial: "T", current: false },
  { id: 3, name: "Workcation", href: "#", initial: "W", current: false },
];
const operators = [
  { id: 1, name: "خزوج از سیستم", href: "#", initial: "H", current: false },
  { id: 2, name: "Tailwind Labs", href: "#", initial: "T", current: false },
  { id: 3, name: "Workcation", href: "#", initial: "W", current: false },
];

export default function SiteLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="">
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex bg-yellow-300/80 flex-row-reverse">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="-translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="-translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative  flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute right-0 top-0 flex  w-16 justify-center pt-5">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component,  mobile swap this element with another sidebar if you like */}
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-2 ring-1 ring-white/10">
                    <div className="flex h-16 shrink-0 items-center">
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                        alt="Your Company"
                      />
                    </div>
                    <Button
                      onClick={() => {
                        logout();
                      }}
                      className="flex-grow-0"
                    >
                      log out
                    </Button>
                    <nav className="flex flex-1 flex-col items-end">
                      <ul
                        role="list"
                        className="flex items-end flex-1 flex-col gap-y-7 "
                      >
                        {" "}
                        {/* <AuthenticationMenu role="admin"> */}
                        <Admin
                          admins={admins}
                          setSidebarOpen={(value) => setSidebarOpen(value)}
                        />
                        {/* </AuthenticationMenu> */}
                        <User
                          users={appUsers}
                          setSidebarOpen={() => setSidebarOpen(false)}
                        />
                        <Operator
                          operators={operators}
                          setSidebarOpen={() => setSidebarOpen(false)}
                        />
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="">
          <div className="lg:flex  flex-row-reverse ">
            <div className="hidden lg:fixed lg:inset-y-0  lg:flex lg:w-72 lg:flex-col">
              {/* Sidebar component, swap this element with another sidebar if you like */}
              <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6">
                <div className="flex h-16 shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                </div>
                <nav className="flex flex-1 flex-col">
                  <ul role="list" className="flex flex-1 flex-col gap-y-7">
                    {/* <AuthenticationMenu role="admin"> */}
                    <DeskTopAdmin admins={admins} />
                    {/* </AuthenticationMenu> */}

                    <DeskTopUser users={appUsers} />
                    <DeskTopOperator operators={operators} />
                    <DeskTopProfile />
                  </ul>
                </nav>
              </div>
            </div>

            <MobileProfile setSidebarOpen={() => setSidebarOpen(true)} />
          </div>
          <div className="py-3 text-center lg:me-72">
            <div className="border-2 rounded-lg p-2 mx-3 h-screen sm:px-6 ">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
