"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import React, { useContext } from "react";
import { LibraryContext } from "@/context/LibraryContext";


const Navbar = () => {
   const { workOutPlan, saved } = useContext(LibraryContext);

  const links = (
    <>
      <li><Link href="/"
      className="hover:text-[#dfff00] rounded-2xl"
      >Home</Link></li>
      <li><Link href="/library"
      className="hover:text-[#dfff00] rounded-2xl"
      >Workouts</Link></li>
      <li><Link href="/my-plan"
      className="hover:text-[#dfff00] rounded-2xl"
      >My plan</Link></li>
    </>
  );

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 shadow-sm backdrop-blur-md">
      <nav className="navbar container mx-auto px-5 lg:px-7">

        {/* Logo */}
        <div className="navbar-start gap-2">
          <Image src={logo} width={42} height={42} alt="FITLOG logo" className="rounded-xl" />
          <div>
            <h1 className="text-xl font-semibold tracking-tight">
              FIT<span className="text-success">LOG</span>
            </h1>
            <p className="hidden text-[10px] font-medium uppercase tracking-[0.2em] text-base-content/50 sm:block">
              Train • Track • Transform
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal items-center gap-2 rounded-4xl  ">{links}</ul>
        </div>

        {/* Desktop Actions */}
        <div className="navbar-end hidden gap-3 lg:flex">
          <Link
            href="/my-plan?tab=today"
            className="relative rounded-3xl px-4 py-2 font-semibold transition-colors hover:bg-base-200"
          >
            Plan
            {workOutPlan.length > 0 && (
              <span className="absolute -top-0.5 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#dfff00] text-[10px] font-bold text-slate-700">
                {workOutPlan.length}
              </span>
            )}
          </Link>

          <Link
            href="/my-plan?tab=saved"
            className="btn relative bg-[#dfff00] rounded-full px-6 shadow-sm transition-all duration-100 text-slate-600 hover:-translate-y-0.5 hover:shadow-sm"
          >
            Saved
            {saved.length > 0 && (
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-black text-[10px] font-bold text-white">
                {saved.length}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="navbar-end lg:hidden">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </div>

            <ul tabIndex={0} className="menu dropdown-content z-50 mt-3 w-56 rounded-2xl border border-base-300 bg-base-100 p-3 shadow-xl">
              {links}
              <div className="divider my-2"></div>
              <li>
                <Link href="/my-plan?tab=today" className="flex justify-between">
                  Plan {workOutPlan.length > 0 && <span className="badge badge-success text-white">{workOutPlan.length}</span>}
                </Link>
              </li>
              <li>
                <Link href="/my-plan?tab=saved" className="flex justify-between">
                  Saved {saved.length > 0 && <span className="badge">{saved.length}</span>}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;