import { useState, useEffect } from "react";
import "./App.css";

export function App () {
	const [data, setData] = useState();



	useEffect (() => {
		fetch("https://jsonplaceholder.typicode.com/users")
		.then(response => response.json())
		.then(data => setData(data))
	},[]);


	return (
		<main>
			
			<h1 className="title">Fetch Like a PRO</h1>

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



