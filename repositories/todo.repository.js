const { TodoRecord } = require('../records/todo.record');
const { todos } = require('../utils/db');

class TodoRepository {
  static _checkRecord(record) {
    if (!(record instanceof TodoRecord)) {
      throw new Error(`record must be an instance of TodoRecord`);
    }
  }

  static async insert(record) {
    TodoRepository._checkRecord(record);
  }

  static async delete(record) {
    TodoRepository._checkRecord(record);
  }

  static async find(id) {}

  static async findAll() {
    return (await todos.find()).toArray();
  }

  static async update(record) {
    TodoRepository._checkRecord(record);
  }
}

module.exports = {
  TodoRepository,
};