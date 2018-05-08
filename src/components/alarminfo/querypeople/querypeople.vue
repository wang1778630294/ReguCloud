<template>
    <div id="admin-query">
      <el-header class="trackquery-header common-clearpadding" height="40px">
        <cus-floor></cus-floor>
      </el-header>
      <el-row>
        <el-col :xs="24" :sm="24" :md="24" :lg="14" :xl="14">
          <cus-gauge></cus-gauge>
        </el-col>
        <el-col :xs="24" :sm="24" :md="24" :lg="10" :xl="10">
          <cus-line></cus-line>
        </el-col>
      </el-row>
      <el-row>
        <el-col :xs="24" :sm="24" :md="24" :lg="16" :xl="16">
          <cus-bar></cus-bar>
        </el-col>
        <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
          <cus-pie></cus-pie>
        </el-col>
      </el-row>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data() {
            return {

            }
        },
        mounted(){
          this.$store.dispatch('get_user_all');
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
#admin-query
  width 98%
  height 100%
</style>

