import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import './ToDo.css';
import {fetchTasks, postTask, removeTask} from "../../store/actions";

const ToDo = () => {
    const [text, setText] = useState("");

    const tasks = useSelector(state => state.tasks);
    const dispatch = useDispatch();

    const addTaskHandler = (value) => {
        dispatch(postTask(value));
        setText('');
    };

    const removeTaskHandler = (value) => {
        dispatch(removeTask(value));
    };

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    const changeText = event => {
        const value = event.target.value;
        setText(value);
    };

    const singleTask = Object.entries(tasks);
    const taskList = singleTask.map(task => (
        <div className="task" key={task[0]}>
            <p>{task[1].text}</p>
            <button type="button"
                    onClick={() => removeTaskHandler(task[0])}
                    className="btnRemove">&#10006;</button>
        </div>
    ));

    return (
        <div className="container">
            <div className="head">
                <input
                    type="text"
                    className="field"
                    value={text}
                    onChange={changeText}
                    placeholder="Add new task"/>
                <button
                    type="button"
                    onClick={() => addTaskHandler(text)}
                    className="btn">Add</button>
            </div>
            {taskList}
        </div>
    );
}

export default ToDo;
