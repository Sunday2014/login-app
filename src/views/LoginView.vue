<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
    <div class="space-y-4 p-6 bg-white rounded-xl shadow-lg" style="width: 320px;">
      <div class="text-center">
        <h2 class="text-3xl font-bold text-gray-800">
          登录您的账户
        </h2>
        <p class="mt-2 text-gray-600">欢迎回来，请登录您的账户</p>
      </div>
      <t-form class="mt-6 space-y-6" @submit="handleLogin">
        <div class="space-y-4">
          <t-form-item label="邮箱地址">
            <t-input v-model="email" type="text" placeholder="请输入您的邮箱" clearable></t-input>
          </t-form-item>
          <t-form-item label="密码">
            <t-input v-model="password" type="password" placeholder="请输入您的密码" clearable></t-input>
          </t-form-item>
        </div>

        <div class="flex items-center justify-between">
          <t-checkbox v-model="rememberMe">记住我</t-checkbox>
          <t-link theme="primary" hover="underline">忘记密码?</t-link>
        </div>

        <div>
          <t-button theme="primary" type="submit" block :loading="isLoading">登录</t-button>
        </div>
      </t-form>
      <div class="text-center text-sm text-gray-600">
        还没有账户?
        <router-link to="/register" class="font-medium text-indigo-600 hover:text-indigo-500 hover:underline ml-1">
          立即注册
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Form as TForm, FormItem as TFormItem, Input as TInput, Checkbox as TCheckbox, Button as TButton, Link as TLink } from 'tdesign-vue-next'

const router = useRouter()
const email = ref('')
const password = ref('')
const rememberMe = ref(false)
const isLoading = ref(false)

const handleLogin = () => {
  // Here you would typically make an API call to authenticate the user
  console.log('Login attempt with:', { email: email.value, password: password.value, rememberMe: rememberMe.value })

  // For demo purposes, we'll just log the values and simulate a successful login
  alert('登录成功!')
}
</script>
