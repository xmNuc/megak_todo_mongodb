const { db, client } = require('./utils/db');
const { TodoRepository } = require('./repositories/todo.repository');
const { TodoRecord } = require('./records/todo.record');

(async () => {
  try {
    const todo = new TodoRecord({
      title: 'Make MongoDB project',
    });
    await TodoRepository.insert(todo);

    console.log(todo);
    console.log(await TodoRepository.findAll());
  } finally {
    await client.close();
  }
})();
