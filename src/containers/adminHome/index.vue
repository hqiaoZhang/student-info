/*
 * @Author: zhanghongqiao 
 * @Date: 2022-02-16 10:50:20 
 * @Email: 991034150@qq.com 
 * @Description: 负责人首页
 * @Last Modified by: zhanghongqiao 
 * @Last Modified time: 2022-02-16 10:50:20 
 */
<template>
  <div class="student_home">
    <div class="welcome_words ">
      <h2>欢迎支部负责人<span>王金楠</span>使用党员发展过程管理系统</h2>
      <!-- <p>党员负责人</p> -->
      <img  src="static/images/welcome.png"> 
    </div>
     <el-row class="counts">
        <el-col :span="12">
          <h5>入党申请人</h5>
          <h3>20人</h3>
          <i class="iconfont">&#xe6a7;</i>
        </el-col>
        <el-col :span="12">
          <h5>入党积极分子</h5>
          <h3>16人</h3>
          <i class="iconfont red">&#xe696;</i>
        </el-col>
        <!-- <el-col :span="8">
          <h5>数据量</h5>
          <h3>xx</h3>
          <i class="iconfont yellow">&#xe6a0;</i>
        </el-col> -->
      </el-row> 
  </div>
</template>

<script>
import './index.scss'
export default {

}
</script>
 

