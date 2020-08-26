### 使用插件/包
1. HTTP server framework: https://deno.land/x/oak/mod.ts

2. Watcher files change: https://deno.land/x/denon@2.3.2/denon.ts
> install method:\
> ```$ deno install --allow-read --allow-run --allow-write --allow-net -f -q --unstable https://deno.land/x/denon@2.3.2/denon.ts```
> 
> usage:\
> ```$ denon run app.ts```
> 
> run scripts declared in config:\
> ```$ denon [script name]```

3. Configuration 
> to create a basic configuration in the root directory:\
> ```$ denon --init```
> 
> create a basic ```denon.json``` file:
> ```
> {
>   "scripts": {
>     "start": "app.js"
>   }
> }
> ```
> ```$ denon start```

4. Start server:
> ```
> {
>   "scripts": {
>     "start": {
>       "cmd": "deno run main.ts"
>     }
>   }
> }
> ```
> ```$ denon start cmd```

### 版本
1. deno v1.3.0
2. oak v6.0.2
3. denon @2.3.2