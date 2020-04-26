const Sequelize = require('sequelize');
const seq = require('./seq');


// 创建User 模型 表名为users
const User = seq.define('user', {
  // id会自动创建，并设为主键， 自增
  userName: {
    type: Sequelize.STRING, // 对应数据库 varchar(255)
    comment: '用户名',
    allowNull: false
  },
  passWord: {
    type: Sequelize.STRING,
    comment: '密码',
    allowNull: false
  },
  nickName: {
    type: Sequelize.STRING,
    comment: '昵称',
  }
})

// 创建Blog 模型 表名为blogs
const Blog = seq.define('blog', {
  // id会自动创建，并设为主键， 自增
  title: {
    type: Sequelize.STRING, // 对应数据库 varchar(255)
    comment: '标题',
    allowNull: false
  },
  content: {
    type: Sequelize.TEXT,
    comment: '内容',
    allowNull: false
  },
  userId: {
    type: Sequelize.INTEGER, // int类型
    comment: '用户id',
    allowNull: false
  }
})

// 外键关联
Blog.belongsTo(User, {
  // 创建外键 Blog.userId => User.id
  foreignKey: 'userId'
})

User.hasMany(Blog, {
  // 创建外键 Blog.userId => User.id
  foreignKey: 'userId'
})

// Blog.belongsTo(User)

module.exports = {
  User,
  Blog
}