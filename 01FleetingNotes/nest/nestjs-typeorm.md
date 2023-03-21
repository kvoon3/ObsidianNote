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
