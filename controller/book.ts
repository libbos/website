import { Controller, Get } from "../decorators/index.ts";
// 这里我们假装是业务层过来的数据
const bookService = new Map<string, any>();
bookService.set("1", {
  id: "1",
  title: "听飞狐聊deno",
  author: "飞狐",
});

// 这里是类的装饰器
@Controller('/book')
export default class BookController {
  // 这里就是类方法修饰器
  @Get('/getbook')
  getbook (context: any) {
    context.response.body = Array.from(bookService.values());
  }
  // 这里就是类方法修饰器
  @Get('/getbookById')
  getbookById (context: any) {
    if (context.params && context.params.id && bookService.has(context.params.id)) {
      context.response.body = bookService.get(context.params.id);
    }
  }
}