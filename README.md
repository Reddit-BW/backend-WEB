# backend-WEB

## API Documentation

**BASE URL** https://post-here-app.herokuapp.com/

- Attach endpoints to the end of the base URL in order to make HTTP Requests.

### Table of Contents

Registration/Login Endpoints

| Requests                          | Endpoints          | Description                              |
| --------------------------------- | ------------------ | ---------------------------------------- |
| <a href="#">POST Registration</a> | /api/auth/register | <b>POST</b> request to register new user |
| <a href="#">POST Login</a>        | /api/auth/login    | <b>POST</b> request to login new user    |

<b>GET</b> request endpoints:

| Requests                       | Endpoints       | Description                                     |
| ------------------------------ | --------------- | ----------------------------------------------- |
| <a href="#">GET Users</a>      | /api/users      | <b>GET</b> request to get all users             |
| <a href="#">GET User By ID</a> | /api/users/:id  | <b>GET</b> by user id gets user by id           |
| <a href="#">GET All posts</a>  | /api/user/posts | <b>GET</b> request get all posts                |
| <a href="#">GET post by ID</a> | /api/posts/:id  | <b>GET</b> request to get all posts by their ID |

<b>POST</b> request endpoints:

| Requests                    | Endpoints  | Description                         |
| --------------------------- | ---------- | ----------------------------------- |
| <a href="#">POST a post</a> | /api/posts | <b>POST</b> request to add new post |

<b>PUT</b> request endpoints:

| Requests                       | Endpoints      | Description                       |
| ------------------------------ | -------------- | --------------------------------- |
| <a href="#">PUT post by ID</a> | /api/posts/:id | <b>PUT</b> request to edit a post |

<b>DEL</b> request endpoints:

| Requests                       | Endpoints      | Description                                |
| ------------------------------ | -------------- | ------------------------------------------ |
| <a href="#">DEL user by ID</a> | /api/users/:id | <b>DELETE</b> request to delete user by ID |
| <a href="#">DEL post by ID</a> | /api/posts/:id | <b>DELETE</b> request to delete post by ID |

<hr />

## [POST] Registration

<a href="#top">Return to the top</a>

URL: https://post-here-app.herokuapp.com/api/auth/register

### Request body should include:

| Input (Case Sensitive) | Input Type             |
| ---------------------- | ---------------------- |
| username (required)    | string (4+ characters) |
| password (required)    | string (4+ characters) |

_An example of how the body should appear:_

```js
{
	"username": "lyntechi",
	"password": "secretpass"
}
```

<hr />

<div id="login"></div>

## [POST] Log In

<a href="#top">Return to the top</a>

URL: https://post-here-app.herokuapp.com/api/auth/login

### Request body should include:

| Input (Case Sensitive) | Input Type             |
| ---------------------- | ---------------------- |
| name (required)        | string (4+ characters) |
| password (required)    | string (8+ characters) |

_An example of how the body should appear:_

```js
{
	"username": "lyntechi",
	"password": "secretpass"
}
```

<hr />

## [GET] Users

<a href="#top">Return to the top</a>

URL: https://post-here-app.herokuapp.com/api/users

### What will be returned:

_An array of all users within the database._

```js
[
  { user_id: 1, username: "lyntechi", password: "secretpass" },
  { user_id: 2, username: "wonderwoman", password: "secretpass" },
  { user_id: 3, username: "batman", password: "secretpass" },
];
```

<hr />

## [GET] User by ID

<a href="#top">Return to the top</a>

URL: https://post-here-app.herokuapp.com/api/users/:id

**NOTE:** Be sure to include the `id` of an existing user on the end of the endpoint.

<hr />

## [GET] All posts

<a href="#top">Return to the top</a>

URL: https://post-here-app.herokuapp.com/api/posts

**NOTE:** returns all posts in database for all users

### What will be returned:

```js
[
  {
    id: 1,
    title: "fitness",
    text: "I would like to lose 10 pounds",
    user_id: 1,
  },
  {
    id: 2,
    title: "web development",
    text:
      "I feel like its so hard to learn javascript. Does anyone know any sites that I can possibly benefit from?",
    user_id: 2,
  },
  {
    id: 3,
    title: "real estate",
    text:
      "I would like to know how I can start investing into real estate. What are the pros and cons of starting in this type of business?",
    user_id: 3,
  },
];
```

<hr />

## [GET] Post by ID

<a href="#top">Return to the top</a>

URL: https://post-here-app.herokuapp.com/api/posts/:id

**NOTE:** returns all posts in database by id

### What will be returned:

_An object of the post by id._

```js
  {
          id: 1,
          title: "fitness",
          text: "I would like to lose 10 pounds",
          user_id: 1,
        },
```

<hr />

<hr />

<div></div>

## [POST] a post

<a href="#top">Return to the top</a>

URL: https://post-here-app.herokuapp.com/api/posts/

### Request body should include:

| Input (Case Sensitive) | Input Type |
| ---------------------- | ---------- |
| title (required)       | string     |
| text (required)        | string     |

_An example of how the body should appear:_

```js
{
	"title": "javascript",
	"text": "what are some good javascript programs?"

}
```

### What will be returned:

```js
{
  "data": {
    "id": 4,
    "title": "javascript",
	"text": "what are some good javascript programs?"
    "user_id": null
  }
}
```

<hr />

## [PUT] posts by ID

<a href="#top">Return to the top</a>

URL: https://post-here-app.herokuapp.com/api/posts/:id

### Request body should include:

| Input (Case Sensitive) | Input Type |
| ---------------------- | ---------- |
| title (required)       | string     |
| text (optional)        | string     |

\_An example of how the body should appear:

```js
{
  "title": "testing",
	"text": "testing"
}
```

## [DEL] User by ID

<a href="#top">Return to the top</a>

URL: https://post-here-app.herokuapp.com/api/users/

_An example of how the endpoint should appear:_

```js
URL: https://post-here-app.herokuapp.com/api/users/1
```

### What will be returned:

message saying user was removed

```js
{

  "removed": 1
}
```

<hr />
<h3>[DEL] Post by ID</h3>

<a href="#top">Return to the top</a>

URL: https://post-here-app.herokuapp.com/api/posts/

_An example of how the endpoint should appear:_

```js
URL: https://post-here-app.herokuapp.com/api/posts/1
```

### What will be returned:

message saying user was removed

```js
{

  "removed": 1
}
```
