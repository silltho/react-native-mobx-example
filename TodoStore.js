export default class TodoStore {
  @observable
  todos = [];

  addTodo = label => {
    this.todos.push({
      label,
      completed: false
    });
  };
}
