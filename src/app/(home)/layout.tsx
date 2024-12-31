"use client";

import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  TransitionChild,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import HomeIcon from "@/components/icons/HomeIcon";
import TransactionIcon from "@/components/icons/TransactionIcon";
import AccountsIcon from "@/components/icons/AccountsIcon";
import InvestmentIcon from "@/components/icons/InvestmentIcon";
import CreditCardIcon from "@/components/icons/CreditCardIcon";
import LoanIcon from "@/components/icons/LoanIcon";
import ServiceIcon from "@/components/icons/ServiceIcon";
import MyPrivilegesIcon from "@/components/icons/MyPrivilegesIcon";
import SettingIcon from "@/components/icons/SettingIcon";
import { classNames } from "@/shared/utils";
import TaskIcon from "@/components/icons/TaskIcon";
import SearchIcon from "@/components/icons/SearchIcon";
import SettingNavIcon from "@/components/icons/SettingNavIcon";
import BellNotificationIcon from "@/components/icons/BellNotificationIcon";
import { usePathname, useRouter } from "next/navigation";
import PageBody from "@/components/PageBody";

type Props = {
  children: React.ReactNode;
};

const navigation = [
  { name: "Dashboard", href: "/", icon: HomeIcon },
  { name: "Transactions", href: "/#", icon: TransactionIcon },
  { name: "Accounts", href: "/#", icon: AccountsIcon },
  {
    name: "Investments",
    href: "/#",
    icon: InvestmentIcon,
  },
  {
    name: "Credit Cards",
    href: "#",
    icon: CreditCardIcon,
  },
  { name: "Loans", href: "#", icon: LoanIcon },
  { name: "Services", href: "#", icon: ServiceIcon },
  { name: "My Privileges", href: "#", icon: MyPrivilegesIcon },
  { name: "Setting", href: "/setting", icon: SettingIcon },
];

export default function DashboardLayout(props: Props) {
  const pathname = usePathname();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div>
        <Dialog
          open={sidebarOpen}
          onClose={setSidebarOpen}
          className="relative z-50 lg:hidden"
        >
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
          />

          <div className="fixed inset-0 flex">
            <DialogPanel
              transition
              className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
            >
              <TransitionChild>
                <div className="absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
                  <button
                    type="button"
                    onClick={() => setSidebarOpen(false)}
                    className="-m-2.5 p-2.5"
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XMarkIcon
                      aria-hidden="true"
                      className="size-6 text-white"
                    />
                  </button>
                </div>
              </TransitionChild>
              <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
                <nav className="flex flex-1 flex-col">
                  <ul role="list" className="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul
                        role="list"
                        className="-mx-2 space-y-[16px] mt-[16px]"
                      >
                        {navigation.map((item) => (
                          <li key={item.name}>
                            <a
                              href={item.href}
                              className={classNames(
                                item.href === pathname
                                  ? "bg-gray-50 text-[#232323]"
                                  : "text-[#B1B1B1] hover:bg-gray-50 hover:text-[#7e7c7c]",
                                "group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"
                              )}
                            >
                              <div className="flex gap-[26px]">
                                {" "}
                                <item.icon
                                  aria-hidden="true"
                                  className={classNames(
                                    item.href === pathname
                                      ? "text-indigo-600"
                                      : "text-gray-400 group-hover:text-indigo-600",
                                    "size-6 shrink-0"
                                  )}
                                />
                                {item.name}
                              </div>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </div>
        </Dialog>

        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4">
            <div className="flex h-16 shrink-0 items-center">
              <div className="flex gap-[10px] justify-center items-center">
                <div onCanPlay={() => router.push("/")}>
                  {" "}
                  <TaskIcon className="h-8 w-auto" />
                </div>
                <span className="font-[800] text-[25px] leading-[30.26px]">
                  Soar Task
                </span>
              </div>
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-[16px]">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={classNames(
                            item.href === pathname
                              ? "bg-gray-50 text-[#232323]"
                              : "text-[#B1B1B1] hover:bg-gray-50 hover:text-[#7e7c7c]",
                            "group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"
                          )}
                        >
                          <div className="flex gap-[26px]">
                            {" "}
                            <item.icon
                              aria-hidden="true"
                              className={classNames(
                                item.href === pathname
                                  ? "text-indigo-600"
                                  : "text-gray-400 group-hover:text-indigo-600",
                                "size-6 shrink-0"
                              )}
                            />
                            {item.name}
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="lg:pl-72">
          <div className="sticky top-0 z-40">
            <div className="">
              <div className="flex h-16 items-center gap-x-4 bg-white px-4 sm:gap-x-6 sm:px-6 lg:px-0">
                <button
                  type="button"
                  onClick={() => setSidebarOpen(true)}
                  className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
                >
                  <span className="sr-only">Open sidebar</span>
                  <Bars3Icon aria-hidden="true" className="size-6" />
                </button>

                <div className="w-full flex items-center justify-between">
                  <h1 className="lg:pl-6 md:w-[70%] w-[90%] md:text-start text-center font-[600] text-[28px] leading-[33.89px] text-[#343C6A]">
                    Overview
                  </h1>

                  <div className="flex justify-center items-center gap-[30px] lg:pr-6">
                    <div className="sm:flex hidden">
                      <div className="bg-[#F5F7FA] rounded-full md:flex px-4 py-3 overflow-hidden max-w-[255px] mx-auto font-[sans-serif] hidden">
                        <SearchIcon className="fill-gray-600 mr-3" />
                        <input
                          type="email"
                          placeholder="Search for something"
                          className="w-full outline-none bg-[#F5F7FA] ml-3 font-[400] text-[15px] leading-[18px] text=[#8BA3CB]"
                        />
                      </div>
                    </div>

                    <div className="md:flex items-center justify-center bg-[#F5F7FA] rounded-full w-[50px] h-[50px] overflow-hidden cursor-pointer hidden ">
                      <SettingNavIcon className="h-[25px] w-[25px]" />
                    </div>
                    <div className="md:flex items-center justify-center bg-[#F5F7FA] rounded-full w-[50px] h-[50px] overflow-hidden cursor-pointer hidden ">
                      <BellNotificationIcon className="h-[25px] w-[25px]" />
                    </div>
                    <div className="flex items-center justify-center bg-[#F5F7FA] rounded-full w-[50px] h-[50px] overflow-hidden cursor-pointer">
                      <img
                        alt=""
                        src="https://s3-alpha-sig.figma.com/img/57d3/d250/790e98129931897251abd3915a931233?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RK-a81-hCMGTpug0VYsNXtLWQfTk38o1Nhj2FiCFyZw~Bo~fWbmMLs4vIvwb4VIOe3xjWW2~v7kx4XDmrXHcMc~dIPAa5FWnX4vQwZvuAygn1hHMIbXR6Yeho-XkRjP8w5tQt~uFqAxOlFMNKJ5G3IWDniIuqEGAfPHNSW2noK1E6zunHRsG~KknQUE4RIa0Uqp1Tf2p05Qu7uqAP~il3qr9XrmWAMxvtzUvZF1AatjV3X-yptDS422qlwDOtaiR-zuS8H5X3i-8tsXGAr1h9hzo~LsrHuDKyiBqW2LLHP9qs~hnMBCv11TAfxijPSe26jHhVCD53m4bwH0VNbGdaw__"
                        className="h-[50px] w-[60px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="border flex bg-[#F5F7FA] rounded-full px-4 py-3 overflow-hidden max-w-[255px] mx-auto font-[sans-serif] md:hidden">
                <SearchIcon className="fill-gray-600 mr-3" />
                <input
                  type="email"
                  placeholder="Search for something"
                  className="w-full outline-none bg-[#F5F7FA] ml-3 font-[400] text-[15px] leading-[18px] text=[#8BA3CB]"
                />
              </div> */}
            </div>

            <div className="w-full bg-[#FFFFFF] p-[20px] md:p-[0px]">
              <div className="border flex bg-[#F5F7FA] rounded-full px-4 py-3 overflow-hidden  font-[sans-serif] md:hidden">
                <SearchIcon className="fill-gray-600 mr-3" />
                <input
                  type="email"
                  placeholder="Search for something"
                  className="w-full outline-none bg-[#F5F7FA] ml-3 font-[400] text-[15px] leading-[18px] text=[#8BA3CB]"
                />
              </div>
            </div>
          </div>

          {/* <main className="pt-[24px] px-[40px] pb-[40px]">
            <div className=" px-2 sm:px-2 lg:px-2">{props.children}</div>
          </main> */}
          <main className="">
            <PageBody>{props.children}</PageBody>
          </main>
        </div>
      </div>
    </>
  );
}
