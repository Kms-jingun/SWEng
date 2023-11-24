const storedTodoItems = (state) => {
    return state.todoItems;
};
const storedName = (state) => {
    return state.userName;
};
const storedTodoItemsCount = (state, getters) => {
    return getters.storedTodoItems.length;
}

const isLogIn = (state) => {
    return state.isLogin;
}

const isRegister = (state) => {
    return state.isRegister;
}

export { storedTodoItems, storedName, storedTodoItemsCount, isLogIn, isRegister };