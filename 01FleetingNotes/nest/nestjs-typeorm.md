# typeorm

## install

```sh
pnpm i -save @nestjs/typeorm typeorm mysql
```

generate a entity

```sh
nest g class coffees/entities/Flavar.entity --no-spec
```

## DTO

class 类型指定

1. `@Type` 指定
2. 配置

配置

```ts
main.ts
new ValidationPipe({
	transformOptions: {
		enableImplicitConversion: true
	}
})
```



## CRUD

```ts
// books.controller.ts update操作
@Patch(':id')
async update(@Param('id') id, @Body() input: UpdateBooksDTO) {
	const book = await this.bookRepository.fineOne(id);
	bookRepository.merge(user, updateBooksDTO);
	return await this.repository.save(book)
}
```

## relation

```ts
@Entity() export class Coffee {
	// ...
	@JoinTable()
	@ManyToMany(type => Flavor, (flavor) => flavor.coffees)
	flavors: Flavor[]
}
```

### Retrieve Entities with their relation


coffees service

```ts
async findOne(id: number) {
	const coffee = await this.coffeeRepo.findOne({
		where: { id },
		relation: ['flavors']
	})
}
```

### 级联创建和更新


coffee service

```ts
@Entity()
export class Coffee {
	constructor(
		@InjectRepository(Coffee)
		private readonly coffeeRepe: Repository<Coffee>
		@InjectRepository(Flavor)
		private readonly flavorRepe: Repository<Flavor>
	){}

	// 1 create
	async create(createCoffeeDto: CreateCoffeeDto) {
		const flavors = await Promise.all(
			createCoffeeDTO.flavors.map(name => this.preloadFlavorByName(name))
		)
		// create()
		/*{
			...createCoffeeDto,
			flavors
		}*/
	}

	// 2 update
	async update(id: number, updateCoffeeDto: UpdateCoffeeDto) {
		// 预加载 flavor 
		cosnt flavors = 
			updateCoffeeDto.flavor && 
			(await Promise.all(
				updateCoffeeDto.flavor.map(name => this.preloadFlavorByName(name))
			))
		// TODO: 这段代码的含义
		const coffee = await this.coffeeRepo.preload({
				id,
				...updateCoffeeDto,
				flavors,
		})

		if(!coffee) {
			throw new NotFoundException(`coffee`,id, `not found`)
		}
		return this.coffeeRepo.save(coffee);
	}

	private async preloadFlavorByName(name: string): Promise<Flavor>{
		const theFlavor = await this.flavorRepo.findOne({
			where: { name }
		})
		if(theFlavor) return theFlavor
		else return this.flavorRepo.create({ name })
	}
}
```

自动级联

typeorm cascading options ---> true

## 分页
## 事务

```sh
nest g class events/entities/event.entity.ts --no-spec
```

```ts
@Entity()
export class Event() {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	type: string

	@Column()
	name: string
		
	@Column()
	name: string

	@Column('json')
	payload: Record<string, any>
}
```


```sh
nest g class ....../pagination-query.dto.ts
```

step1: dto

```ts
export class PaginationQueryDto {
	@IsOptional()
	@IsPositive()
	// @Type(() => Number)
	limit: number;

	@IsOptional()
	@IsPositive()
	// @Type(() => Number)
	offset: number;
}
```

step2: database

```ts
async findAll(paginationQuery: PaginationQueryDto) {
	const { limit, offset } = paginationQuery
	return await this.coffeeRepo.find({
		relation: ['flavors'],
		skip: offset,
		take: limit,
	})
}
```



# 验证

1. global validationPipe
2. group validationPipe（不能和全局的并存）

```ts
// group
async update (
	@Param('id') id,
	@Body(new ValidationPipe({ groups: ['update']})) input: UpdateBookDTO
) {}
```

