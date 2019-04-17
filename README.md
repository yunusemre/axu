## Adux

```bash
$ npm install adux -S / npm install adux --save
```

This package is a auth boilerplate. Contains a login and forgot password page. There are a some default config in package. Examples;

Default configs: {

```
  authConfig: {
    name: "Adesso Auth Package"
  },
  isForgotPassword: false,
  isLogin: false,
  isLabel: false
}
```

There are two themes and a login form. For first theme, `theme: false`. If `theme is false`, you will look a box form. The other theme is a creative template which a background image `theme: true`, `bgImage: 'http://...`)

## Login Page:

```
import { Login } from "adux";
```

```
  config : {
    authConfig: {
      name: "Adesso Auth Package",
      login: {
        path: "/api/login/",
        redirect: "/",
        field: "username" `defaut: email` // You can use only email or username fields  for your api parameters
      },
      logo: 'http://...',
      width: 150
    },
    theme: true,
    bgImage: Image,
    isForgotPassword: true,
    isLogin: true,
    isLabel: true
  }
```

For using, have to import login reducers

```
import { reducerLogin } from "adux";
```

## Forgot Password Page:

```
import { ForgotPassword } from "adux";

```

```
  config : {
    authConfig: {
      name: "Adesso Auth Package",
      forgot_password: {
        path: "/api/forgot_password/",
        redirect: "/login",
        field: "username" `defaut: email` // You can use only email or username fields for your api parameters
      },
      logo: 'http://...',
      width: 150
    },
    theme: true,
    bgImage: Image,
    isForgotPassword: false,
    isLogin: true,
    isLabel: true
  }
```

For using, have to import forgot password reducers

```
import { reducerForgotPassword } from "adux";

```

1. If you don't have any logo, please use only name. `default: email`
2. If there is a field label in your design, please use isLabel: true `isLabel: false`
3. If you want to see forgot password url in login page, please use `isForgotPassword: true`. Default: `isForgotPassword: false`
4. If you want to see login url in forgot password page, please use `isLogin: true`. Default: `isLogin: false`

```
You can see all examples in example folder.
```
