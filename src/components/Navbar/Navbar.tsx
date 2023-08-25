import { useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleUp,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import SingleItem from "../Items/SingleItem";
import MegaMenu from "../MegaMenu/MegaMenu";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");
  return (
    <nav className=" w-[100%] px-8 md:px-auto cursor-default fixed z-10">
      <div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
        <div className="text-red-500 md:order-1">
          <img src="/logo.png" alt="test" className="w-[90px] h-auto" />
        </div>
        <div className="text-gray-500 order-3 w-full md:w-auto md:order-2 text-xl">
          <ul className="flex font-semibold justify-between">
            <li
              onClick={() => setOpen(!open)}
              className="md:px-4 md:py-2  cursor-pointer  relative "
            >
              <p className="hover:text-red-400 items-center hidden md:block">
                company{" "}
                <span>
                  {!open ? (
                    <FontAwesomeIcon icon={faAngleDown} />
                  ) : (
                    <FontAwesomeIcon icon={faAngleUp} />
                  )}
                </span>
              </p>
              <div className="block md:hidden">
                {!open ? (
                  <FontAwesomeIcon icon={faBars} />
                ) : (
                  <FontAwesomeIcon icon={faXmark} />
                )}
              </div>
              {open && (
                <>
                  <div className="block md:hidden bg-white -left-8  h-screen w-screen absolute">
                    {selected === "item1" && (
                      <div className="flex flex-col">
                        <div className="border-b p-2 flex justify-between">
                          <span onClick={() => setSelected("")}>Back</span>
                          <span>item1</span>
                        </div>

                        <div className=" h-screen overflow-y-auto w-full   ">
                          <SingleItem />
                          <SingleItem />
                          <SingleItem />
                        </div>
                      </div>
                    )}
                    {selected === "item2" && (
                      <div className="flex flex-col">
                        <div className="border-b p-2 flex justify-between">
                          <span onClick={() => setSelected("")}>Back</span>
                          <span>item2</span>
                        </div>

                        <div className=" h-screen overflow-y-auto w-full   ">
                          <SingleItem />
                        </div>
                      </div>
                    )}
                    {selected === "item3" && (
                      <div className="flex flex-col">
                        <div className="border-b p-2 flex justify-between">
                          <span onClick={() => setSelected("")}>Back</span>
                          <span>item3</span>
                        </div>

                        <div className=" h-screen overflow-y-auto w-full   ">
                          <SingleItem />
                        </div>
                      </div>
                    )}
                    {selected === "item4" && (
                      <div className="flex flex-col">
                        <div className="border-b p-2 flex justify-between">
                          <span onClick={() => setSelected("")}>Back</span>
                          <span>item4</span>
                        </div>

                        <div className=" h-screen overflow-y-auto w-full   ">
                          <SingleItem />
                        </div>
                      </div>
                    )}
                    {selected === "" && (
                      <div className="  overflow-y-scroll  h-screen py-6 pb-10 border-r  scrollbar-style ">
                        <div className="border-b  space-y-3 border-black px-1 ">
                          <p className=" group  text-base  group ">
                            <div
                              className=" flex space-x-1 hover:bg-slate-200"
                              onClick={() => setSelected("item1")}
                            >
                              <span>item1</span>
                              <span>&gt;</span>
                            </div>
                          </p>
                          <p className=" group  text-base   ">
                            <div
                              className=" flex space-x-1 hover:bg-slate-200"
                              onClick={() => setSelected("item2")}
                            >
                              <span>item2</span>
                              <span>&gt;</span>
                            </div>
                          </p>
                          <p className=" group  text-base   ">
                            <div
                              className=" flex space-x-1 hover:bg-slate-200"
                              onClick={() => setSelected("item3")}
                            >
                              <span>item1</span>
                              <span>&gt;</span>
                            </div>
                          </p>
                          <p className=" group text-base   ">
                            <div
                              className=" flex space-x-1 hover:bg-slate-200"
                              onClick={() => setSelected("item4")}
                            >
                              <span>item1</span>
                              <span>&gt;</span>
                            </div>
                          </p>
                        </div>
                        <div className="space-y-3 text-center  mt-2">
                          <p className="text-base hover:underline">item-1</p>
                          <p className="text-base hover:underline">item-1</p>
                          <p className="text-base hover:underline">item-1</p>
                          <p className="text-base hover:underline">item-1</p>
                          <p className="text-base hover:underline">item-1</p>
                          <p className="text-base hover:underline">item-1</p>
                          <p className="text-base hover:underline">item-1</p>
                          <p className="text-base hover:underline">item-1</p>
                          <p className="text-base hover:underline">item-1</p>
                          <p className="text-base hover:underline">item-1</p>
                          <p className="text-base hover:underline">item-1</p>
                          <p className="text-base hover:underline">item-1</p>
                          <p className="text-base hover:underline">item-1</p>
                          <p className="text-base hover:underline">item-1</p>
                          <p className="text-base hover:underline">item-1</p>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="absolute hidden md:block h-screen mt-5 bg-gray-100 w-[130%]  ">
                   <MegaMenu/>
                  </div>
                </>
              )}
            </li>
            <li className="md:px-4 md:py-2 text-red-500 cursor-pointer">
              <p>Home</p>
            </li>
            <li className="md:px-4 md:py-2 hover:text-red-400 cursor-pointer">
              <p>Services</p>
            </li>
            <li className="md:px-4 md:py-2 hover:text-red-400 cursor-pointer group ">
              <p>Contact</p>
            </li>
          </ul>
        </div>
        <div className="order-2 md:order-3">
          <button className="px-4 py-2 bg-red-500 hover:bg-red-600 text-gray-50 rounded-xl flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>Login</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
