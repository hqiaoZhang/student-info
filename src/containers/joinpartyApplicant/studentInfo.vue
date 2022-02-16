/*
 * @Author: zhanghongqia 
 * @email: 991034150@qq.com 
 * @Date: 2021-07-26 22:15:55 
 * @Description: 商品上传
 * @Last Modified by: zhanghongqiao
 * @Last Modified time: 2022-02-16 13:49:58
 */
 
<template>
  <div class="student_info">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item to="/joinpartyApplicant">入党申请人</el-breadcrumb-item>
      <el-breadcrumb-item>{{params.id ? '编辑学生信息' : '添加学生信息'}}</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="main_container white_bg">
      <el-form ref="ruleForm"
               :model="params"
               label-width="80px" 
               :rules="rules">

        <el-row>
          <el-form-item label="用户名"
                        prop="name">
            <el-input v-model="params.name"></el-input>
          </el-form-item>

          <el-form-item label="密码"
                        prop="category">
            <el-input v-model="params.category"></el-input>
          </el-form-item>

        </el-row>

        <el-row>
          <el-form-item label="姓名"
                        prop="price">
            <el-input v-model="params.price" type="number">  
            </el-input>
          </el-form-item>

          <el-form-item label="班级"
                        prop="unit">
            <el-input v-model="params.unit"></el-input>
          </el-form-item> 
        </el-row>

         <el-row>
           <el-form-item label="学号"
                        prop="expressPrice">
            <el-input v-model="params.expressPrice" type="number"> 
            </el-input>
          </el-form-item> 
         </el-row>      
         
        <el-form-item class="footer">
          <el-button class="w80 white_btn">取消</el-button>
          <el-button type="primary"
              class="w80"
                     @click="submitForm('ruleForm')">保存</el-button>
           
        </el-form-item>
      </el-form>
    </div>

  </div>
</template>

<script>
import "./index.scss";
import { fetch } from "@/utils/request";
import { messagePopup, loadingText } from "@/utils/util";
import upload from "@/containers/common/upload";  
export default {
  data() { 
    return {
      payTypes: [],
      params: {
        category: "", // 商品分类
        cover: "", // 封面图片路径
        description: "",
        id: '',
        lunboList: [], // 轮播图片路径列表
        name: "",
        payType: '',
        price: '',
        unit: "",
        expressPrice: '' // 运费
      },
      rules: {
        name: [
          { required: true, message: "请输入商品名称", trigger: "blur" }
        ],  
        expressPrice: [
          { required: true, message: "请输入运费", trigger: "blur" }
        ], 
        category: [
          { required: true, message: "请输入商品分类", trigger: "blur" }
        ],  
        cover: [
          { required: true, message: "请上传封面图片", trigger: "change" }
        ], 
        lunboList: [
          { required: true, message: "请上传轮播图片", trigger: "blur" }
        ],
        payType: [
          { required: true, message: "请选择支付类型", trigger: "change" }
        ],
        price: [
          { required: true, message: "请输入商品价格", trigger: "blur" }
        ],
        unit: [
          { required: true, message: "请输入商品单位", trigger: "blur" }
        ],  
      }
    };
  },
  components: {
    upload
  },
  mounted() {
    this.requestProductPayTypes() 
    this.params.id =  this.$route.query.id
    if(this.params.id) {
      document.title = '编辑学生信息'
      this.requestProductDetail()
    } 
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.requestSave();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    // 查询详情
    requestProductDetail() {
      fetch('fetchProductDetail', {id: this.params.id}, data => { 
        this.params = data
      })
    },
    // 查询支付类型
    requestProductPayTypes() {
      fetch('fetchProductPayTypes', data => {
        this.payTypes = data
      })
    },
    requestSave() {
      let params = _.cloneDeep(this.params)
      params.cover = this.params.cover[0]
      fetch("fetchProductSave", params, data => { 
        if (data.successful) { 
          this.$router.push("/commodityManage");
        } else {
          messagePopup(data.error || "上传失败");
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }, 
  },
  watch: {
    "params.lunboList": function(val) { 
      // 轮播图
      if (val) { 
        this.$refs.ruleForm.clearValidate("lunboList");
      }
    },
    // 封面
    "params.cover": function(val) {
      // 卫生许可证图片路径
      if (val) {
        this.$refs.ruleForm.clearValidate("cover");
      }
    }, 
  }
};
</script>
 

