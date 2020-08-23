
export default {
	install(Vue, options) {
		Vue.prototype.dialogs = [];
		Vue.prototype.dialog = {
			open : function(url, params,fn) {
				//var fn = fn;
				var p = params || {};
				Vue.prototype.$dialog.showMsgBox({
					path: url,
					title: p.title || '编辑',
					width: p.width || '800px',
					height: p.height || '500px',
					params : p.data || {},
					fullscreen : p.fullscreen || false,
					top : p.top || '15vh'
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
				var length = vue.dialogs.length;
				if (length > 0) {
					var d = vue.dialogs[length - 1];
					d.confirm(data);
				}
			},
			close : function(count) {
				var vue = Vue.prototype;
				var length = vue.dialogs.length;
				if (length > 0) {
					var dialogCount = count || 1;
					for (var i = 0; i < dialogCount; i++) {
						var d = vue.dialogs[length - 1 - i];
						d.cancel();
					}
				}
			}
		}
	}
}