import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((item) => item.json())
      .then((data) => {
        setUser(data);
        console.log("Response:", data);
      })
      .catch((error) => console.log("got error", error));
  }, []);

  return (
    <div>
      <div>User ID: {user.userId}</div>
      <div>ID: {user.id}</div>
      <div>Title: {user.title}</div>
      <div>Completed: {user.completed ? "Yes" : "No"}</div>
    </div>
  );
}
export default App;
