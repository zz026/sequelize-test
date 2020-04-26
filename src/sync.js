const seq = require('./seq');
const model = require('./model');

// 测试连接
seq.authenticate().then(() => {
  console.log('authenticate ok!')
}).catch(e => {
  console.log('authenticate err', e)
})

seq.sync({ force: true }).then(() => {
  console.log('sync ok!')
  process.exit()
})