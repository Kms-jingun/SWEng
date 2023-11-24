import getDate from "./../../assets/common/getDate";
import axios from 'axios';
import storage from "@/store/modules/storage";

// 아이템 하나 추가
const addOneItem = async (state, todoItem) => {
    /* 서버 통신 */
    var jsonValue = {
        item: todoItem,
        date: `${getDate().date} ${getDate().week}`,
        time: getDate().time,
        completed: false
    }

    await axios
        .post('/todos/save', JSON.stringify(jsonValue))
        .then(res => {
            if(res.data == "ok"){
                storage.fetch(state.todoOldestOrder);
            } else {
                alert("등록 실패");
            }
        });
}
// 아이템 하나 삭제
const removeOneItem = (state, payload) => {
    /* 서버 통신 */
    axios
        .put('/todos/delete/' + payload.todoItem.id)
        .then(res => {
            if(res.data == "ok"){
                storage.fetch(state.todoOldestOrder);
            } else {
                alert("삭제 실패");
            }
        });

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
        .put('/todos/' + payload.todoItem.id, JSON.stringify(jsonValue))
        .then(res => {
           if(res.data == "ok"){
               storage.fetch(state.todoOldestOrder);
           } else {
               alert("업데이트 실패");
           }
        });

    // payload.todoItem.completed = !payload.todoItem.completed;
    // localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
}
// 모든 아이템 삭제
const clearAllItem = (state) => {
    var todoItems = state.todoItems;
    if(todoItems.length > 0){
        axios
            .put('/todos/clear')
            .then(res => {
                if(res.data == "ok"){
                    storage.fetch(state.todoOldestOrder);
                } else {
                    alert("클리어 실패");
                }
            });
    }
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
// 프론트에서 입력된 이름, 생년월일을 서버에 보내 기존 유저일 경우, 유저의 이름을 state.userName에 저장
const setUserName = (state, loginInfo) => {
    // 기존의 코드 + 테스트용
    var userName = loginInfo.id;
    var password = loginInfo.pw;

    localStorage.setItem("userName", JSON.stringify(userName));
    localStorage.setItem("password", JSON.stringify(password));
    state.userName = userName;
    state.isLogin = true;

    // 로그인 컴포넌트에서 유효성 검사를 통과하였으므로, 서버에 전달할 수 있다.
    // const apiUrl = "";
    //     axios
    //         .post(apiUrl, JSON.stringify(loginInfo))
    //         .then(res => {
    //             if(res.data == "ok") {
    //                 // 로그인에 성공할 시, 1. state.userName에 저장, 2. 화면전환(isLogin 등의 변수에 상태 저장)
    //                 state.userName = userName;
    //                 state.isLogin = true;
    //                 storage.fetch(state.todoOldestOrder);
    //             }
    //             // 시스템의 문제로 인한 로그인 실패
    //             else {
    //                 alert("로그인 실패");
    //             }
    //         });

}

const setIsRegister = (state) => {
    // 회원가입 화면의 렌더링 여부를 결정하는 변수의 값을 수정한다.
    state.isRegister = !state.isRegister;
}

export { addOneItem, removeOneItem, toggleOneItem, clearAllItem, sortTodoLatest, sortTodoOldest, setUserName, setIsRegister };