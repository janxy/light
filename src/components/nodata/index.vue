<template>
    <div class="nonoData">

        <div  class="img cneter" >
             
            <img src="~@/../static/nothing.png" :width="width">
        </div>

    </div>
</template>

<script>
  export default {
    props: {
     	 
      width:{
        	type: String,
      		default: '218'
      },
      
      
  	},
    data() {
      return {
        
      }
    },
    methods: {
       
    },
    mounted () {
        
    },
  }
</script>
<style  scoped>
.img{ display: flex; flex: 1; justify-content: center; align-items: center; flex-direction: column}
.nonoData{ position: absolute; left: 0; top: 0; bottom: 0; right: 0; display: flex;}
</style>