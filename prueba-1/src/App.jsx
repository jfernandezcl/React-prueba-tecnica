import "./App.css";
import { useFetch } from "../useFetch";

export function App() {
  const { data } = useFetch("https://jsonplaceholder.typicode.com/users");

  return (
    <main>
      <div className="containerTitle">
        <h1 className="title">Fetch like a PRO</h1>
      </div>
      <section className="containerList">
        <ul className="list">
          {data?.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
