/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./style.css";

const OverLapping = () => {
    const [circles, setCircles] = useState([]);

    useEffect(() => {
        document.addEventListener("click", handleClick);
        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, []);

    //generate random color
    function getRandomColor() {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        return `#${randomColor.padStart(6, "0")}`;
    }

    const handleClick = (e) => {
        //find coordinates of the clicked element
        const x = e.clientX;
        const y = e.clientY;

        //create a new circle
        const newCircle = {
            x,
            y,
        };
        console.log(newCircle);

        setCircles((prev) => {
            //check if the new circle overlaps with any of the existing circles
            const oldCircles = structuredClone(prev);

            //generate a random color for the new circle
            const color = getRandomColor();

            oldCircles.forEach((oldCircle) => {
                const x1 = oldCircle.x;
                const y1 = oldCircle.y;
                const x2 = newCircle.x;
                const y2 = newCircle.y;

                const xDiff = x2 - x1;
                const yDiff = y2 - y1;

                const distance = Math.sqrt(
                    Math.pow(xDiff, 2) + Math.pow(yDiff, 2),
                );

                const Radius_SUM = 100;

                if (distance < Radius_SUM) {
                    newCircle.color = color;
                    oldCircles.color = color;
                }
            });

            oldCircles.push(newCircle);

            return oldCircles;
        });
    };

    return (
        <div className="container" onClick={handleClick}>
            {circles?.length > 0 &&
                circles.map((circle, index) => (
                    <Circle key={index} {...circle} />
                ))}
        </div>
    );
};

function Circle({ x, y, color }) {
    return (
        <div
            style={{ left: `${x}px`, top: `${y}px`, backgroundColor: color }}
            className="circle"
        ></div>
    );
}

export default OverLapping;
