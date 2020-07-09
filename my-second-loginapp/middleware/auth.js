import Cokkies from 'universal-cookie'
import Cookies from 'universal-cookie'

export default ({req, route, redirect}) => {
  console.log(route.path)
  if(['/'].includes(route.path)) {
    return
  }
  const cookie = req ? new Cookies(req.headers.cookie) : new Cookies()
  const credential = cookie.get('credential')

  if(credential && route.path === '/login') {
    return redirect('/')
  }
  if(!credential && route.path !== '/login') {
    return redirect('/login')
  }
  // if(process.browser) {
  //   console.log('console.log() on browser')
  // } else {
  //   console.log('console.log() on SSR server')
  // }
}