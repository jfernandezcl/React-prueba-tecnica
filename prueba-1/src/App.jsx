import { useFetch } from "../useFetch";
import "./App.css";
export function App() {
  const { data } = useFetch("https://jsonplaceholder.typicode.com/users");

  return (
    <main>
      <div>
        <h1>Data API name</h1>
      </div>
      <section>
        <ul>
          {data?.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
