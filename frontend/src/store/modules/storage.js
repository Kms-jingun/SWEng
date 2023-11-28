// 더미 테스트 시 주석처리할 것
import axios from 'axios';
import {store} from "@/store/store";
// import dummy from '../../assets/common/dummy.json';

const storage = {
    async fetch(orderState) {
        var setState = true;
        /* 서버 통신 */
        const arr = [];

        if(orderState == undefined || orderState === null){
            setState == true;
        }
        else if(orderState != null || orderState != ""){
            setState = orderState;
        }

        // 서버와 통신 시
        await axios
            .get('/todos/' + setState)
            .then(res => {
               const jsonData = res.data;

               if(jsonData.length > 0){
                   for(let i = 0 ; i < jsonData.length; i++){
                       arr.push(
                           jsonData[i]
                       );
                   }
               }
            });
        
        // 더미데이터 처리 시
        // const dmy = dummy;
        // for(let i = 0; i < dmy.length; i++) {
        //     arr.push(dmy[i]);
        // }        

        store.state.todoItems = arr;
    },
    fetchName() {
        // 로컬 스토리지의 사용자 이름 가져오기
        // 향후 수정 필요
        if (localStorage.getItem("userName")) {
            const userName = localStorage.getItem("userName");
            return userName;
        }
    }
}

export default storage;