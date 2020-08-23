<template>
<div id="zxtable">

    <!-- 头部的插槽 -->
    <div class="bar">
        <div class="tool">
              <slot :data="tool"  name="tool"></slot>
        </div>
        <el-button type="text" icon="el-icon-download" @click="exp" :loading="downLoading" v-if="showExcel">导出excel</el-button>
    </div>

    <slot   name="settingBar"></slot>

    <!-- 表格主体 -->
    <el-table :data="tableData"  stripe size="mini" v-loading="loading"  @current-change="handleCurrentChange" @selection-change="handleSelectionChange" ref="table" :highlight-current-row="highlight" height="0" :span-method="spanMethod" :row-class-name="tableRowClassName">

        <slot name="expand" v-if="expand"></slot>
        <el-table-column :type="type" width="50" :index="indexMethod"></el-table-column>
        <slot name="column"></slot>


      </el-table>


    <!-- 表格分页 -->
    <el-pagination
      background
      :page-size="rows"
      :pager-count="11"
      layout="prev, pager, next"
      :total="total"
      :current-page="page"
      @current-change="currentChange"
      v-if="showPage">
  </el-pagination>


    <el-dialog :title.sync="dialogData.title" :visible.sync="dialogData.show" :width="dialogData.width"  ref="dialog" :close-on-click-modal="false">
            <slot :data="elForm"  name="dialog"></slot>
            <el-row style="margin-bottom:20px;">
              <el-col :span="12">&#12288;</el-col>
              <el-col :span="12" style=" text-align: right">
                <el-button  size="small" @click="dialogData.show=false">取 消</el-button>
                <el-button type="success" size="small" @click="save()" :loading="btnLoading">保 存</el-button>
              </el-col>
            </el-row>
    </el-dialog>


</div>
</template>

<script>
  export default {
    props: {
     	loadUrl: {//ajax loadurl
      		type: String,
      		default: ""
      },
      delUrl: {//ajax 删除url
      		type: String,
      		default: ""
      },
      editUrl: {//ajax 编辑url
      		type: String,
      		default: ""
      },
      action: {//ajax 表单提交url
      		type: String,
      		default: ""
      },
      rows:{//默认20条
        	type: Number,
      		default: 20
      },
      expand:{//子页面用到
          	type: Boolean,
      		  default: false
      },
      showPage:{//是否显示分页
        	type: Boolean,
      		default: true
      },
      showExcel:{//是否显示Excel
        	type: Boolean,
      		default: true
      },
      autoLoad:{//是否自动加载数据
        	type: Boolean,
      		default: true
      },
      tag:{//表格中文标示、如果没有将已当前路由标示
      		type: String,
      		default: ''
      },
      type:{//是否为多选，默认不是
      		type: String,
      		default: "index"
      },
      setLine:{//是否为多选，默认不是
      		type: Array,
      		default: function () {
              return []
          }
      },
      merge:{//合并字段
      		type: String,
      		default: ""
      },
      rowClass:{//根据字段变行class
      		type: String,
      		default: ""
      },
      
      
  	},
    data() {
      return {
        total:0,//总条数
        page:1,//第一页
        tool:{},
        tableData: [],
        loading:false,
        dialogData:{
          title:"",
          show:false,
          width:'800px'
        },
        elForm:{},
        highlight:false,
        downLoading:false,
        btnLoading:false
      }
    },
    methods: {
      load(){
        this.loading = true;
        let d = Object.assign({
          page : this.page,
          rows:this.rows
        }, this.tool);
        console.log(d)
        this.$post(this.loadUrl,d).then((response) => {
          this.$nextTick(function () {
            this.$emit("loadSuccess",response)              
          })
          this.tableData = response.data.rows;
          this.total = response.data.total;
          setTimeout(()=>{
            this.loading = false;
            this.highlight=true;
            if(this.type=='index'){
              if(this.isEmpty(this.setLine))this.setLine.push(0);
              this.$refs.table.setCurrentRow(this.tableData[this.setLine[0]]);
            }else{
              this.setLine.forEach(row => {
                this.$refs.table.toggleRowSelection(this.tableData[row]);
              });
            }
          },300)
        })
      },
      search(){
        this.page =1;
        this.$nextTick(function(){
          this.load();
        });
      },
      del(row,params){
        var p = params || {};
        let d = {id : row.id};
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$post(this.delUrl,d).then((response) => {
              this.$nextTick(function () {
                if(p.success != undefined)p.success(response);              
              })
              this.$msg.message(response.msg)
              this.load();
          })
        }).catch(() => {});
      },
      edit(row,params){
        var p = params || {};
        this.dialogData={
          title:'编辑',
          show:true,
          width:p.width||'800px'
        }
        let d = Object.assign(p.data || {}, { id : row.id });
        this.$post(this.editUrl,d).then((response) => {
            this.$nextTick(function () {
              if(p.success != undefined)p.success(response);              
            })
            this.$refs.dialog.$children[0].resetFields();//重置表单
            this.elForm = response.data;
        })
      },
      add(params){
        var p = params || {};
        this.dialogData={
          title:'新增',
          show:true,
          width:p.width||'800px'
        }
        let d = p.data || {};
        this.$post(this.editUrl,d).then((response) => {
            this.$nextTick(function () {
              if(p.success != undefined)p.success(response);              
            })
            this.$refs.dialog.$children[0].resetFields();//重置表单
            this.elForm = response.data;
        })
      },
      exp(){
        //导出表格 this.$route.name获取路由名字当做文件名
        const tHeader = [];
        const filterVal = [];
        const d = this.$refs.table.columns;
        for(let i = 0; i < d.length; i++){
            if (d[i].property=='address') continue;
            if(!this.isEmpty(d[i].property))tHeader.push(d[i].label)
            if(!this.isEmpty(d[i].property))filterVal.push(d[i].property)
        }
        require.ensure([], () => {
            this.downLoading=true;
            const { export_json_to_excel } = require('../../vendor/Export2Excel');
            let d = Object.assign({
              page : 1,
            }, this.tool);
            this.$post(this.loadUrl,d).then((response) => {
               if (response.success) {
    							const list = response.data.rows;
    		          const expData = list.map(v => filterVal.map(j => v[j]));
                  export_json_to_excel(tHeader, expData, this.tag);
                  setTimeout(()=>{
                    this.downLoading=false;
                  },3000)
    						} else {
                  this.$msg.message(response.msg,{type:'error'})
    						}
            })
                
        })
      },
      save(params){
        var p = params || {};
        let d = this.elForm;
        this.btnLoading = true;
        this.$refs.dialog.$children[0].validate((valid) => {
          if (valid) {
            //验证通过
            this.$post(this.action,d).then((response) => {
                if (response.success) {
                  this.$nextTick(function () {
                    //if(p.success != undefined)p.success(response);     
                    this.$emit("formSuccess",response)   
                    this.btnLoading =false;      
                  })
                  this.load();
                  this.dialogData.show=false
                  this.$msg.message(response.msg)
								} else {
                   this.btnLoading = false;
									this.$msg.message(response.msg,{type:'error'}) 
								}
            })
          }else{
            this.btnLoading = false;
          }
        });
      },
      currentChange(page){
          this.page = page;
          this.load();
      },
      handleCurrentChange(val){
        //获取单行数据
        if(val&&this.type=='index')this.$emit('getline', val);
      },
      handleSelectionChange(val){
        //获取多行数据
        if(val&&this.type=='selection')this.$emit('getline', val);
      },
      indexMethod(index) {
        //修改索引
        return (this.page-1)*this.rows+(index+1)
      },
      spanMethod({ row, column, rowIndex, columnIndex }) {
             if(this.merge=='')return;
            let n = 1;
                for(let i = rowIndex; i < this.$refs.table.columns.length - 1; i++){
                  if(this.$refs.table.columns[i].property==this.merge){n=i;break;}
                }
             if (columnIndex === n) {
                  if(rowIndex > 0 && row[this.merge] === this.tableData[rowIndex - 1][this.merge]){
                    return {
                      rowspan: 0,
                      colspan: 0
                    };
                  }else{
                    let rows = 1;
                    for(let i = rowIndex; i < this.tableData.length - 1; i++){
                      if (row[this.merge]=== this.tableData[i + 1][this.merge]) {
                        rows++;
                      }
                    }
                    return {
                      rowspan: rows,
                      colspan: 1
                    };
                  }
              }    
      },
      ///[{'state','1','warning-row'}]
      tableRowClassName({row, rowIndex}) {
        if(this.rowClass==''||row[this.rowClass]==0)return ''
        if(row[this.rowClass]==1)return 'error-row';
        if(row[this.rowClass]==2)return 'warning-row';
        if(row[this.rowClass]==3)return 'error-row';
      }
    },
    mounted () {
        if(this.autoLoad)this.load(); 
    },
  }
</script>

<style>
#zxtable{width: 100%;display: flex; flex-direction: column}

#zxtable .bar{
  display: flex; 
  flex-direction: row; align-items: center; margin-bottom: 5px;
}
#zxtable .bar .tool{display: flex; flex: 1; margin-right: 10px;align-items: center;}

#zxtable .bar .tool .el-input{max-width:200px; margin-right: 10px;}
</style>
