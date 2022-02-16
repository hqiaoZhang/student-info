/*
 * @Author: zhanghongqiao
 * @Date: 2020-01-02 16:41:38
 * @Email: 991034150@qq.com
 * @Description: 店铺管理
 * @Last Modified by: zhanghongqiao
 * @Last Modified time: 2022-02-16 12:36:58
 */

 <template>
  <div class="personal_info">
    <div class="main_container white_bg">
      <h4 class="title">个人资料 <el-button class="blue_btn fr"><i class="iconfont">&#xe661;</i>上传资料</el-button></h4>
      <el-form ref="ruleForm"
               :model="params"
               
               label-width="100px"
              > 
        <el-form-item label=" 姓名："
                        prop="name">
           老王
        </el-form-item>

        <el-form-item label="班级："
                        prop="phone">
           初三2班
        </el-form-item>

          <el-form-item label="学号："
                        prop="description">
            20220216
          </el-form-item>

           <el-form-item label="所在支部："
                        prop="description">
              一支部
          </el-form-item>
   

        <!-- <el-form-item class="footer">
          <el-button type="primary"
                  class="w80"
                     @click="submitForm('ruleForm')">保存</el-button>
        </el-form-item> -->
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
        address: "",
        description: "",
        logo: "",
        name: "",
        phone: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入店铺名称", trigger: "blur" }
        ],
        phone: [
          { required: true, message: "请输入联系电话", trigger: "blur" }, 
          { pattern: checkPhone(), message: "请输入有效的手机号", trigger: "blur" }
        ],
        address: [
          { required: true, message: "请输入详细地址", trigger: "blur" }
        ],
        description: [
          { required: true, message: "请输入店铺简介", trigger: "blur" }
        ], 
        logo: [
          { required: true, message: "请上传店铺Logo", trigger: "blur" }
        ], 
      }
    };
  },
  components: {
    upload
  },
  mounted() {
    this.requestShopDetail()
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
    requestShopDetail() {
      fetch('fetchShopDetail', data => {
        this.params = data
      })
    },
    requestSave() {
      let params = _.cloneDeep(this.params)
      params.logo = this.params.logo[0]
      fetch("fetchShopSave", params, data => {
        if(data.successful) {
          messagePopup('保存成功') 
        }
      });
    },
    resetForm() {
      this.$refs.ruleForm.resetFields();
    }
  },
  watch: {
    'params.logo': function(val) {
      if(val) {
        this.$refs.ruleForm.clearValidate('logo');
      }
    }
  }
};
</script>
