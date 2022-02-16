/*
 * @Author: zhanghongqiao 
 * @Date: 2022-02-16 10:50:20 
 * @Email: 991034150@qq.com 
 * @Description: 学生首页
 * @Last Modified by: zhanghongqiao
 * @Last Modified time: 2022-02-16 14:47:49
 */
<template>
  <div class="student_home">
    <div class="welcome_words ">
      <h2>欢迎2020级<span>王金楠</span>使用党员发展过程管理系统</h2>
      <!-- <p>党员负责人</p> -->
      <img  src="static/images/welcome.png"> 
    </div>
    <div class="current_state">
      <el-steps :active="1" finish-status="success" align-center>
        <el-step title="入党申请"></el-step>
        <el-step title="入党积极份子"></el-step>
        <el-step title="发展对象"></el-step>
        <el-step title="预备党员"></el-step>
        <el-step title="正式党员"></el-step>
      </el-steps>
    </div>
  </div>
</template>

<script>
import './index.scss'
export default {

}
</script>
 

