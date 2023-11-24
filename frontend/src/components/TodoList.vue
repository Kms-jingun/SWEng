<template>
    <transition-group name="list" tag="ul" class="list" v-bind:class="listempty">
        <li
            class="list__item"
            v-for="(todoItem, index) in this.storedTodoItems"
            v-bind:key="todoItem.item"
        >
            <!-- 완료여부를 수정하는 체크박스
            체크되면 todoItem.completed의 값을 true로 설정한다.
            체크로 인해 기존과 값이 바뀔 경우 toggleComplete을 호출한다. -->
            <input
                type="checkbox"
                v-bind:id="todoItem.item"
                v-bind:checked="todoItem.completed === true"
                v-on:change="toggleComplete({todoItem})"
            />
            <label v-bind:for="todoItem.item" class="list__label">
                <span class="icon-check"></span>
                <p class="list__text">{{ todoItem.item }}</p>
            </label>

            <div class="list__right">
                <!-- 삭제버튼
                클릭되면 removeTodo를 호출한다.  -->
                <button class="list__delete" v-on:click="removeTodo({todoItem, index})">
                    <div class="blind">Delete</div>
                </button>
                
                <!-- 입력된 날짜 -->
                <p class="list__date">{{ todoItem.date }}</p>
            </div>
        </li>
    </transition-group>
</template>

<script>
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";

    export default {
        name: 'todoItems',
        computed: {
            ...mapGetters(["storedTodoItems", "storedTodoItemsCount"]),

            // 현재 아이템이 없을 경우 빈 화면의 css를 보여준다.
            listempty() {
                return this.storedTodoItemsCount <= 0 ? "list--empty" : null;
            }
        },
        methods: {
            ...mapMutations({
                removeTodo: "removeOneItem",
                toggleComplete: "toggleOneItem"
            }),
        },
    };
</script>

<style>

</style>