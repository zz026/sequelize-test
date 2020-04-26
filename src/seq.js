const Sequelize = require('sequelize');

const conf = {
  'dialect': 'mysql', // 数据库使用mysql
  'host': 'localhost', // 数据库服务器ip
  'port': 3306, // 数据库服务器端口
}

// 线上环境使用连接池
conf.pool = {
  max: 5,
  min: 0,
  idle: 1000 * 10 // 若果有一个进程（连接池）10s内无使用，则被释放
}

const seq = new Sequelize(
  'weibo2', // 数据库名
  'root', // 用户名
  '989898', // 用户密码
  conf
);

module.exports = seq;

// 测试连接
// seq.authenticate().then(() => {
//   console.log('authenticate ok!')
// }).catch(e => {
//   console.log('authenticate err', e)
// })