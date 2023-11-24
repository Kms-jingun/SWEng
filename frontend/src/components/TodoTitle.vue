<template>
    <div class="title">
        <p class="title__text">
            <span class="title__message">Good {{ message }},</span>
            <span
                v-on:keyup.enter="handleEnter"
                v-on:blur="handleBlur"
                class="title__name"
                ref="test"
                contenteditable="true"
            >{{ this.userName }}</span>
            .
        </p>
        <p class="title__task">
            <span class="title__task-top">오늘의 할 일은</span>
            <span class="title__task-count">
                <em class="title__task-left">{{ this.todoItemsCount.left }}</em>
                <em
                    v-if="this.todoItemsCount.total"
                    class="title__task-total"
                >&nbsp;/ {{ this.todoItemsCount.total }}</em>
            </span>
            <span class="title__task-bottom">
                <span v-if="this.todoItemsCount.total > 1"></span>
                <span v-else></span> 입니다 !
            </span>
            <span class="title__task-info"></span>
        </p>
    </div>
</template>

<script>
    import getDate from "../assets/common/getDate.js";
    export default {
        data() {
            return {
                message: "",
                userName: this.$store.getters.storedName
            };
        },
        methods: {
            // 로그인 후 상단의 나타나는 사용자 이름이 포커스아웃될 시(클릭되었을 때) 입력한 이름으로 변경한다.
            handleBlur(e) {
                const originalName = this.userName;
                const newName = e.target.innerText;
                if(newName !== originalName) {
                    if(newName === "") {
                        e.target.innerText = originalName;
                    }
                    else {
                        this.$store.commit("setUserName", newName);
                    }
                }
            },
            handleEnter() {
                this.$refs.test.blur();
            }
        },
        computed: {
            // 할 일 목록 수 표시
            todoItemsCount() {

                // 미완료 상태의 아이템의 개수를 리턴하는 함수
                const checkLeftItems = () => {

                    // DB에서 가져온 아이템들은 state.todoItems에 저장되어있음
                    // 이를 getters.storedTodoItems를 호출하여 items에 저장한다.
                    // 이 중에 미완료된 아이템의 개수를 세서 리턴한다.
                    const items = this.$store.getters.storedTodoItems;
                    let leftCount = 0;
                    for(let i=0; i<items.length; i++) {
                        if(items[i].completed === false) {
                            leftCount++;
                        }
                    }
                    return leftCount;
                };

                // 객체 count에 총 아이템의 개수와 미완료 아이템의 개수를 넣어 리턴한다.
                const count = {
                    total: this.$store.getters.storedTodoItemsCount,
                    left: checkLeftItems()
                };
                return count;
            }
        },
        mounted() {
            // 시작 시 출력할 시간대에 맞는 인삿말을 저장한다.
            this.message = getDate().daytime;
        }
    };
</script>

<style>

</style>