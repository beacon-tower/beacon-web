import Mock from 'mockjs';

console.log("中间件********");

export default Mock.mock('/subscriptions/recommended', {
  "data|10-100": [
    {
      "id":'@id',
      "followed|1": true,
      "name": '@first',
      "avatar_url": "@mock=@IMG(200x200)",
      "art|1-100": 10,
      "wordNumber|1-1500": 10,
      "followNumber|1-10000": 1000,
      "titleList|1-10" :[
        {
          "id":'@id',
          "title": '@title',
          "category": '科技',
          "date": '@date("yyyy-MM-dd")',
          "like": 112,
          "fabulous": 222
        }
      ]
    }
  ]
});

