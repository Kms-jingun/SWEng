import getDate from "./../../assets/common/getDate";
import axios from 'axios';
import storage from "@/store/modules/storage";
// import dummy from '../../assets/common/dummy.json';

// 아이템 하나 추가
const addOneItem = async (state, todoItem) => {
    /* 서버 통신 */
    var jsonValue = {
        item: todoItem,
        // date: `${getDate().date} ${getDate().week} ${String(getDate().hour).padStart(2, "0")}:${String(getDate().minute).padStart(2, "0")}`,
        date: `${getDate().date} ${getDate().week}`,
        time: getDate().time,
        completed: false
    }
    await axios
        .post('/todos/save', JSON.stringify(jsonValue))
        .then(res => {
            if(res.data == "ok validation(save)"){
                storage.fetch(state.todoOldestOrder);
            } else {
                alert("등록 실패");
            }
        });

    // 더미 테스트 시
    // var jsonValue = {
    //     id: dummy.length,
    //     item: todoItem,
    //     date: `${getDate().date} ${getDate().week}`,
    //     time: getDate().time,
    //     completed: false
    // }
    // state.todoItems.push(jsonValue);
}
// 아이템 하나 삭제
const removeOneItem = (state, payload) => {
    /* 서버 통신 */
    axios
        .put('/todos/delete/' + payload.todoItem.id)
        .then(res => {
            if(res.data == "ok delete"){
                storage.fetch(state.todoOldestOrder);
            } else {
                alert("삭제 실패");
            }
        });

    // 더미 테스트 시
    // state.todoItems.splice(payload.index, 1);

    // localStorage.removeItem(payload.todoItem.item);
    // state.todoItems.splice(payload.index, 1);
}
// 아이템 하나 완료 토글
const toggleOneItem = (state, payload) => {
    /* 서버 통신 */
    var jsonValue = {
        id: payload.todoItem.id,
        completed: !payload.todoItem.completed
    }
    axios
        .put('/todos/update/' + payload.todoItem.id, JSON.stringify(jsonValue))
        .then(res => {
           if(res.data == "ok update"){
               storage.fetch(state.todoOldestOrder);
           } else {
               alert("업데이트 실패");
           }
        });

    // 더미 테스트 시
    // var jsonValue = {
    //     id: payload.todoItem.id,
    //     item: payload.todoItem.item,
    //     date: `${getDate().date} ${getDate().week}`,
    //     time: getDate().time,
    //     completed: !payload.todoItem.completed
    // }

    // state.todoItems.splice(payload.todoItem.id, 1, jsonValue);
    
    // payload.todoItem.completed = !payload.todoItem.completed;
    // localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
}
// 모든 아이템 삭제
const clearAllItem = (state) => {
    // 서버 통신 시
    var todoItems = state.todoItems;
    if(todoItems.length > 0){
        axios
            .put('/todos/clear')
            .then(res => {
                if(res.data == "ok clear"){
                    storage.fetch(state.todoOldestOrder);
                } else {
                    alert("클리어 실패");
                }
            });
    }
    // 더미 테스트 시
    // state.todoItems.splice(0);
}
// 최신순 정렬
const sortTodoLatest = (state) => {
    state.todoOldestOrder = false;

    storage.fetch(state.todoOldestOrder);
}
// 오래된 순 정렬
const sortTodoOldest = (state) => {
    state.todoOldestOrder = true;

    storage.fetch(state.todoOldestOrder);
}
// 사용자 이름 추가
// 로그인 함수
// 프론트에서 입력된 이름, 생년월일을 서버에 보내 등록된 유저일 경우, 유저의 이름을 state.userName에 저장
// 이후 해당 유저의 리스트를 가져온다.
const setUserName = (state, userInfo) => {
    // 테스트, 서버 대신 로컬 서버에 유저의 이름을 저장한다.
    // localStorage.setItem("userName", JSON.stringify(userInfo.username));
    state.userName = userInfo.username;
    
    // 로그인 성공 시, 서버의 현 사용자 이름으로 설정한 후, 해당 사용자의 list를 불러온다.
    // 그 후 이후 화면으로 전환한다.
    axios
    // 백에서 .get으로 바꿀 예정
        .get('/todos/set/'+ userInfo.id)
        .then(res => {
            if(res.data === userInfo.id) {
                storage.fetch(state.todoOldestOrder);
                state.isLogin = true;
            }
        });
    // storage.fetch(state.todoOldestOrder);
    // state.isLogin = true;
    
}

// 회원가입 화면의 렌더링 여부를 결정하는 변수의 값을 수정한다.
const setIsRegister = (state) => {
    state.isRegister = !state.isRegister;
}

// 로그아웃 상태로 전환
const logOut = (state) => {
    state.isLogin = false;
    state.userName = "";
}

export { addOneItem, removeOneItem, toggleOneItem, clearAllItem, sortTodoLatest, sortTodoOldest, setUserName, setIsRegister, logOut };