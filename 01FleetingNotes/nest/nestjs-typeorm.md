# typeorm

## install

```sh
pnpm i -save @nestjs/typeorm typeorm mysql
```

```ts
// books.controller.ts update操作
@Patch(':id')
async update(@Param('id') id, @Body() input: UpdateBooksDTO) {
	const book = await this.bookRepository.fineOne(id);
	bookRepository.merge(user, updateBooksDTO);
	return await this.repository.save(book)
}
```

## Practice

```ts
@Get('/practive')
async practive() {
	return await this.repo.find({
		select: ['id', 'when'],
		where: [
			{
				id: MoreThan(3),
				time: MoreThan(new Date('2021....'))
			},
			{
				description: Like('%meet%')
			}
		],
		take: 2,
		order: {
			id: 'DESC'
		}
	})
}
```