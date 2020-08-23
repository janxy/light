
export default {
	install(Vue, options) {
		Vue.prototype.isEmpty = function (s){
			return s == null || typeof s == undefined || s == "" || s.length == 0;
		},
		Vue.prototype.arrayGroup = function (array, subGroupLength){
			let index = 0;
			let newArray = [];
			while(index < array.length) {
				newArray.push(array.slice(index, index += subGroupLength));
			}
			return newArray;
		},
		Vue.prototype.getNowFormatDate = function (){
			let date = new Date();
			let seperator1 = "-";
			let year = date.getFullYear();
			let month = date.getMonth() + 1;
			let strDate = date.getDate();
			if (month >= 1 && month <= 9) {
				month = "0" + month;
			}
			if (strDate >= 0 && strDate <= 9) {
				strDate = "0" + strDate;
			}
			let currentdate = year + seperator1 + month + seperator1 + strDate;
			return currentdate;
		},
		Vue.prototype.getWeekDay = function (){
			let mydate=new Date();
			let myddy=mydate.getDay();//获取存储当前日期
			let weekday=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
			return weekday[myddy];
		},
		Vue.prototype.getNowTime = function (){
          var now=new Date(); 
          var hour=now.getHours();
           if(hour<10){
              hour="0"+hour;
           }
          var minute=now.getMinutes();
           if(minute<10){
              minute="0"+minute;
           } 
           var second=now.getSeconds();
            if(second<10){
              second="0"+second;
           }
           var nowstr=hour+":"+minute+":"+second;
           return nowstr;
		}
		
	}
}