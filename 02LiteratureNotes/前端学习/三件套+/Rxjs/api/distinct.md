`distinct` 会将 Observable 内重复的值过滤掉

```ts
from([1, 2, 3, 3, 2, 1, 4, 5])
	.pipe(distinct()) // 1 2 3 4 5
```

```ts
const students = [
	{ id: 1, score: 80},
	{ id: 2, score: 10},
	{ id: 1, score: 0},
	{ id: 1, score: 800},
]

from(students)
	.pipe(distinct(student => student.id))
```