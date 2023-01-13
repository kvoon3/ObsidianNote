## 方式一

写声明文件

`root/types/index.d.ts`

```ts
// 地图
declare var aimap:any

// 坐标转换
declare var coordtransform:{
  bd09togcj02 : (...args:any[]) => any,
  gcj02tobd09 : (...args:any[]) => any,
  gcj02towgs84 : (...args:any[]) => any,
  wgs84togcj02 : (...args:any[]) => any
}

// 桥接方法
declare function finishActivity():never
declare function openTrackSettingActivity(hardware_userid:number):never
declare function autoNavigation(to:{longitude:number, latitude:number}):never
```

## 方式二

在普通 `.ts` 文件中写声明语句，并通过模块的形式引入

`anywhere/types/xxx.ts`

```ts
export {} // 表示该文件为模块
declare global{
  interface Window {
    aimap:any,
    coordtransform:{
      bd09togcj02 : (...args:any[]) => any,
      gcj02tobd09 : (...args:any[]) => any,
      gcj02towgs84 : (...args:any[]) => any,
      wgs84togcj02 : (...args:any[]) => any
    }
    finishActivity:() => never,
    openTrackSettingActivity:(hardware_userid:number) => never,
    autoNavigation: (to:{longitude:number, latitude:number}) => never
  }
}
```