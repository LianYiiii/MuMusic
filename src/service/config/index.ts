// 判断开发环境和生产环境

let BASE_URL = '';

if (process.env.NODE_ENV === 'development') {
    // BASE_URL = '开发环境url';
    BASE_URL = 'http://localhost:3000/';
} else if (process.env.NODE_ENV === 'production') {
    // BASE_URL = '生产环境url';
    BASE_URL = 'http://localhost:3000/';
} else {
    // 测试环境
    BASE_URL = 'http://localhost:3000/';
}

console.log(process.env.REACT_APP_BASE_URL);


export { BASE_URL }
export const TIME_OUT = 1000;