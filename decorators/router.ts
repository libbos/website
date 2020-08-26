// 这里统一引入oak框架
import { Application, Router } from '../deps.ts';
// 这里是TS的枚举
enum MethodType {
  GET='GET',
  POST='POST',
  PUT='PUT',
  DELETE='DELETE'
}

export const app: Application = new Application();
export const router: Router  = new Router();
const prefix: string = '/api'

const routeMap: Map<{target: any, method: string, path: string}, Function | Function[]> = new Map()

export function Controller (root: string): Function {
  return (target: any) => {
    for (let [conf, controller] of routeMap) {
      let path = prefix + (root === '/' ? conf.path : `${root}${conf.path}`)
      let controllers = Array.isArray(controller) ? controller : [controller]
      controllers.forEach((controller) => (router as any)[conf.method.toLowerCase()](path, controller))
    }
  }
}
// 这里就是http请求工厂函数，传入的type就是http的get、post等
function httpMethodFactory (type: MethodType) {
  // path是类方法的路径，如：@Get('getbook')，这个path就是指getbook。
  // 类方法修饰器传入三个参数，target是方法本身，key是属性名
  return (path: string) => (target: any, key: string, descriptor: any) => {
    // 第三个参数descriptor我们这里不用，但是还是讲解一下，对象的值如下：
    // {
    //   value: specifiedFunction,
    //   enumerable: false,
    //   configurable: true,
    //   writable: true
    // };
    (routeMap as any).set({
      target: target.constructor,
      method: type,
      path: path,
    }, 
    target[key])
  }
}

export const Get = httpMethodFactory(MethodType.GET)
export const Post = httpMethodFactory(MethodType.POST)
export const Delete = httpMethodFactory(MethodType.DELETE)
export const Put = httpMethodFactory(MethodType.PUT)
