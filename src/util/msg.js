export default {
	install(Vue, options) {
		Vue.prototype.$msg = {

            message : function(msg,params) {
                var p = params || {};
				Vue.prototype.$message({
					message: msg,
					showClose: p.showClose||false,
                    type: p.type||'success',
                    duration: p.duration||'2000'
		        });
			},
            


		};
	}
}