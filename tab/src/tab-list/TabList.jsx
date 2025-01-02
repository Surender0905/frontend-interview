/* eslint-disable react/prop-types */
import React from "react";
import "./style.css";

const TabList = ({ tabList }) => {
    const [activeTab, setActiveTab] = React.useState(1);
    return (
        <div className="tab-list-container" role="tablist">
            <div className="tab-list">
                {tabList.map((tab) => {
                    return (
                        <button
                            role="tab"
                            aria-selected={tab.id === activeTab}
                            key={tab.id}
                            className={
                                "tab-item" +
                                (tab.id === activeTab ? " active" : "")
                            }
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.name}
                        </button>
                    );
                })}
            </div>
            <div className="tab-content" role="tabpanel">
                {tabList.find((tab) => tab.id === activeTab).component}
            </div>
        </div>
    );
};

export default TabList;
