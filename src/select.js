const { User, Blog } = require('./model');

!(async function() {
  
  const zhangsan = await User.findOne({
    where: {
      userName: 'zhangsan',
      password: '123456'
    }
  })
  // console.log('z', zhangsan.dataValues)
  
  // 查找特定列
  const zhangsanName = await User.findOne({
    attributes: ['userName', 'nickName'],
    where: {
      userName: 'zhangsan',
      password: '123456'
    }
  })
  // console.log('z', zhangsanName.dataValues)

  // 查询一个列表
  const zhangsanBlogList = await Blog.findAll({
    attributes: ['title', 'content'],
    where: {
      userId: 1
    },
    order: [ // 排序规则
      ['id', 'desc']
    ]
  })
  // console.log('zhangsanBlogList', zhangsanBlogList.map(val => val.dataValues))

  // 分页 
  const pageList = await Blog.findAll({
    limit: 2, // 查询两条
    offset: 1, // 跳过1条
    order: [ // 排序规则
      ['id', 'desc']
    ]
  })
  // console.log('pageList', pageList.map(val => val.dataValues))
  
  // 查询总数
  const pageListAndCount = await Blog.findAndCountAll({
    limit: 2, // 查询两条
    offset: 1, // 跳过1条
    order: [ // 排序规则
      ['id', 'desc']
    ]
  })
  // console.log('总数', pageListAndCount.count)
  // console.log('list', pageListAndCount.rows.map(val => val.dataValues))


  // 连表查询1
  const blogListWithUser = await Blog.findAndCountAll({
    order: [ // 排序规则
      ['id', 'desc']
    ],
    include: [ // 连表查
      {
        model: User,
        attributes: ['nickName' ],
        where: {
          userName: 'zhangsan'
        }
      }
    ],
  })
  // console.log('blogListWithUser', blogListWithUser.count, blogListWithUser.rows.map(blog => {
  //   const blogVal = blog.dataValues
  //   blogVal.user = blog.user.dataValues
  //   return blogVal
  // }))


   const userWithBlog = await User.findAndCountAll({
     attributes: ['nickName', 'userName'],
     include: [
       {
         model: Blog
       }
     ]
   })

   console.log('userWithBlog', userWithBlog.count,
    userWithBlog.rows.map(user => {
     const userVal = user.dataValues
     userVal.blogs = userVal.blogs.map(val => val.dataValues)
      return userVal
    })
   )


  process.exit()
})()