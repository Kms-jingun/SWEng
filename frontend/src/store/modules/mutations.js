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
    if(userName==="" || password==="") { 
        // console.log("로그인 실패!");
        alert("로그인 실패!");
    }
    else {
        localStorage.setItem("userName", JSON.stringify(userName));
        localStorage.setItem("password", JSON.stringify(password));
        state.userName = userName;
    }

    // 입력값 유효성 체크, 유효하지 않으면 경고창
    // 유효한 값이면 api 호출 통해 서버에 전달
    // var userName = loginInfo.id;
    // var password = loginInfo.pw;

    // 입력된 정보의 유효성 체크, 유효하지 않을 시 경고창 생성
    // 조건은 다시 확인할 것
    // 유효성 검사는 백에서 할 것인가? 프론트에서 할 것인가?
    // if(userName==="" || password==="") { 
    //     console.log("로그인 실패!");
    // }
    // else {
    //     var data = {
    //         id: userName,
    //         pw: password
    //     }
    //     const apiUrl = "";
    //     axios
    //         .post(apiUrl, JSON.stringify(data))
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
    // }

}

export { addOneItem, removeOneItem, toggleOneItem, clearAllItem, sortTodoLatest, sortTodoOldest, setUserName };