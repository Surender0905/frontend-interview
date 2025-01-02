import "./App.css";
import TabList from "./tab-list/TabList";

function App() {
    const tabList = [
        {
            id: 1,
            name: "Component A",
            component: <ComponentA />,
        },
        {
            id: 2,
            name: "Component B",
            component: <ComponentB />,
        },
        {
            id: 3,
            name: "Component C",
            component: <ComponentC />,
        },
        {
            id: 4,
            name: "Component D",
            component: <ComponentD />,
        },
    ];
    return (
        <>
            <TabList tabList={tabList} />
        </>
    );
}

const ComponentA = () => {
    return <div>ComponentA</div>;
};

const ComponentB = () => {
    return <div>ComponentB</div>;
};

const ComponentC = () => {
    return <div>ComponentC</div>;
};

const ComponentD = () => {
    return <div>ComponentD</div>;
};

export default App;
