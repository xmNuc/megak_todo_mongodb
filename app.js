const { db, client } = require('./utils/db');
const { TodoRepository } = require('./repositories/todo.repository');
const { TodoRecord } = require('./records/todo.record');

(async () => {
  try {
    // const todo = new TodoRecord({
    //   title: 'Make MongoDB project',
    // });
    // await TodoRepository.insert(todo);S

    // console.log(todo);
    // console.log(await TodoRepository.findAll());

    const todo = await TodoRepository.find('61d4d97c19756250c951b606');
    console.log(await TodoRepository.find('61d4d97c19756250c951b606'));
    todo.title = 'Updated information x 2';
    await TodoRepository.update(todo);
    console.log(await TodoRepository.find('61d4d97c19756250c951b606'));
    console.log(await TodoRepository.delete(todo));
    console.log(await TodoRepository.find('61d4d97c19756250c951b606'));
    // console.log(await TodoRepository.find('61d4d96d6b60eca155edf6e4'));
  } finally {
    await client.close();
  }
})();
