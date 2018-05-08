<template>
    <div id="admin-gauge">
      <el-row>
        <el-col :span="8">
          <div id="myChart" style="width: 300px;height: 300px;"></div>
        </el-col>
        <el-col :span="16">
          <el-table
            :data="$store.state.table.userAllData"
            height="350"
            border
          >

            <el-table-column
              prop="user.userName"
              label="姓名">
            </el-table-column>

            <el-table-column
              prop="user.deviceId"
              label="编号"
              width="180"
            >
            </el-table-column>

            <el-table-column
              width="80"
              label="状态">
              <template slot-scope="scope">
                <el-tag v-if="scope.row.user.currentStatus==1" size="medium">{{ scope.row.user.currentStatus | currentStatus}}</el-tag>
                <el-tag v-if="scope.row.user.currentStatus==2" type="warning" size="medium">{{ scope.row.user.currentStatus | currentStatus}}</el-tag>
                <el-tag v-if="scope.row.user.currentStatus==3" type="danger" size="medium">{{ scope.row.user.currentStatus | currentStatus}}</el-tag>
              </template>
            </el-table-column>
            <el-table-column
              prop="user.statusUpdateTime"
              width="180"
              label="时间">
              <!--<template slot-scope="scope">-->
                <!--&nbsp; <i @click.native.prevent="deleteRow(scope.$index, tableData)" class="el-icon-setting"></i>-->
              <!--</template>-->
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data() {
            return {
              tableData: [{
                date: '20170929670',
                name: '张东',
                state: '越界',
                tag: '8:00'
              }, {
                date: '20170929671',
                name: '王华',
                state: '消失',
                tag: '9:00'
              }, {
                date: '20170929672',
                name: '赵明',
                state: '正常',
                tag: '12:00'
              }]
            }
        },
        filters: {
          currentStatus: function (val) {
            return val == 1 ? '正常' : val == 2 ? '消失' : '越界';
          },
        },
        methods: {
            initGauge:function () {
              let myChart = this.$echarts.init(document.getElementById('myChart'));
              let option = {
                tooltip : {
                  formatter: "{a} <br/>{b} : {c}%"
                },
                toolbox: {
                  feature: {
                    restore: {},
                    saveAsImage: {}
                  }
                },
                series: [
                  {
                    name: '业务指标',
                    type: 'gauge',
                    detail: {formatter:'{value}%'},
                    data: [{value: 50, name: '完成率'}]
                  }
                ]
              };
              option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
              myChart.setOption(option, true);
            },
            deleteRow: function (index,data) {

            }
        },
        mounted(){
           this.initGauge();
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
#admin-gauge
  width 100%
  height 100%
  padding 20px
</style>

