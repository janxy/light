import msgboxVue from './index.vue';

// 定义插件对象
const MessageBox = {};
// vue的install方法，用于定义vue插件
MessageBox.install = function(Vue, options) {
	const MessageBoxInstance = Vue.extend(msgboxVue);
	let currentMsg;
	const initInstance = () => {
		// 实例化vue实例
		currentMsg = new MessageBoxInstance();
		let msgBoxEl = currentMsg.$mount().$el;
		document.body.appendChild(msgBoxEl);
	};
	// 在Vue的原型上添加实例方法，以全局调用
	Vue.prototype.$drawer = {
		showMsgBox (options,fn) {
			initInstance();
			Object.assign(currentMsg, options);
			return currentMsg.showMsgBox()
				.then(val => {
					currentMsg = null;
					return Promise.resolve(val);
				})
				.catch(err => {
					currentMsg = null;
					if (fn != undefined) {
						fn();
					}
					return Promise.reject(err);
				});
		}
	};
};
export default MessageBox;