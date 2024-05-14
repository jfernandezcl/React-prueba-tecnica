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
			<div className="card">
			<h1>Fetch Like a PRO</h1>
			<ul>
				{data?.map((user) => (
					<li key={user.id}>{user.name}</li>
				))}
			</ul>
			</div>
		</main>
	);
}



