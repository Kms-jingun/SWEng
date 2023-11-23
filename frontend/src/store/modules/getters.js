const storedTodoItems = (state) => {
    return state.todoItems;
};
const storedName = (state) => {
    return state.userName;
};
const storedTodoItemsCount = (state, getters) => {
    return getters.storedTodoItems.length;
}

const isLogin = (state) => {
    return state.isLogin;
}

export { storedTodoItems, storedName, storedTodoItemsCount, isLogin };