# Wedding-gift

## provides APIs
0. POST method `localhost/collection/take/` API for collecting gift.
```bash
{
  "name":"example",
  "gender":"F",
  "amount":5000,
  "item":"TK"
}
```
1. GET method `localhost/collection/list/` API for see Collection list.
2. GET method `localhost/collection/detail/id/` API for see particular guest detail.
3. PATCH method `localhost/collection/update/id/` API for amount and item update.
```bash
{
  "amount":5000,
  "item":"TK"
}
```
4. DELETE method `localhost/collection/delete/id/` for delete particular guest.
5. PATCH method  `localhost/collection/update/id/` API for guest name and gender update.
```bash
{
  "name":"example",
  "gender":"F",
}
```
