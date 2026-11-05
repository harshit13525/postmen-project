const express = require("express");

const app = express();

app.use(express.json());

let courses = [
  { id: 101, coursename: "fullstack" },
  { id: 102, coursename: "Webdevlopment" },
  { id: 103, coursename: "UI/UX designer" }
];

app.get("/", (req, res) => {
  res.json({
    message: "This is our API Project using Postman."
  });
});

// 1. GET: All Courses
app.get("/courses", (req, res) => {
  res.json({
    message: "All Data Fetching Successfully",
    data: courses
  });
});

// 2. GET: Specific Course
app.get("/courses/:id", (req, res) => {
  const id = Number(req.params.id);

  const course = courses.find((data) => {
    return data.id === id;
  });

  if (!course) {
    return res.status(404).json({
      message: "Data not Found"
    });
  }

  res.json({
    message: "Data Fetch Successfully",
    data: course
  });
});

// 3. POST: Add Course
app.post("/addcourse", (req, res) => {
  const { coursename } = req.body;

  const isExist = courses.find((data) => {
    return data.coursename === coursename;
  });

  if (isExist) {
    return res.status(409).json({
      message: "Data Already Exist"
    });
  }

  const course = {
    id: courses.length + 1001,
    coursename: coursename
  };

  courses.push(course);

  res.status(201).json({
    message: "Data Added Successfully",
    data: course
  });
});

// 4. PUT: Change Course
app.put("/change", (req, res) => {
  const { id, coursename } = req.query;
  const courseId = Number(id);

  const course = courses.find((data) => {
    return data.id === courseId;
  });

  if (!course) {
    return res.status(404).json({
      message: "Data not Found"
    });
  }

  courses = courses.map((data) => {
    return data.id === courseId
      ? { ...data, coursename: coursename }
      : data;
  });

  res.json({
    message: "Data Modify Successfully",
    data: courses
  });
});

// 5. DELETE: Delete Course
app.delete("/deletecourse", (req, res) => {
  const id = Number(req.query.id);

  const course = courses.find((data) => {
    return data.id === id;
  });

  if (!course) {
    return res.status(404).json({
      message: "Data not Found"
    });
  }

  courses = courses.filter((data) => {
    return data.id !== id;
  });

  res.json({
    message: "Data Deleted Successfully",
    data: courses
  });
});

// Start Server
app.listen(3000, () => {
  console.log("Server is Running on port 3000");
});