import React from "react";
import CashFlowGrid from "./grid";

const AdminCashFlow: React.FC = () => {
  return (
    <div className="grow p-3 lg:rounded-lg lg:shadow-xs h-full border-gray-100">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between gap-4">
          <p className="text-3xl font-semibold sm:text-3xl text-black dark:text-white">
            Nakit Akış
          </p>
        </div>
        <div className="flow-root">
          <div className="mt-8 overflow-x-auto whitespace-nowrap rounded-md">
            <div className="flex flex-col min-w-full p-3 rounded-md shadow-xl h-[34rem] max-h-[60rem] 2xl:h-[60rem] bg-white dark:bg-tertiary ">
              <CashFlowGrid />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCashFlow;
