import { useState } from "react";

const useHandler = () => {
    const [todos, setTodos] = useState([]);
    const addTodos = (todo) => {
        setTodos([...todos, todo]);
    };

    return { todos, addTodos };
};

export default useHandler;
