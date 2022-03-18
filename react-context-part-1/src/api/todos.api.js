const BASE_URL = "http://localhost:4000";

export const retrieveTodos = async () => {
  const response = await fetch(BASE_URL + "/todos", {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  });

  const retrieved = await response.json();
  return retrieved;
};

export const createTodo = async (newTodo) => {
  const response = await fetch(BASE_URL + "/todos", {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
    },
    body: JSON.stringify(newTodo),
  });

  const created = await response.json();
  return created;
};

export const deleteTodo = async (id) => {
  const response = await fetch(BASE_URL + "/todos/" + id, {
    method: "DELETE",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
    },
  });

  const deleted = await response.json();
  return deleted;
};

export const updateTodo = async (id, completed) => {
  const response = await fetch(BASE_URL + "/todos/" + id, {
    method: "PATCH",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      completed: completed,
    }),
  });

  const updated = await response.json();
  return updated;
};
