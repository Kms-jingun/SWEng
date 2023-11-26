<template>
    <header class="header">
        <h1 class="logo">
            <span class="blind"></span>
        </h1>

        <!-- 월, 일, 요일(timestamp)를 출력한다. -->
        <p class="header__date">{{ timestamp }}</p>
  </header>
</template>

<script>
    import getDate from "../assets/common/getDate.js";
    export default {
        data() {
            return {
                timestamp: ""
            };
        },
        created() {
            // 시작 시 getDate() 객체를 통해 날짜, 요일 등을 계산하여 저장한다.
            this.timestamp = `${getDate().month}/${getDate().date} ${getDate().week} ${String(getDate().hour).padStart(2, "0")}:${String(getDate().minute).padStart(2, "0")}`
        }
    };
</script>

<style>

</style>