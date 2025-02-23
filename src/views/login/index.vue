<template>
    <div>
        <el-form :inline="true" :modal="ruleForm">
            <el-form-item prop="username">
                <el-input v-model="ruleForm.username"> </el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input v-model="ruleForm.password"> </el-input>
            </el-form-item>
        </el-form>
        <el-button @click="login"> 登录 </el-button>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import useUserStore from '@/store/module/user.ts';
import { useRouter } from 'vue-router';
import { ElMessage } from 'element-plus';
const ruleForm = reactive({
    username: '',
    password: '',
});
let userStore = useUserStore();
let $router = useRouter();
console.log($router);
const login = async () => {
    try {
        let res = await userStore.userLogin(ruleForm);
        $router.push('/');
        ElMessage({
            type: 'success',
            message: '登陆成功',
        });
    } catch (error) {
        console.log(error);
        ElMessage({
            type: 'error',
            message: '账号或者密码错误',
        });
    }
};
</script>

<style lang="scss" scoped></style>
