export function debounce(fun, delay) {
	let timeoutId = null
	return function(...args) {
		// 如果在delay时间之内再次调用函数,就重置定时器,重新计时.如果定时器存在,就清空定时器,然后重新设置.直到一段时间没有操纵就执行函数
		if (timeoutId) {
			clearTimeout(timeoutId)
		}
		timeoutId = setTimeout(() => {
			fun.apply(this, args)
		}, delay);
		// timeoutId = setTimeout(fun, delay);
	}
}

export function formatDate(date, fmt) {

  if (/(y+)/.test(fmt)) {

    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));

  }

  let o = {

    'M+': date.getMonth() + 1,

    'd+': date.getDate(),

    'h+': date.getHours(),

    'm+': date.getMinutes(),

    's+': date.getSeconds()

  };

  for (let k in o) {

    if (new RegExp(`(${k})`).test(fmt)) {

      let str = o[k] + '';

      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));

    }

  }

  return fmt;

};



function padLeftZero (str) {

  return ('00' + str).substr(str.length);

};