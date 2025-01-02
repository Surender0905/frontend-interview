/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./style.css";

const TraficLight = ({ data }) => {
    // data random

    const dataToShow = getSortedDisplayOrder(data);
    const dataInOrder = getSortedLightOrder(data);

    const [lightsInDisplayOrder, setLightsInDisplayOrder] =
        useState(dataToShow);
    const [lightsInOrder, setLightInOrder] = useState(dataInOrder);

    const [activeLight, setActiveLight] = useState(data[0]);

    function getSortedDisplayOrder(randomOrder) {
        return randomOrder.toSorted(function (a, b) {
            return a.displayOrder - b.displayOrder;
        });
    }

    function getSortedLightOrder(randomOrder) {
        return randomOrder.toSorted(function (a, b) {
            return a.order - b.order;
        });
    }

    useEffect(() => {
        setTimeout(() => {
            // change the light

            // current Light 0 // next 1
            // current light 1 // next 2
            // current 2 // next 0
            // current 0 // next

            const currentLightIndex = lightsInOrder.findIndex(
                (l) => l.color === activeLight.color,
            );
            const nextLightIndex = currentLightIndex + 1;

            const nextLight = lightsInOrder[nextLightIndex] ?? lightsInOrder[0];
            setActiveLight(nextLight);
        }, activeLight.time);
    }, [activeLight]);

    return (
        <div className="traffic-lights">
            {lightsInDisplayOrder?.map((light) => {
                return (
                    <Light
                        key={light.id}
                        data={light}
                        activeLight={activeLight.color}
                    />
                );
            })}
        </div>
    );
};

export default TraficLight;

const Light = ({ data, activeLight }) => {
    const opacity = data.color === activeLight ? 1 : 0.2;
    return (
        <div
            className="light"
            style={{ backgroundColor: data.color, opacity }}
        ></div>
    );
};
