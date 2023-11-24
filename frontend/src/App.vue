<template>
  <div id="app">
    <div class="top">
      <TodoHeader/>

      <!-- 로그인이 완료된 상태일 때 TodoTitle, TodoInput 컴포넌트를 렌더링한다. -->
      <div v-if="this.isLogIn">
        <TodoTitle />
        <TodoInput @alertModal="showModal" @reload="reload"/>
      </div>
      <div v-else-if="this.isRegister">
        <TodoRegister @alertModal="showModal" @reload="reload"/>
      </div>

      <!-- 로그인 상태가 아닐 때, TodoHello 컴포넌트를 렌더링한다.
      이 부분이 추후 회원가입 기능 구현 시 만져야할 부분 -->
      <div v-else>
        <TodoHello v-on:alertModal="showModal" @reload="reload"/>
      </div>
    </div>
    <div class="body">

      <!-- 등록된 사용자일 경우 TodoController, TodoList 컴포넌트를 렌더링한다.
      DB에 저장된 아이템의 목록과 정렬 선택창 등을 표시 -->
      <div v-if="this.isLogIn">
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
import TodoRegister from './components/TodoRegister.vue';
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
    ...mapGetters(["storedName", "isLogIn", "isRegister"])
  },
  methods: {
    // 입력없이 엔터 혹은 입력 버튼이 클릭되거나, 중복된 값이 입력될 경우, 잘못된 값이 입력되는 등의 경우
    // 인자로 받은 text를 경고창에 띄운다.
    // text값은 alertModal을 호출한 컴포넌트에서 받은 값이다.
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
    TodoModal,
    TodoRegister
  }
}
</script>

<style>

</style>
