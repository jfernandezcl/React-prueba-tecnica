import { useEffect, useState } from "react";

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
//const CAT_ENDPOINT_IMAGE_URL = https://cataas.com/cat/says/${firtsWord}?fontSize=50&fontColor=red&json=true



export function App () {
	const [fact, setFact] = useState()
	const [imageUrl, setImageUrl] = useState()

	useEffect (() => {
		fetch(CAT_ENDPOINT_RANDOM_FACT)
		.then(res => res.json())
		.then(data => {
			const {fact} = data
			setFact(data.fact)

			const threeFirstWords = fact.split(' ').slice(0, 3).join(' ')
			console.log(threeFirstWords)

			
			fetch(`https://cataas.com/cat/says/${threeFirstWords}?fontSize=50&fontColor=red&json=true`)
			.then(res => res.json)
			.then(response => {
				console.log(response)
			})
		})
	}, [])





	return (
		<main>
			<h1>App de gatos</h1>
			{fact && <p>{fact}</p>}
		</main>
	)
}
