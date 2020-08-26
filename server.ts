// 这里的loadControllers先不管，彩蛋会讲
import { app, router, loadControllers } from './decorators/index.ts'

class Server {
  constructor () {
    this.init()
  }

  async init () {
    // 这里就是导入所有的controller，这里的controller是控制层文件夹的名称
    await loadControllers('controller');
    app.use(router.routes());
    app.use(router.allowedMethods());
    this.listen()
  }

  async listen () {
    console.info("--- server start successful ---")
    await app.listen({ port: 8000 });
    // setTimeout(async () => {
    //   await app.listen({ port: 8000 })
    // }, 1);
  }
}
new Server()