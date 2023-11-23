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
        <div className="main-input">
            <input
                className="hello__input"
                type="text"
                id="user-name"
                placeholder="Let me know your name"
                v-model="userName"
                v-on:keypress.enter="addUserName(userName)"
            />
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
        </div>
    </div>
</template>

<script>
    import { mapMutations } from "vuex"
    export default {
        data() {
            return {
                userName: ""
            };
        },
        methods: {
            ...mapMutations({
                // addUserName이 호출되면 mutations의 setUserName을 호출한다.
                addUserName: "setUserName"
            })
        }
    };
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