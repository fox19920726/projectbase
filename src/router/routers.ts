import components from './components'

/* 
* show设置为false，在菜单里是看不到的
* 但是我路由设计的时候还是渲染了的，所以通过地址栏输入是可以访问该路由的
* 这里的话其实不可以自动化，因为在正式的业务场景下
* 有些页面是不需要显示的，甚至有些根本就不是路由，而且meta里的信息也需要定制化
* 这里自动化的原因是，这里业务场景比较特殊，不存在上面说的问题
*/
async function generatePaths() {
  const paths = []
  const data = await components

  for (const i in data) {
    paths.push({
      'path': `/${i === 'Dashbord' ? '' : i}`,
      'component': i,
      'show': true,
      'meta': { 'title': i }
    })
  }
  return paths
}

export default generatePaths()
