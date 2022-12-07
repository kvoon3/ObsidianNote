将一个一维的 obs$ 转化为 二维的 obs$，以达到分组的目的

例子

对一组对象 obs 进行分组

1. 将一维的 obs 分成二维的 obs `obs( obs(id=1), obs(id=2), obs(id=3) )`
2. 对其中的每一个 obs 进行映射，将 obs 转换为数组
	1. mergeMap - 去 obs
	2. reduce - 组合数据为一个数组 `[]`


```ts
const obs$ = of(
	{ id: 1, name: "JavaScript" },
	{ id: 2, name: "Parcel" },
	{ id: 2, name: "webpack" },
	{ id: 1, name: "TypeScript" },
	{ id: 3, name: "TSLint" }
).pipe(
	// obs -> obs( obs(id=1), obs(id=2), obs(id=3) )
	groupBy((item) => item.id),
	// obs( obs(), obs(), obs() ) -> obs( [], [], [] )
	mergeMap((group$) => group$.pipe(reduce((acc, cur) => [...acc, cur], [])))
);

obs$.subscribe(console.log);
/**
 * results 
 * 1. [] id=1
 * 2. [] id=2
 * 3. [] id=3
 */
```