/* eslint-disable react/prop-types */

import { useState } from "react";
// import useHandler from "../hooks/useHandler";
import "./style.css";

const FilterType = {
    DONE: 1,
    PENDING: 2,
    UNKNOWN: 3,
};
window.todoId = 1000;
const AutoComplete = () => {
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState("");
    const [editId, setEditId] = useState(null);

    const addTodos = () => {
        const oldTodos = structuredClone(todos);
        if (!todo) return;
        const newTodo = { todo, id: window.todoId++ };
        setTodos([newTodo, ...oldTodos]);
        setTodo("");
    };

    const deleteTodo = (id) => {
        const filteredTodos = todos.filter((todo) => todo.id !== id);
        setTodos(filteredTodos);
    };

    const updateTodo = (val) => {
        const oldTodos = structuredClone(todos);
        const newTodos = oldTodos.map((todo) => {
            if (todo.id === editId) {
                return { ...todo, todo: val };
            }
            return todo;
        });
        setTodos(newTodos);
        setEditId(null);
    };

    return (
        <div className="auto-complete-container">
            <div className="input-container">
                <InputText value={todo} onChange={setTodo} />
                <Button onClick={addTodos} />
            </div>

            <Filters />
            <List
                todos={todos}
                deleteTodo={deleteTodo}
                editId={editId}
                updateTodo={updateTodo}
                setEditId={setEditId}
            />
        </div>
    );
};

const InputText = ({ value, onChange }) => {
    function handleChange(e) {
        const value = e.target.value;

        onChange(value);
    }
    return (
        <input
            className="input-text"
            type="text"
            placeholder="Add a task"
            value={value}
            onChange={handleChange}
        />
    );
};

const Button = ({ label = "Button", onClick = () => {} }) => {
    return <button onClick={onClick}>{label}</button>;
};

const List = ({ todos, deleteTodo, editId, updateTodo, setEditId }) => {
    return (
        <div>
            {todos?.map((todo) => {
                return (
                    <div key={todo.id}>
                        {editId !== todo.id ? (
                            <>
                                {todo.todo}{" "}
                                <button onClick={() => deleteTodo(todo.id)}>
                                    delete
                                </button>
                                <button onClick={() => setEditId(todo.id)}>
                                    edit
                                </button>
                            </>
                        ) : (
                            <UpdateTodo
                                todo={todo.todo}
                                updateTodo={updateTodo}
                            />
                        )}
                    </div>
                );
            })}
        </div>
    );
};

const UpdateTodo = ({ todo, updateTodo }) => {
    const [val, setVal] = useState("");
    const handleChange = (e) => {
        const value = e.target.value;
        setVal(value);
    };

    function updateTodoNew(val) {
        updateTodo(val);
        setVal("");
    }
    return (
        <div
            className="input-container"
            style={{
                backgroundColor: "red",
            }}
        >
            <InputText onChange={handleChange} value={todo || val} />
            <Button onClick={updateTodoNew} label="Update" />
        </div>
    );
};

const Filters = () => {
    return <div>filters</div>;
};

export default AutoComplete;
