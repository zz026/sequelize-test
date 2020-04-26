const { User, Blog } = require('./model');

!(async function() {
  
  // const delBlog = await Blog.destroy({
  //     where: {
  //       id: 4
  //     }
  // })
  // console.log('delBlog', delBlog) // 1


  const delUser = await User.destroy({
    where: {
      id: 1
    }
  })
  console.log('delUser', delUser)

})()