<style lang="scss">
.el-upload-list--picture-card .el-upload-list__item,
.el-upload-dragger {
    width: 240px;
  height: 90px;
  line-height: 90px;
  text-align: center;
}
.el-upload-dragger {
  width: 240px;
  height: 90px;
  line-height: 90px;
  border: none;
  .el-icon-upload {
    font-size: 24px;
    margin: 0;
    line-height: 40px;
  } 
} 
.el-form-item__content div + .el-form-item__error {
  top: initial; 
}
.el-upload-list--picture-card .el-upload-list__item-thumbnail,
.el-upload--picture-card {
  width: auto;
  height: auto;
}
</style>

<template>
<div>
    <el-upload
    class="upload_image"
    :drag="true"
    :file-list="fileList"
    list-type="picture-card"
    :before-upload="beforeUpload"
    :on-preview="handlePictureCardPreview" 
    :before-remove="beforeRemove"
    action="http://localhost:80" :limit='limit || 1' ref="upload"
    :auto-upload="true"
    :accept="accept"
    :http-request='submitUpload'>
    <i class="el-icon-plus" ></i>
    <!-- <i class="el-icon-upload"></i> --> 
  </el-upload>
  <el-dialog :visible.sync="dialogVisible" title="图片预览">
    <img width="100%" :src="dialogImageUrl">
  </el-dialog>
</div>
</template>

<script>
import {fetch} from '@/utils/request'
import { messagePopup, loadingText } from "@/utils/util";
export default {
  data() {
    return { 
      fileList: [],
      accept: "",
      dialogImageUrl: '',
      dialogVisible: false
    }
  },
  props: [
    'imgSize',
    'limit',
    'imageUrl',
    'showImageUrl'
  ], 
  model: {
    event: 'change'
  },
  mounted() {
    this.setimageUrl(this.imageUrl)
    console.log(this.limit)
  },
  methods: {
    setimageUrl(imgUrl) {
      if(!imgUrl) {
        // this.$refs.upload.clearFiles()
        return
      } 
      this.fileList = [] 
      if(typeof imgUrl == 'object') {
        imgUrl.map((url, i) => {
          this.fileList.push({ url: this.showImageUrl[i], uploadUrl: url})
        }) 
      }else {
         this.fileList = [{url: this.showImageUrl, uploadUrl: imgUrl}]
      }   
     
    },
    submitUpload: function(content) {//自定义的上传图片的方法 
      this.requestFileUpload(content)
    },
    requestFileUpload(content) {
      
      let loading = loadingText("图片上传中...");
      fetch('fetchUpload',  {file: content.file }, data => {
        loading.close()
        if(!data) {
          return messagePopup('图片上传失败')
        }  
        if(data.successful) { 
          const { showPath, path} = data.result
           this.fileList.push({url: showPath, uploadUrl: path})
          return 
        }
        this.fileList = []
        messagePopup(data.error || '图片上传失败')
        
      })
    },
 
    // 文件上传之前
    beforeUpload(file) { 
      const isLt50K = file.size > 1024 * this.imgSize
      if (isLt50K) {
        this.fileList = []
         messagePopup(this, `图片大小不能超过${this.imgSize}K`)
         return false
      }
    },
    beforeRemove(file, fileList) {
      console.log(file, fileList)
      let url = file.url
      this.fileList = this.fileList.filter(item => item.url != url)
      console.log(this.fileList)
      // //  this.fileList = fileList
      //  let urls = fileList.map(item => item.url)
      //  this.$emit('change', '')
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url.split('?')[0];
      this.dialogVisible = true;
    }
  },
  watch: {
    fileList(val) { 
      let urls = val.map(item => item.uploadUrl)
      this.$emit('change', urls)
    },
    showImageUrl: function() {
      this.setimageUrl(this.imageUrl)
    }
  },
}
</script>
