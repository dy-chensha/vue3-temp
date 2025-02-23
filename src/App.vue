<template>
    <div class="box">
        <h1>参数</h1>
        <SvgIcon name="love" />
    </div>
</template>

<script setup>
import axios from 'axios';
import { reqLogin } from '@/api/user';
import { onMounted } from 'vue';
onMounted(() => {
    reqLogin({ username: 'admin', password: '123456' });
});
</script>
<style lang="scss">
.box {
    h1 {
        color: $mainColor;
    }
}
</style>
