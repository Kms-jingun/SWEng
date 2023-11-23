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

export { storedTodoItems, storedName, storedTodoItemsCount, isLogIn };