<template>
  <div id="app">
    <div class="top">
      <TodoHeader/>

      <!-- 저장된 사용자 이름이 있을 때 바로 TodoTitle, TodoInput 컴포넌트를 렌더링한다. -->
      <div v-if="this.storedName">
        <TodoTitle />
        <TodoInput v-on:alertModal="showModal" @reload="reload" />
      </div>

      <!-- 저장된 사용자 이름이 없을 때, TodoHello 컴포넌트를 렌더링한다.
      이 부분이 추후 회원가입 기능 구현 시 만져야할 부분 -->
      <div v-else>
        <TodoHello />
      </div>
    </div>
    <div class="body">

      <!-- 등록된 사용자일 경우 TodoController, TodoList 컴포넌트를 렌더링한다.
      DB에 저장된 아이템의 목록과 정렬 선택창 등을 표시 -->
      <div v-if="this.storedName">
        <TodoController />
        <TodoList ref="list" />
      </div>
      <TodoFooter />
    </div>
    <TodoModal v-show="modalVisible" v-on:close="modalVisible = false">
      <template v-slot:modal-text>{{ modalText }}</template>
    </TodoModal>
  </div>
</template>

<script>
import TodoController from './components/TodoController.vue';
import TodoFooter from './components/TodoFooter.vue';
import TodoHeader from './components/TodoHeader.vue';
import TodoHello from './components/TodoHello.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import TodoTitle from './components/TodoTitle.vue';
import TodoModal from './components/common/TodoModal';
import { mapGetters } from "vuex";

export default {
  name: 'App',
  data() {
    return {
      modalVisible: false,
      modalText: ""
    };
  },
  computed: {
    // 시작 시, getters의 storedName을 호출하여 등록된 사용자가 있는지 확인한다.
    ...mapGetters(["storedName"])
  },
  methods: {
    // 입력없이 엔터 혹은 입력 버튼이 클릭되거나, 중복된 값이 입력될 경우,
    // 인자로 받은 text를 경고창에 띄운다.
    showModal(text) {
      this.modalText = text;
      this.modalVisible = !this.modalVisible;
    },
    reload() {
      this.$refs.list.getBoardList();
    }
  },
  components: {
    TodoController,
    TodoFooter,
    TodoHeader,
    TodoHello,
    TodoInput,
    TodoList,
    TodoTitle,
    TodoModal
  }
}
</script>

<style lang="scss">
@import "./assets/style/_reset";
.top {
  width: 100%;
  min-height: 43.6rem;
  padding: 0 $padding 4.5rem;
  background-image: linear-gradient(145deg, #3770cc 20%, #ce91c9 84%);
}
.body {
  padding: 3rem $padding;
  background-color: #efefef;
}
</style>
