import Mock from 'mockjs';

console.log("中间件********");

export default Mock.mock('/nav', {
  "data|10": [
    {
      "id|2562-3215": '15222',
      "title": '科技'
    }
  ]
});
