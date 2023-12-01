<template>
  <transition-group name="list" tag="ul" class="list" v-bind:class="listempty">
    <li class="list__item" v-for="(todoItem, index) in this.storedTodoItems" :key="todoItem.id">
      <!-- 체크박스 컨테이너 -->
      <div class="checkbox-container">
        <input type="checkbox" v-bind:id="todoItem.item" v-bind:checked="todoItem.completed === true" v-on:change="toggleComplete({todoItem})" />
        <label v-bind:for="todoItem.item" class="list__label">
          <span class="icon-check"></span>
        </label>
      </div>
      <!-- ID 표시 -->
      <!-- <div class="list__id">{{ todoItem.id }}</div> -->

      <!-- 텍스트 컨테이너 -->
<!--      <p class="list__text">{{ todoItem.item }}</p>-->
      <p :class="{ 'list__text': true, 'text-completed': todoItem.completed }">{{ todoItem.item }}</p>


      <div class="list__right">
                  <!-- 삭제버튼
                  클릭되면 removeTodo를 호출한다.  -->
        <button class="list__delete" v-on:click="removeTodo({todoItem, index})">
          <span>삭제</span>
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
.list__item {
  display: flex;
  align-items: center; /* Aligns items vertically in the center */
  justify-content: flex-start; /* Aligns items to the start of the container */
}

.checkbox-container {
  flex-shrink: 0; /* Prevents checkbox from shrinking */
  margin-right: 650px; /* Adjusts the space between checkbox and the text */
}

.list__id {
  margin-right: auto; /* ID를 왼쪽으로 밀기 */
  font-weight: bold;
}

.list__text {
  flex-grow: 1; /* Allows text to take up remaining space */
  text-align: justify; /* Justifies text to both edges */
  word-wrap: break-word;
  color: black;
}

.text-completed {
  color: rgba(19, 17, 17, 0.48); /* 텍스트 흐림 효과 */
  text-decoration: line-through; /* 취소선 */
}

.list__date{
  margin-top: 20px;
  font-weight: bold;
}

.list__delete {
  margin-left: 500px; /* Adjusts the space between the date and the delete button */
  font-weight: bold;
}

</style>