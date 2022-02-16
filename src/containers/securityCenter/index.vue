/*
 * @Author: zhanghongqiao 
 * @Date: 2022-02-16 11:11:32 
 * @Email: 991034150@qq.com 
 * @Description: 安全中心
 * @Last Modified by: zhanghongqiao
 * @Last Modified time: 2022-02-16 12:20:56
 */

 <template>
  <div class="personal_center">
    <div class="main_container white_bg">
      <h4 class="title">修改密码</h4>
      <el-form ref="ruleForm"
               :model="params"
               label-width="95px"
               inline
               :rules="rules"> 
        <el-form-item label="原始密码"
                        prop="oldPassword">
          <el-input v-model="params.oldPassword" type="password" show-password></el-input>
        </el-form-item>

        <el-form-item label="新密码"
                        prop="newPassword">
          <el-input v-model="params.newPassword" type="password" show-password></el-input>
        </el-form-item>

          <el-form-item label="确认新密码"
                        prop="confirmPassword">
             <el-input v-model="params.confirmPassword" type="password" show-password></el-input>
          </el-form-item>  
         

        <el-form-item class="footer">
          <el-button class="w80 white_btn" @click="resetForm">重置</el-button>
          <el-button type="primary"
                  class="w80"
                     @click="submitForm('ruleForm')">保存</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { fetch } from "@/utils/request"; 
import "./index.scss";
import { messagePopup } from "@/utils/util"; 
import upload from "@/containers/common/upload";
import { checkPhone } from "@/utils/regular";

export default {
  data() {
    return { 
      params: { 
        oldPassword: "",
        newPassword: "",
        confirmPassword: '',
      },
      rules: {
        oldPassword: [
          { required: true, message: "请输入原始密码", trigger: "blur" }
        ],
        newPassword: [
          { required: true, message: "请输入新密码", trigger: "blur" },  
        ],
        confirmPassword: [
          { required: true, message: "请输入确认密码", trigger: "blur" },
          {validator: this.validatePassword, trigger: ['blur']},
        ], 
      }
    };
  },
  components: {
    upload
  },
  mounted() { 
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
    requestSave() {
      let params = _.cloneDeep(this.params) 
      return
      fetch("fetchShopSave", params, data => {
        if(data.successful) {
          messagePopup('保存成功') 
        }
      });
    },
    resetForm() {
      this.$refs.ruleForm.resetFields();
    },
    validatePassword(rule, value, callback) {
      if(value !== this.params.newPassword) {
        return callback(new Error('确认密码与新密码不一致，请确认!'));
      } 
      callback()  
    },
  }, 
};
</script>
