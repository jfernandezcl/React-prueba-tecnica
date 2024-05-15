import { useFetch } from "../useFetch";
import "./App.css";






export function App(){
	const { data } = useFetch("https://jsonplaceholder.typicode.com/users")

	return (
		<main>
			
			<h1 className="title ">Fetch Like a PRO</h1>

			<section>
			<ul className="list">
				{data?.map((user) => (
					<li key={user.id}>{user.name}</li>
				))}
			</ul>
			</section>
		
		</main>
	);


}




