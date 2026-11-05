# Courses API

A simple REST API project using Node.js and Express.js to manage courses.

## Installation

```bash
npm install express
```

## Run the Project

```bash
node app.js
```

Server runs at: `http://localhost:3000`

## API Routes

| Method | URL | Description |
|---|---|---|
| GET | `/` | Check API |
| GET | `/courses` | Get all courses |
| GET | `/courses/101` | Get course by ID |
| POST | `/addcourse` | Add a course |
| PUT | `/change?id=101` | Update a course |
| DELETE | `/deletecourse?id=101` | Delete a course |

## Add Course (Postman)

Method: `POST`

URL: `http://localhost:3000/addcourse`

Body → raw → JSON:

```json
{
  "coursename": "Node.js"
}
```

## Update Course (Postman)

Method: `PUT`

URL: `http://localhost:3000/change?id=101`

Params:
- `id`: 101
- `coursename`: React JS

## Delete Course (Postman)

Method: `DELETE`

URL: `http://localhost:3000/deletecourse?id=101`

## Note

Data is stored in an array and resets when the server restarts.