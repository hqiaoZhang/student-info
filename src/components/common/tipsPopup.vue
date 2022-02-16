/*
 * @Author: zhanghongqiao 
 * @Date: 2021-08-03 14:41:09 
 * @Email: 991034150@qq.com 
 * @Description: 提示框
 * @Last Modified by: zhanghongqiao
 * @Last Modified time: 2022-02-16 14:04:05
 */



<style lang="scss">
.tips_dialog {
  p {
    font-size: 16px; 
    text-align: center;
    margin-top: 34px;
  }
}
</style>

<template>
    <el-dialog
      :close-on-click-modal="false"
      :show-close="false"
      title="" 
      custom-class="tips_dialog"
      :visible.sync="dialogVisible"
      width="408px"
      :before-close="handleClose">
      <p>{{text || '确定要删除选中项吗'}}</p>
      <span slot="footer" class="dialog-footer">
        <el-button class="white_btn" @click="handleClose(false)">取消</el-button>
        <el-button class="blue_btn"  @click="handleClose('ok')">{{'确定' || btnText}}</el-button> 
      </span>
    </el-dialog>
</template>


<script>
  export default {
    data() {
      return {
        dialogVisible: false,
      };
    },
    model: {
      event: 'change'
    },
    props: {
      isShowTip: Boolean,
      text: String,
      subText: String,
      isShow: Boolean,
      title: String,
      btnText: String
    },
    mounted() {
      // 显示时会传入0
      this.dialogVisible = this.isShow
    },
    methods: {
      handleClose(type) {   
        this.$emit('change', typeof type  == 'function' ? false : type)
        if(type == 'ok') {
          this.$emit('sure')
        }
        this.dialogVisible = false
      },
    },
    watch: {
      isShow: function () {
        // 显示时会传入0
        this.dialogVisible = this.isShow
      }
    }
  };
</script>