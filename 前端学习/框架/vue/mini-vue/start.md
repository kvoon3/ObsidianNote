# start

```js
let currentEffect;
class Dep{
	constructor(val){
		this.effects = new Set();
		this._val = val;
	}
	get value(){
		this.depend();
		return this._val;
	}
	set value(newVal){
		this._val = newVal;
		notice();
	}
	depend(){
		 if(currentEffect){
				this.effects.add(currentEffect)
		 }
	}
	notice(){
		this.effects.forEach(effect=>{
			effect()
		})
	}
}

function effectWatch(effect){
	currentEffect = effect;
	effect();//收集依赖，调用effect()
	currentEffect = null;
}

let dep = new Dep(20);
let b;

effectWatch(()=>{
	b = dep.value + 2;
	console.log("b", b)
})

setInterval(()=>{
	dep.value += 20;
},1000)
```