# Wedding-gift

## APs For collecting guest data and collecting gift
1. POST Method `localhost/collection/guest-add/` for added new guest data:
```bash
{
  "name":"...",
  "email":"example@gmail.com",
  "relationship":"friend",
  "gender":"male",
  "address":"Mohammadpur Dhaka-1209"
}
```
2. POST Method `localhost/collection/gift-add/` for collecting gift:
```bash
{
  "otp":"...",
  "email":"example@gmail.com",
  "amount":15000,
  "item":"tk + dinner set"
}
```
3. POST Method `localhost/otp/send/` for send otp:
```bash
{
  "email":"example@gmail.com"
}
```


## APIs

1. GET Method `localhost/collection/gift-list/` for gift list.

2. GET Method `localhost/collection/guest-detail/id/` for particular guest detail with gift.

3. PATCH Method `localhost/collection/gift-item-update/id/` for updating particular guest's gift item and amount:

```bash
{
  "amount":21000,
  "item":"TK + Table"
}
```

4. DELETE Method `localhost/collection/gift-delete/id/` for return gift list with guest detail.

5. PUT Method `localhost/collection/gift-update/id/` for particular gift detail update.

`Note: Here id means guest id`
