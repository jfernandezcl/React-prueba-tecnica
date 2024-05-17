import { useDatosAPI } from "./hooks/useDatosAPI";
import { Title } from "./components/Title/Title";
import { ListOfUsers } from "./components/ListOfUsers/ListOfUsers";
import "./App.css";
import "./components/Title/Title.css";

export function App() {
  const { data } = useDatosAPI("https://jsonplaceholder.typicode.com/users");

  return (
    <main>
      <div className="title-data">
        <Title title={"Data API name"} />
      </div>
      <section>
        <div className="user-container">
          <ListOfUsers data={data} />
        </div>
      </section>
    </main>
  );
}
