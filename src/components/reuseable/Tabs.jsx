import React, { useState } from "react";

const Tabs = ({ tabsData }) => {
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    return (
        <div className="mt-12">
            <div className="grid grid-cols-2 gap-2 lg:gap-5 md:grid-cols-3 lg:mx-12 lg:mb-24">
                {tabsData.map((tab, index) => {
                    return (
                        <div className="shadow-xl text-[#19D3AE] font-semibold lg:py-10 rounded-md text-center">
                            <button
                                type="button"
                                key={tab.label}
                                className={`rounded-md basis-1/2 py-2 border-b-4 font-bold transition-colors duration-300 ${index === activeTabIndex
                                    ? "border-primary text-accent"
                                    : "border-transparent hover:border-gray-200"
                                    }`}
                                // toggle the active tab on click.
                                onClick={() => {
                                    // setIsLoading(true);
                                    setActiveTabIndex(index);
                                }}
                            >
                                {tab.label}
                            </button>
                        </div>

                    );
                })}
            </div>

            {/* <div className="flex justify-evenly space-x-3 border-b bg-tertiary/10">
                
                
            </div> */}
            {/* active tab content starts. */}
            <div className="py-4 ">
                <h2 className="text-center text-xl font-semibold text-[#19D3AE] lg:mb-20">Available slots for {tabsData[activeTabIndex].label}</h2>
                {tabsData[activeTabIndex].content}</div>
            {/* active tab content ends. */}
        </div>
    );
};

export default Tabs;