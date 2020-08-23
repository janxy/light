<template>
  <div class="message-box">
    <el-dialog :title.sync="title" :visible.sync="visible" @close="destroy" :width.sync="width" @open="open"  :ref="url" :close-on-click-modal="false" :fullscreen.sync="fullscreen" :top.sync="top">
      <component :is="url" @close="cancel" @submit="confirm" :style="'height:'+height"></component>
    </el-dialog>
  </div>
</template>
<script>
import Vue from "vue";
export default {
  components: {},
  props: {
    title: {
      type: String,
      default: "标题"
    },
    path: {
      type: String,
      default: ""
    },
    width: {
      type: String,
      default: "600"
    },
    height: {
      type: String,
      default: "500px"
    },
    params: {
    	
    },
    fullscreen:{
      type: Boolean,
      default: false
    },
    top: {
      type: String,
      default: "15vh"
    },
  },
  created: function() {
	
  },
  data() {
    return {
      visible: false,
      resolve: "",
      reject: "",
      promise: "",
      url: ""
    };
  },
  methods: {
    open() {
    	var componentId = "c" + new Date().getTime();
    	this.url = componentId;
    	var url = this.path;
		Vue.component(componentId, function (resolve, reject) {
         	require.ensure([], (require) => {
          		resolve(require.context('@', true, /\.vue$/)(`./${url}.vue`))
        	})
      	})
      	this.dialogs.push(this);
    },
    // 弹出messageBox,并创建promise对象
    showMsgBox: function() {
      	this.visible = true;
      	this.promise = new Promise((resolve, reject) => {
    		this.resolve = resolve;
        	this.reject = reject;
      	});
      	// 返回promise对象
      	return this.promise;
    },
    // 确定,将promise断定为resolve状态
    confirm: function(data) {
      	this.visible = false;
      	this.resolve(JSON.stringify(data));
    },
    // 取消,将promise断定为reject状态
    cancel: function() {
      	this.visible = false;
      	this.reject("cancel");
    },
    destroy: function() {
		    setTimeout(() => {
            this.dialogs.pop();
            this.$destroy();
            this.reject("cancel");
            document.body.removeChild(this.$el);
      	}, 300);
    }
  }
};
</script>
<style>
</style>

