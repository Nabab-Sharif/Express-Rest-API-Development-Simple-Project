
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

//SelectTodo List 
exports.SelectTodo = (req, res) => {

  const UserName = req.headers['username'];

  TodoListModel.find({ UserName: UserName }, (err, data) => {
    if (err) {
      res.status(400).json({ status: "fail", data: err });
    } else {
      res.status(200).json({ status: "success", data: data });
    }
  })

}


exports.UpdateTodo = (req, res) => {

  const TodoSubject = req.body['TodoSubject'];
  const TodoDescription = req.body['TodoDescription'];
  const _id = req.body['_id'];
  const TodoUpdateDate = Date.now();

  const PostBody = {
    TodoSubject: TodoSubject,
    TodoDescription: TodoDescription,
    TodoUpdateDate: TodoUpdateDate,
  }

  TodoListModel.updateOne({ _id: _id }, { $set: PostBody }, { upsert: true }, (err, data) => {

    if (err) {
      res.status(400).json({ status: "fail", data: err })
    } else {
      res.status(200).json({ status: "success", data: data });
    }

  })


}

exports.UpdateStatusTodo = (req, res) => {
  const TodoStatus = req.body['TodoStatus'];
  const _id = req.body['_id'];
  const TodoUpdateDate = Date.now();

  const PostBody = {
    TodoStatus: TodoStatus,
    TodoUpdateDate: TodoUpdateDate,
  }

  TodoListModel.updateOne({ _id: _id }, { $set: PostBody }, { upsert: true }, (err, data) => {
    if (err) {
      res.status(400).json({ status: "fail", data: err });
    } else {
      res.status(200).json({ status: "success", data: data });
    }
  })
}