<template>
    <div className="hello">
        <p className="hello__guide">
            <span className="hello__guide-text">반갑습니다!<br></span>
            <span className="hello__guide-text">당신의 리스트를 불러오겠습니다.</span>
        </p>
        <!-- <p className="hello__ask">What is your name?</p> -->

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
                <label for="username">닉네임: </label>
                <input id="username" type="text" v-model="username" maxlength="20" />
            </div>
            <div>
                <label for="password">생년월일: </label>
                <input id="password" placeholder="ex)990319" type="password" v-model="password"
                       maxlength="20" 
                />
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
    import axios from "axios";
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

                // 생년월일 정규표현식
                const validatePw = /([0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[1,2][0-9]|3[0,1]))$/
                if(username==="" || password==="" || username.length > 20 || password.length != 6 || !validatePw.test(password)) {
                    // 경고창 띄우기
                    const text = "입력된 값이 유효하지 않습니다."
                    this.$emit("alertModal", text);
                }
                else {
                    // 로그인 컴포넌트에서 유효성 검사를 통과하였으므로, 서버에 전달할 수 있다.
                    // 주석처리된 코드는 서버와 연동 시 필요
                    var data = {name: username, birth: password};
                    const apiUrl = "/login/signIn";
                    axios
                        .post(apiUrl, JSON.stringify(data))
                        .then(res => {
                            if(res.data >= 0) {
                                // 로그인에 성공할 시, 생성한 객체를 인자로 하여 addUserName 호출
                                this.addUserName({username: username, id: res.data});
                            }
                                // 사용자가 존재하지 않아 로그인 실패
                            else if(res.data == -1) {
                                const text = "등록되지 않은 생년월일입니다.";
                                this.$emit("alertModal", text);
                            }
                            else if(res.data == -2) {
                                const text = "등록되지 않은 이름입니다."
                                this.$emit("alertModal", text);
                            }
                        });
                    // this.addUserName({username: username, id: -1});
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