# typeorm

## install

```sh
pnpm i -save @nestjs/typeorm typeorm mysql
```

generate a entity

```sh
nest g class coffees/entities/Flavar.entity --no-spec
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
@Entity() export class Coffe {
	// ...
	@JoinTable()
	@ManyToMany()
	flavors: string[] }
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

