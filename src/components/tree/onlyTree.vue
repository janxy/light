<template>
  	<div>
        <div class="title">{{title}}</div>
        <el-tree  
            :data="data" 
            node-key="id" 
            default-expand-all 
            ref="ElTree" 
            :default-checked-keys="[actives]"
            @node-click="nodeClick" 
            :expand-on-click-node="false" 
            check-on-click-node 
            check-strictly>
        </el-tree>
  	</div>
</template>
<script> 
export default {
  	components: {},
  	props: {
    	data: {
      		type: Array,
      		default: []
    	},
     	actives:{},
     	title: {
      		type: String,
      		default: ""
    	}
  	},
 
  	created: function() { },
   	data() {
     	return {
     
    	};
  	},
  	methods: {
    	nodeClick(data, checked, node) {
        	this.$refs.ElTree.setCheckedNodes([]);
        	this.$refs.ElTree.setCheckedNodes([data]);
        	this.$emit('changeNode', data.id);
    	}
  	}
};
</script>

<style scoped>
.title{
  	background: -webkit-linear-gradient(right,#4ad9e7,#4ad9e7 50%,#00a4fd 51%,#4cdce7);    
  	-webkit-background-clip: text;
  	-webkit-text-fill-color: transparent; font-size: 16px;
}
</style>

