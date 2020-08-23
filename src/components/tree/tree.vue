<template>
    <div>
        <div class="title">{{title}}</div>
        <el-tree class="filter-tree" :data="treeData" v-loading="treeLoading" :default-checked-keys="defaultCheck" :check-strictly="true" :check-on-click-node="check_on_click_node" :expand-on-click-node="expand_on_click_node" :draggable="draggable" :show-checkbox="show_checkbox" :highlight-current="true" :default-expand-all="default_expand_all" node-key="id" @check="check" ref="tree" :render-content="renderContent" @node-click="node_click" @current-change="current_change" :lazy="lazy" :load="loadLazy" :default-expanded-keys=default_expanded_keys>
        </el-tree>
    </div>
</template>

<script>
export default {
  name: "myTree",

  props: {
    //类型：默认单位树。
    treeType: {
      type: String,
      default: "orgTree"
    },

    //向后台传递的参数
    params: {},
    //默认勾选的节点
    actives: {},
    //URL自定义数据地址
    url: {
      type: String
    },
    title: {
      type: String,
      default: ""
    },
    //是否在点击节点的时候展开或者收缩节点
    expand_on_click_node: {
      type: Boolean,
      default: false
    },
    //是否开启拖拽节点功能
    draggable: {
      type: Boolean,
      default: false
    },
    //是否显示复选框
    show_checkbox: {
      type: Boolean,
      default: false
    },
    show_icon: {
      type: Boolean,
      default: true
    },
    //是否默认选择根节点
    defaultSelect: {
      type: Boolean,
      default: true
    },
    //是否默认展开所有节点
    default_expand_all: {
      type: Boolean,
      default: false
    },
    //是否在点击节点的时候选中节点，默认值为 false，即只有在点击复选框时才会选中节点。
    check_on_click_node: {
      type: Boolean,
      default: false
    },
    lazy:{
        type: Boolean,
        default: false
    }
  },
    /**------------------------------后台可选参数说明-------------------------------------------------------------------
     * 1.defaultCheck， 默认选择的节点ID。 类型List<String>  优先级低于actives.
     * 2.allowClicks,   是否允许执行点击事件 ，类型Boolean  位于node.data.data中
     * 3.clicksMsg,   点击节点时弹出的信息 ，类型String.一般配合allowClicks 为false的情况下使用，位于node.data.data中
     *
     * **/
  /**------------------------------参数分割线-------------------------------------------------------------------**/
  data: function() {
    return {
      treeData: [],
      treeLoading: true,
      urlValue: "",
      returnData: [],
      defaultCheck: [],
      default_expanded_keys:[] //默认展开的节点
    };
  },
  mounted: function() {
    if (this.url == null) {
      switch (this.treeType) {
        case "orgTree":
          this.urlValue = "org/getOrgTree";
          break;
        default:
          this.urlValue = this.url;
      }
    } else {
      this.urlValue = this.url;
    }
    this.getTreeData(this.urlValue);

  },


  methods: {
    initTreeClick(){
      var that = this;
      that.$nextTick(() =>{
            //如果这个树没有数据，则不设置默认的点击样式
              if(this.isEmpty(that.treeData)){
                return;
              }
              //设置默认选择样式事件
              if (that.defaultSelect) {
                if (this.isEmpty(that.defaultCheck)) {
                  that.$refs.tree.setCheckedKeys([that.treeData[0].id]);
                  that.node_click(null,that.$refs.tree.getNode(that.treeData[0].id), null);
                } else {
                  that.$refs.tree.setCheckedKeys(that.defaultCheck);
                  that.node_click(null,that.$refs.tree.getNode(that.defaultCheck[0]), null);
                }
              }
          })

    },
    getMousePos(event) {
      var e = event || window.event;
      var scrollX =
        document.documentElement.scrollLeft || document.body.scrollLeft;
      var scrollY =
        document.documentElement.scrollTop || document.body.scrollTop;
      var x = e.pageX || e.clientX + scrollX;
      var y = e.pageY || e.clientY + scrollY;
      return { x: x, y: y };
    },
    getTreeData(url) {
       var that = this;
       this.$post(url, this.params)
        .then((data) => {
            if(data.success){
              
              that.treeData = data.data;
              that.defaultCheck = data.defaultCheck;
              if (!this.isEmpty(that.actives)) {
                that.defaultCheck = that.actives;
                setTimeout(function(){
                    that.default_expanded_keys = that.actives;   //actives优先级最高，选中actives时默认展开所选节点
                },200)
              }
              if(!this.isEmpty(data.default_expanded_keys)&&this.isEmpty(that.actives)){
                  that.default_expanded_keys = data.default_expanded_keys;
              }
              that.treeLoading = false;
              that.returnData = data;
              that.initTree(that.returnData);


              that.initTreeClick();
            }
        })


          
          //加入文字提示框
          // setTimeout(() => {
          //   var trees = document.querySelector(".el-tree");
          //   var divs = document.querySelectorAll(".custom-tree-node");
          //   trees.onmouseout = function(e) {
          //     document.getElementById("treetip").style.display = "none"; 
          //   };
          //   for (let i = 0; i < divs.length; ++i) {
          //     divs[i].onmouseover = function(e) {
          //       console.log('onmouseover')
          //       document.getElementById("treetip").innerHTML =
          //         divs[i].innerHTML;
          //       document.getElementById("treetip").style.top =
          //         that.getMousePos(e).y + 10 + "px";
          //       document.getElementById("treetip").style.left =
          //         that.getMousePos(e).x + 10 + "px";
          //       document.getElementById("treetip").style.display = "block";
          //     }
          //     divs[i].onmouseout = function(e) {
          //       console.log('onmouseout')
          //       document.getElementById("treetip").style.display = "none"; 
          //     };
          //   }
          // }, 100);
      
    },

    //设置树节点图标
    renderContent(h, { node, data, store }) {
      var show_icon_true = (
        <span class="custom-tree-node" style="font-size:12px;">
          <img src={data.icon} width="16" style="margin-top:5px;" /> {data.label}
        </span>
      );
      var show_icon_false = (
        <span class="custom-tree-node" style="font-size:12px;">
          {data.label}
        </span>
      );
      if (this.show_icon) {
        if (!this.isEmpty(data.icon)) {
            return show_icon_true;
        }
      }
      return show_icon_false;
    },

    /**-----------------------------事件分割线-------------------------------------------------------------------**/
    //节点点击事件
    node_click: function(obj, node, comp) {
             //取消默认选择样式
      if (this.defaultSelect) {
        if (this.isEmpty(this.defaultCheck)) {
          if (node.data.id != this.treeData[0].id) {
            this.$refs.tree.setChecked(this.treeData[0].id, false);
          }
        } else {
          if (node.data.id != this.defaultCheck[0]) {
            this.$refs.tree.setChecked(this.defaultCheck[0], false);
          }
        }
      }
      if(!this.isEmpty(node.data.data)){
          let allowClicks = true;
          if(typeof node.data.data.allowClicks == "boolean"){
              allowClicks = node.data.data.allowClicks;
          }
          let clicksMsg = node.data.data.clicksMsg || "";
          if(allowClicks){
              this.$emit("click", obj, node, comp);
          }else{
              if("" != clicksMsg){
                  this.$msg.message(clicksMsg,{type:'info'});
              }
              return;
          }
      }else{
          this.$emit("click", obj, node, comp);
      }
    },
    //复选框点击事件
    check: function(obj, node) {
      this.$emit("check", obj, node);
    },
    //当前选中节点变化时触发的事件
    current_change: function(obj, node) {
      this.$emit("change", obj, node);
    },

    //树形加载完成后执行 data：包括tree内的所有数据
    initTree: function(data) {
      this.$emit("initTree", data);
    },
    loadLazy:function(node, resolve){
        if (node.data.id == 1) {
            console.log("第三级执行")
            return resolve([{ name: '333', id: 3,leaf: true}]);
        }
        console.log(node);
    },

    /**------------------------------方法分割线-------------------------------------------------------------------**/

    //设置选中一个节点ids,节点key或者对象的数组
    setCheckedKeys: function(ids, leafOnly) {
      this.$refs.tree.setCheckedKeys(ids, leafOnly);
    },
    //设置节点选中状态，1.data:节点对象Key或node  2 . boolean 类型，节点是否选中 3. boolean 类型，是否设置子节点 ，默认为 false
    setChecked: function(data, isCheck, children) {
      this.$refs.tree.setChecked(data, isCheck, children);
    },
    //设置节点勾选 接收node对象
    setCheckedNodes: function(node) {
      this.$refs.tree.setCheckedNodes(node);
    },

    //获取选择的节点
    getCurrentKey: function() {
      return this.$refs.tree.getCurrentKey();
    },
    //获取勾选的节点Id数组
    getCheckedKeys: function() {
      return this.$refs.tree.getCheckedKeys();
    },
    //获取勾选的节点node数组
    getCheckedNodes: function() {
      return this.$refs.tree.getCheckedNodes();
    },

    //获取节点//   根据 data 或者 key 拿到 Tree 组件中的 node
    getNode: function(data) {
      return this.$refs.tree.getNode(data);
    },
    // 根据 data 或者 key 删除 Tree 组件中的 node节点
    remove: function(data) {
      this.$refs.tree.remove(data);
    },
    //重新加载树，url：数据地址
    reLoad: function(url) {
      var newUrl = url;
      if (url == null) {
        newUrl = this.urlValue;
      }
      this.treeLoading = true;
      this.getTreeData(newUrl);
    },

    /**
     *为树添加一个节点
     * @param data   要增加节点的Data
     * @param refNode  添加地址节点的data
     * @param mode    添加方式  1.为 Tree 中的一个节点追加一个子节点
     *                          2.为 Tree 的一个节点的前面增加一个节点
     *                          3.为 Tree 的一个节点的后面增加一个节点
     */
    addNode: function(data, refNode, mode) {
      switch (mode) {
        case 1:
          this.$refs.tree.append(data, refNode);
          break;
        case 2:
          this.$refs.tree.insertBefore(data, refNode);
          break;
        case 3:
          this.$refs.tree.insertAfter(data, refNode);
          break;
        default:
          this.$refs.tree.append(data, refNode);
      }
    }
  }
};
</script>

<style scoped>
.title {
  background: -webkit-linear-gradient(
    right,
    #4ad9e7,
    #4ad9e7 50%,
    #00a4fd 51%,
    #4cdce7
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 16px;
}

</style>

 
