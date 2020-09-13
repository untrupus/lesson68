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
    ADD_TASK,
    POST_TASKS_SUCCESS
} from "./actionTypes";

const initialState = {
    counter: 0,
    loading: false,
    error: null,
    tasks: {},
    tasksLoading: false,
    tasksError: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {...state, counter: state.counter + 1};
        case DECREMENT:
            return {...state, counter: state.counter - 1};
        case ADD:
            return {...state, counter: state.counter + action.value};
        case SUBTRACT:
            return {...state, counter: state.counter - action.value};
        case FETCH_COUNTER_REQUEST:
            return {...state, loading: true};
        case FETCH_COUNTER_SUCCESS:
            return {...state, loading: false, counter: action.value};
        case CHANGE_COUNTER_SUCCESS:
            return {...state, loading: false};
        case FETCH_COUNTER_ERROR:
            return {...state, loading: false, error: action.error};

        case FETCH_TASKS_REQUEST:
            return {...state, tasksLoading: true};
        case FETCH_TASKS_SUCCESS:
            return {...state, tasksLoading: false, tasks: action.value};
        case FETCH_TASKS_ERROR:
            return {...state, tasksLoading: false, tasksError: action.error};
        case POST_TASKS_SUCCESS:
            return {...state, tasksLoading: false};
        // case ADD_TASK:
        //     return {...state, task: action.text};





        default:
            return state;
    }
};

export default reducer;