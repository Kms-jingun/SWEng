<template>
    <div>
        <p>회원가입</p>
        <form @submit.prevent="submitForm(username, password)">
            <div>
                <label for="username">id: </label>
                <input id="username" type="text" v-model="username" />
            </div>
            <div>
                <label for="password">pw: </label>
                <input id="password" type="password" v-model="password" />
            </div>
            <button type="submit">
                <span>가입</span>
            </button>
        </form>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
// import axios from 'axios';
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
                if(username==="" || password==="") {
                    // 경고창 띄우기
                    const text = "회원가입 실패!"
                    this.$emit("alertModal", text);
                }
                else {
                    // var data = {id: username, pw: password};
                    // const apiUrl="";
                    // axios
                    //     .post(apiUrl, JSON.stringify(data))
                    //     .then(res => {
                    //         if(res.data=="ok") {
                    //             // 회원가입 성공 시, 
                    //             const text = "회원가입 완료"
                    //             this.$emit("alertModal", text);
                    //             this.setIsRegister();
                    //         }
                    //     });

                    const text = "회원가입 완료"
                    this.$emit("alertModal", text);
                    this.setIsRegister();
                }
            }
        }
    }
</script>

<style>

</style>