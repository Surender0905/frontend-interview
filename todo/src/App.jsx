import "./App.css";
import TraficLight from "./trafic/TraficLight";
const TrafficLights = [
    {
        color: "red",
        time: 2000, // 4sec
        order: 2,
        displayOrder: 3,
    },
    {
        color: "yellow",
        time: 1000, // 4sec
        order: 3,
        displayOrder: 2,
    },
    {
        color: "green",
        time: 2000, // 4sec
        order: 1,
        displayOrder: 1,
    },
];
function App() {
    return (
        <>
            <TraficLight data={TrafficLights} />
        </>
    );
}

export default App;