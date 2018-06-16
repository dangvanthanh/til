# ES6 Object Destructuring

```javascript
const user = {
  name: 'Dang Van Thanh',
  username: 'dangvanthanh',
  avatar: 'https://github.com/dangvanthanh.png',
  is_email: true
};

// Grabbing one by one
let name = user.name;
let avatar = user.avatar;
let is_email = user.is_email;

// Destructuring
let { name, avatar, is_email } = user;

console.log(name, avatar, is_email);
// Dang Van Thanh https://github.com/dangvanthanh.png true
```
