const { User, Blog } = require('./model');

!(async function() {

  // 创建用户
  // sql: insert into user(userName, `password`, nickName) values ('zhangsan', '123456', '张三')
  const zhangsan = await User.create({
    userName: 'zhangsan',
    passWord: '123456',
    nickName: '张三'
  })
  const lisi = await User.create({
    userName: 'lisi',
    passWord: '123456',
    nickName: '李四'
  })
  console.log('zhangsan', zhangsan.dataValues)
  // 创建博客
  const blog1 = await Blog.create({
    title: '标题1',
    content: '内容1',
    userId: zhangsan.dataValues.id
  })
  const blog2 = await Blog.create({
    title: '标题2',
    content: '内容2',
    userId: zhangsan.dataValues.id
  })
  const blog3 = await Blog.create({
    title: '标题3',
    content: '内容3',
    userId: lisi.dataValues.id
  })
  const blog4 = await Blog.create({
    title: '标题4',
    content: '内容4',
    userId: lisi.dataValues.id
  })
})()