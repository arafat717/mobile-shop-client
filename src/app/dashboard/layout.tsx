import Head from "next/head";
import Link from "next/link";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Head>
        <title>Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-gray-200 min-h-screen">
        <div className="flex flex-col lg:flex-row lg:min-h-screen">
          {/* Sidebar */}
          <div className="bg-gray-800 text-white w-full lg:w-56 flex-none">
            <div className="p-4 sticky top-0">
              <h1 className="text-xl font-bold">Dashboard</h1>
            </div>
            <ul className="p-2 sticky top-20">
              <Link
                href="/dashboard/all-products"
                className="py-2 px-4 hover:bg-gray-700 cursor-pointer"
              >
                All Products
              </Link>
            </ul>
          </div>

          {/* Main Content */}
          <div className="bg-white sticky top-0 w-full lg:flex-1 p-4 overflow-y-auto">
            <div className="flex justify-between items-center ">
              <h2 className="text-lg font-semibold">
                Welcome to your Dashboard
              </h2>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                Logout
              </button>
            </div>
            <div className="mt-4">
              {/* Your dashboard content goes here */}
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
