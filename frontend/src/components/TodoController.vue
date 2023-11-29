<template>
    <div class="controller">
        <!-- 정렬 선택칸
        어떤 순서로 정렬할지 선택 -->
        <div class="select">
            <label class="blind" for="order">Order</label>
            <select name="order" id="order" class="selectbox" v-model="selected" v-on:change="sortTodo">
                <option value="date-asc">Oldest</option>
                <option value="date-desc">Latest</option>
            </select>
        </div>

        <!-- 전체 삭제 버튼 -->
        <button class="clear" v-on:click="clearTodo">전체 삭제</button>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex';
    export default {
        data() {
            return {
                selected: "date-asc"
            };
        },
        methods: {
            // clearTodo가 호출되면 mutations의 clearAllItem을 호출한다.
            ...mapMutations({
                clearTodo: "clearAllItem"
            }),
            sortTodo() {
                //선택한 값에 따라 아이템을 정렬한다.
                // this.selected값에 맞는 함수를 mutations에서 찾아 호출한다.
                if(this.selected === "date-desc") {
                    this.$store.commit("sortTodoLatest");
                }
                else if(this.selected === "date-asc") {
                    this.$store.commit("sortTodoOldest")
                }
            }
        }
    };
</script>

<style>

</style>