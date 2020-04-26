const { Blog } = require('./model');

!(async function() {


  const updateRes = await Blog.update({
      title: '标题变变变'
   }, {
      where: {
        title: '%标题%'
      }
   })
   console.log('updateRes', updateRes) // [1]
})()