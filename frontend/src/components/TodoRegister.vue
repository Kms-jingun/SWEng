<template>
    <div>
        <p>회원가입</p>
        <form @submit.prevent="submitForm(this.username, this.password)">
            <div>
                <label for="username">닉네임: </label>
                <input id="username" type="text" v-model="this.username" maxlength="20" />
            </div>
            <div>
                <label for="password">생년월일: </label>
                <input id="password" placeholder="ex)990319" type="password" v-model="this.password"
                       maxlength="6"
                />
            </div>
            <button type="submit">
                <span>가입</span>
            </button>
        </form>
        <button @click="setIsRegister">
            <span>취소</span>
        </button>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
import axios from 'axios';
    export default {
        data() {
            return {
                username: "",
                password: ""
            };
        },
        methods: {
            ...mapMutations({
                setIsRegister: "setIsRegister"
            }),
            submitForm(username, password) {
                // 생년월일 정규표현식
                const validatePw = /([0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[1,2][0-9]|3[0,1]))$/
                if(username==="" || password==="" || username.length > 20 || password.length != 6 || !validatePw.test(password)) {
                    // 경고창 띄우기
                    const text = "입력된 값이 유효하지 않습니다."
                    this.$emit("alertModal", text);
                }
                else {
                    // 주석처리된 코드는 서버와 연동 시 필요함
                    var data = {name: username, birth: password};
                    const apiUrl="/login/signUp";
                    axios
                        .post(apiUrl, JSON.stringify(data))
                        // .post(apiUrl, data)
                        .then(res => {
                            if(res.data==-2) {
                                // 회원가입에 실패한 경우(이미 사용자가 존재하는 경우)
                                const text = "이미 등록된 사용자입니다."
                                this.$emit("alertModal", text);
                            }
                            else {
                                // 회원가입 성공 시, 
                                this.setIsRegister();
                            }
                        });

                    // const text = "회원가입 완료"
                    // this.$emit("alertModal", text);
                    // this.setIsRegister();
                }
            }
        }
    }
</script>

<style>

</style>