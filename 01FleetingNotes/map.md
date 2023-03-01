```ts
// setup() {
  //   // 页面 DOM - 地图容器
  //   const mapContainer = ref(null)
  //   onMounted(() => {
    
  //     const tryLoadJS = pipe<string[], Promise<string>, Promise<string>, Promise<string>>(
  //       loadJS,
  //       andThen((_) => Promise.resolve("地图加载成功")),
  //         // Notify({ type: "danger", message: "地图加载失败" })
  //       otherwise((err) => Promise.reject('error 加载地图组件失败'+err))
  //     )

  //     const safeLoadAimap = ifElse(
  //       checkJS(window),
  //       ():Promise<string> => Promise.reject("地图 script 已加载，不再重复加载"),
  //       () => tryLoadJS('https://location-dev.newayz.com/aimap-gl-js/v2.4.0/aimap-gl.js')
  //     )
  //     //safeLoadAimap('aimap');

  //     // const safeInitMap = pipe(
  //     //   safeLoadAimap,
  //     //   andThen(() => initMap(mapContainer)),
  //     //   otherwise((err:string) => Notify({ type: "danger", message: `${err}` }))
  //     // )

  //     function safeInitMap(name:string){
  //       safeLoadAimap(name)
  //       .then(
  //         () => {
  //           baseSet()
  //           initMap(mapContainer.value)
  //         },
  //         (err) => {
  //           Notify({ type: "danger", message: `${err}` })
  //         }
  //       )
  //     }

  //     const themap = safeInitMap('aimap')
  //     console.log("", themap)
  //   })
  //   return {
  //     mapContainer
  //   }
  // }
```

