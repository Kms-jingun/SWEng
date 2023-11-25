<template>
    <div className="hello">
        <p className="hello__guide">
            <span className="hello__guide-text">Nice to meet you!</span>
            <span className="hello__guide-text">I’m going to remember your tasks.</span>
        </p>
        <p className="hello__ask">What is your name?</p>
        <label htmlFor="user-name">로그인</label>

        <!-- 사용자의 이름을 입력받아 등록한다(addUserName 호출)
        입력된 이름은 userName에 저장된다. -->
        <!-- 이후 이 컴포넌트를 로그인 컴포넌트로 수정할 예정 -->
        
        <!-- 아래 주석은 변경 전 이름만 입력받던 코드 -->
        <!-- <div className="main-input">
            <input
                className="hello__input"
                type="text"
                id="user-name"
                placeholder="Let me know your name"
                v-model="userName"
                v-on:keypress.enter="addUserName(userName)"
            />

            <button className="hello__button">
                <span className="blind">Enter</span>
            </button>
        </div> -->
        <!-- 로그인 폼 -->
        <!-- 로그인 버튼을 누르거나 엔터가 눌리면 submitForm 호출 -->
        <form @submit.prevent="submitForm(username, password)">
            <div>
                <label for="username">이름: </label>
                <input id="username" type="text" v-model="username" />
            </div>
            <div>
                <label for="password">생년월일: </label>
                <input id="password" type="password" v-model="password" />
            </div>
            <button type="submit">
                <span>로그인</span>
            </button>
        </form>
        <div class="btn">
            <button @click="setIsRegister">
                <span>회원가입</span>
            </button>
        </div>
    </div>
</template>

<script>
    import { mapMutations } from "vuex"
    // import axios from "axios";
    export default {
        data() {
            return {
                username: "",
                password: ""
            };
        },
        methods: {
            ...mapMutations({
                // addUserName이 호출되면 mutations의 setUserName을 호출한다.
                addUserName: "setUserName",
                setIsRegister: "setIsRegister"
            }),
            // 입력값을 서버에 전달하기 전, 값의 유효성을 확인
            // 조건에 맞지 않으면 경고창
            // 유효한 입력인 경우, addUserName을 호출
            submitForm(username, password) {
                // null 체크, 빈칸일 시엔 경고창 띄우기
                // 올바른 값일 시, 서버에 전송
                if(username==="" || password==="") {
                    // 경고창 띄우기
                    const text = "로그인 실패!"
                    this.$emit("alertModal", text);
                }
                else {
                    // 로그인 컴포넌트에서 유효성 검사를 통과하였으므로, 서버에 전달할 수 있다.
                    var data = {id: username, pw: password};
                    // 주석처리된 코드는 서버와 연동 시 필요
                    // const apiUrl = "";
                    // axios
                    //     .post(apiUrl, JSON.stringify(data))
                    //     .then(res => {
                    //         if(res.data == "ok") {
                    //             // 로그인에 성공할 시, 생성한 객체를 인자로 하여 addUserName 호출
                    //             this.addUserName(data);
                    //         }
                    //             // 시스템의 문제로 인한 로그인 실패
                    //         else {
                    //             const text = "로그인 실패";
                    //             this.$emit("alertModal", text);
                    //         }
                    //     });
                    this.addUserName(data);
                }
            }
        }
    }
</script>

<style>
.btn {
    justify-content: center;
}
div {
    text-align: center;
}
</style>