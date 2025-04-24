<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8 p-8 bg-white rounded-xl shadow-lg">
      <div class="text-center">
        <h2 class="text-3xl font-bold text-gray-800">
          创建新账户
        </h2>
        <p class="mt-2 text-gray-600">加入我们，开始您的旅程</p>
      </div>
      <t-form class="mt-6 space-y-6" @submit="handleRegister">
        <div class="space-y-4">
          <t-form-item label="姓名">
            <t-input v-model="name" type="text" placeholder="请输入您的姓名" clearable></t-input>
          </t-form-item>
          <t-form-item label="邮箱地址">
            <t-input v-model="email" type="text" placeholder="请输入您的邮箱" clearable></t-input>
          </t-form-item>
          <t-form-item label="密码">
            <t-input v-model="password" type="password" placeholder="请输入密码" clearable></t-input>
          </t-form-item>
          <t-form-item label="确认密码">
            <t-input v-model="confirmPassword" type="password" placeholder="请再次输入密码" clearable></t-input>
          </t-form-item>
        </div>

        <div>
          <t-button theme="primary" type="submit" block :loading="isLoading">注册</t-button>
        </div>
      </t-form>
      <div class="text-center text-sm text-gray-600">
        已有账户?
        <router-link to="/" class="font-medium text-indigo-600 hover:text-indigo-500 hover:underline ml-1">
          返回登录
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Form as TForm, FormItem as TFormItem, Input as TInput, Button as TButton } from 'tdesign-vue-next'

const router = useRouter()
const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')

const isLoading = ref(false)

const handleRegister = async () => {
  if (password.value !== confirmPassword.value) {
    alert('密码不匹配!')
    return
  }

  isLoading.value = true

  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))

    console.log('Register attempt with:', {
      name: name.value,
      email: email.value,
      password: password.value
    })

    alert('注册成功!')
    router.push('/')
  } catch (error) {
    console.error('Registration failed:', error)
    alert('注册失败，请重试')
  } finally {
    isLoading.value = false
  }
}
</script>
