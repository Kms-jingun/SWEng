<template>
    <div className="hello">
        <p className="hello__guide">
            <span className="hello__guide-text">Nice to meet you!</span>
            <span className="hello__guide-text">I’m going to remember your tasks.</span>
        </p>
        <p className="hello__ask">What is your name?</p>
        <label htmlFor="user-name">Name</label>

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
                <label for="username">id: </label>
                <input id="username" type="text" v-model="username" />
            </div>
            <div>
                <label for="password">pw: </label>
                <input id="password" type="password" v-model="password" />
            </div>
            <button type="submit">
                <span>login</span>
            </button>
        </form>
    </div>
</template>

<script>
    import { mapMutations } from "vuex"
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
                addUserName: "setUserName"
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
                    // this.$store.commit("setUserName", {id: username, pw: password});
                    this.addUserName({id: username, pw: password});
                }
                
            // }
            }
        }
    }
</script>

<style lang="scss">
.hello {
    max-width: $max-width;
    margin: 0 auto;
    letter-spacing: 0.03rem;
    color: #fff;
    label {
        display: none;
    }
    &__guide {
        padding-top: 2.4rem;
        margin-bottom: 6rem;
        font-size: 1.6rem;
        line-height: 1.75;
        letter-spacing: 0.03rem;
    }
    &__guide-text {
        display: block;
    }
    &__ask {
        font-size: 2.8rem;
        font-weight: bold;
        margin-bottom: 4rem;
    }
}

// 에니메이션 관리
.hello {
    &__guide-text {
        @for $i from 1 through 2 {
            &:nth-child(#{$i}) {
                @include animation(fadeShow, 450ms, 1, #{$i * 200}ms);
            }
        }
    }
    &__ask {
        @include animation(fadeShow, 750ms, 1, 900ms)
    }
    .main-input {
        @include animation(fadeShow, 850ms, 1, 1100ms)
    }
}
</style>