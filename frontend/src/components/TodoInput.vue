<template>
    <div>
        <div class="main-input">

            <!-- 입력창
            입력되는 내용은 newTodoItem에 저장된다.
            입력 후 엔터가 입력되면 addTodoItem을 호출한다.
             -->
            <input
                type="text"
                class="add__input"
                placeholder="할 일을 입력하세요."
                v-model="newTodoItem"
                v-on:keypress.enter="addTodoItem"
                ref="taskInput"
            />

            <!-- 엔터 대신 해당 버튼이 클릭되도 똑같이 동작한다. -->
            <button class="add__buttonn" v-on:click="addTodoItem">
                <span class="blind">Add</span>
            </button>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        data() {
            return {
                newTodoItem: ""
            };
        },
        computed: {
            ...mapGetters(["storedTodoItems", "storedTodoItemsCount"])
        },
        methods: {

            // 중복되는 내용이거나, 빈 내용일 경우, 상황에 맞는 text값을 전달하면서 alertModal을 호출한다.
            // 이후 동작은 App.vue에서 나타난다.
            addTodoItem() {
                //중복되는 내용인 경우
                const oldItems = this.storedTodoItems;
                for(let i=0; i<this.storedTodoItemsCount; i++) {
                    if(oldItems[i].item === this.newTodoItem) {
                        const text = "같은 내용이 이미 존재합니다.";
                        this.$emit("alertModal", text);
                        return false;
                    }
                }

                //빈 내용인 경우
                if(this.newTodoItem === "") {
                    const text = "내용을 입력해주시기 바랍니다.";
                    this.$emit("alertModal", text);
                    this.clearInput();
                    return false;
                }
                this.$store.commit("addOneItem", this.newTodoItem);
                this.clearInput();
                this.$refs.taskInput.focus();
            },

            // 입력창을 비운다.
            clearInput() {
                this.newTodoItem = "";
            }
        }
    };
</script>

<style>

</style>