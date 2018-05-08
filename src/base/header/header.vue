<template>
  <div>
    <el-menu
      class="el-menu"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item class="el-logo" index="5">中科劲点定位监控平台</el-menu-item>
      <el-menu-item class="el-item" index="1"> <i class="el-icon-upload"></i> Welcome,Admin!</el-menu-item>
      <el-menu-item class="el-item" index="2"> <i class="el-icon-message"></i> </el-menu-item>
      <el-menu-item class="el-item elitem" index="3" @click="openMsg()">
          <el-badge :value="megnum" :is-dot="true" :max="10" class="item" :hidden="isBadge">
            <i class="el-icon-warning icon"></i>
          </el-badge>
      </el-menu-item>
      <el-menu-item class="el-item" index="4"><i class="el-icon-setting"></i></el-menu-item>

    </el-menu>
  </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data() {
            return {
              megnum: 2,
              tags: [
                {id:'1', name: '张三', msg: '张三消失了',type: 'warning' },
                {id:'2', name: '张三', msg: '张三消失了',type: 'warning'},
              ],
              isBadge:false,
              isOpen:true
            }
        },
        methods:{
          openMsg(){
            if (this.isOpen===false) {
              return
            }
            this.isOpen = false;
            let data = this.tags;
            let _that = this;
            for (let i=0; i<data.length; i++) {
              setTimeout(()=>{
                this.$notify({
                  title: '提示',
                  message: data[i].msg,
                  duration: 0,
                  offset: 100,
                  type:data[i].type,
                  onClose(){
                    _that.megnum--;
                    _that.tags.splice(_that.tags.indexOf(data[i]), 1);
                    if (_that.megnum == 0) {
                      _that.isBadge = true;
                    }
                  }
                });
              },200*i)
            }
            // this.$notify({
            //   title: '提示',
            //   message: '这是一条不会自动关闭的消息',
            //   duration: 0,
            //   offset: 100
            // });
          }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .el-menu
    .elitem
      width 69px
    .el-item
      float right
    .item
      margin-top: 20px;
      margin-right: 40px;
      .icon
        position: relative
        top -18px
    .el-logo
      font-size 20px
      font-weight bold

</style>

