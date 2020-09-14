import axios from "../axios-api";
import {
    ADD,
    DECREMENT,
    FETCH_COUNTER_ERROR,
    FETCH_COUNTER_REQUEST,
    FETCH_COUNTER_SUCCESS,
    CHANGE_COUNTER_SUCCESS,
    INCREMENT,
    SUBTRACT,
    FETCH_TASKS_ERROR,
    FETCH_TASKS_REQUEST,
    FETCH_TASKS_SUCCESS,
    POST_TASKS_SUCCESS
} from "./actionTypes";

export const incrementCounter = () => {
    return {type: INCREMENT};
};
export const decrementCounter = () => {
    return {type: DECREMENT};
};
export const addCounter = value => {
    return {type: ADD, value};
};
export const subtractCounter = value => {
    return {type: SUBTRACT, value};
};

const fetchCounterRequest = () => {
    return {type: FETCH_COUNTER_REQUEST};
};
const fetchCounterSuccess = value => {
    return {type: FETCH_COUNTER_SUCCESS, value};
};
const fetchCounterError = error => {
    return {type: FETCH_COUNTER_ERROR, error};
};
const changeCounterSuccess = () => {
    return {type: CHANGE_COUNTER_SUCCESS};
};

const fetchTasksRequest = () => {
    return {type: FETCH_TASKS_REQUEST};
};
const fetchTasksSuccess = value => {
    return {type: FETCH_TASKS_SUCCESS, value};
};
const fetchTasksError = error => {
    return {type: FETCH_TASKS_ERROR, error};
};

const postTaskSuccess = (value) => {
    return {type: POST_TASKS_SUCCESS, value};
};



export const fetchCounter = () => {
    return async dispatch => {
        dispatch(fetchCounterRequest());
        try {
            const response = await axios.get("/counter.json");
            dispatch(fetchCounterSuccess(response.data));
        } catch(e) {
            dispatch(fetchCounterError(e));
        }
    };
};

export const changeCounter = value => {
    return async dispatch => {
        dispatch(fetchCounterRequest());
        try {
            if (value !== 0) {
                await axios.put("/counter.json", value);
            }
            dispatch(changeCounterSuccess());

        } catch(e) {
            dispatch(fetchCounterError(e));
        }
    };
}

export const fetchTasks = () => {
    return async dispatch => {
        dispatch(fetchTasksRequest());
        try {
            const response = await axios.get("/tasks.json");
            dispatch(fetchTasksSuccess(response.data));
        } catch(e) {
            dispatch(fetchTasksError(e));
        }
    };
};

export const postTask = (value) => {
    return async dispatch => {
        dispatch(fetchTasksRequest());
        try {
            if (value !== '') {
                await axios.post("/tasks.json", {text: value});
                dispatch(postTaskSuccess(value));
            }
        } catch(e) {
            dispatch(fetchTasksError(e));
        }
    };
};

export const removeTask = (value) => {
    return async dispatch => {
        dispatch(fetchTasksRequest());
        try {
                await axios.delete("/tasks/" + value + ".json");
                dispatch(postTaskSuccess());
        } catch(e) {
            dispatch(fetchTasksError(e));
        }
    };
};