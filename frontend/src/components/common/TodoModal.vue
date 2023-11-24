<!-- 경고창 등을 담당
현재 컴포넌트는 원형으로 App.vue에서 이를 오버라이드하여 사용한다. -->
<template>
    <transition name="modal" appear>
        <div class="modal modal__dim" v-on:click.self="$emit('close')">
            <div class="modal__content">
                <p class="modal__text">
                    <slot name="modal-text">(여기에 모달 내용이 들어가요)</slot>
                </p>
                <button class="modal__close" v-on:click="$emit('close')">OK</button>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        
    }
</script>

<style>
.modal-enter {
    opacity: 0;
    .modal__content {
        transform: translateY(30px);
        transition: transform 0.6s;
    }
}
.modal-enter-active {
    transition: opacity 0.3s;
}
.modal-leave-active {
    transition: opacity 0.3s 0.05s;
}
.modal-leave-to {
    opacity: 0;
    .modal__content {
        transform: translateY(30px);
        transition: transform 0.6s;
    }
}
</style>