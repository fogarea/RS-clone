const delay = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, 2000);
  });
};

class CounterService {
  async getCounter() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );

    const todo = await response.json();
    await delay();
    return todo.userId;
  }
}

export default new CounterService();
