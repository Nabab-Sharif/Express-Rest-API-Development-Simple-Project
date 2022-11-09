
const TodoListModel = require("../models/TodoListModel");

exports.CreateTodo = (req, res) => {
  const reqBody = req.body;

  const TodoSubject = reqBody['TodoSubject'];
  const TodoDescription = reqBody['TodoDescription'];
  const UserName = req.headers['username'];
  const TodoStatus = "New";
  const TodoCreateDate = Date.now();
  const TodoUpdateDate = Date.now();


  const PostBody = {
    UserName: UserName,
    TodoSubject: TodoSubject,
    TodoDescription: TodoDescription,
    TodoStatus: TodoStatus,
    TodoCreateDate: TodoCreateDate,
    TodoUpdateDate: TodoUpdateDate,
  }


  TodoListModel.create(PostBody, (err, data) => {
    if (err) {
      res.status(400).json({ status: "fail", data: err });
    } else {
      res.status(200).json({ status: "success", data: data });
    }
  });

}

