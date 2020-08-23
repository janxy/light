
export default {
	install(Vue, options) {
		Vue.prototype.drawers = [];
		Vue.prototype.drawer = {
			open : function(url, params,fn) {
				//var fn = fn;
				var p = params || {};
				Vue.prototype.$drawer.showMsgBox({
					path: url,
					title: p.title || '标题',
					width: p.width || '100%',
					params : p.data || {}
				},fn).then((val) => {
					if (p.confirm != undefined) {
						p.confirm(val);
					}
				}).catch(() => {
					//fn();
					if (p.cancel != undefined) {
						p.cancel();
					}
				});
			},
			submit: function (params, count) {
				var data = params || {};
				var vue = Vue.prototype;
				var length = vue.drawers.length;
				if (length > 0) {
					var d = vue.drawers[length - 1];
					d.confirm(data);
				}
			},
			close : function(count) {
				var vue = Vue.prototype;
				var length = vue.drawers.length;
				if (length > 0) {
					var drawerCount = count || 1;
					for (var i = 0; i < drawerCount; i++) {
						var d = vue.drawers[length - 1 - i];
						d.cancel();
					}
				}
			}
		}
	}
}