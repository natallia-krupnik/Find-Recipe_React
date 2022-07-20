import React, { useEffect, useState } from 'react';
import videoRecipe from "./food.mp4"
import './App.css';
import MyRecipesComponent from './MyRecipesComponent';



function App() {

	// const MY_ID = "a0730b42"
	// const MY_KEY = "a1a559be6bda5233e65171ca7bdebacc"
	
	const [inputSearch, setInputSearch] = useState("")

	const [myRecipeArray, setMyRecipeArray] = useState([])

	const [submitButton, setSubmitButton] = useState("salmon")

	useEffect(() => {
		const getApi = async ()=>{
			const responce = await fetch (`https://api.edamam.com/api/recipes/v2?type=public&q=${submitButton}&app_id=a0730b42&app_key=a1a559be6bda5233e65171ca7bdebacc`)
			const data = await responce.json()
			console.log(data.hits)
			setMyRecipeArray(data.hits)
		}
		getApi()
	}, [submitButton]);
	
	const inputRecepi=(e)=>{
		setInputSearch(e.target.value)
		console.log(e.target.value)
	}

	const onSubmitForm =(e)=>{
		e.preventDefault()
		setSubmitButton(inputSearch) //тут передала что пишет пользователь
		setInputSearch("") //тут дала очистить строку ввода 
	}

	return (
		<div className="recipe">

			<div className='recipe__main'>
					<video className='main__video' autoPlay muted loop>
						<source src={videoRecipe} type="video/mp4"/>
					</video>
				<h1 className='main__header'>Find a Recipe</h1>
			</div>

				<form className='recipe__input' onSubmit={onSubmitForm}>
					<div className='input__feld'>
						<input 
							value={inputSearch} 
							onChange={inputRecepi} 
							type="text" 
							placeholder="keywords..."></input>
					</div>
					<button className='input__btn'>SEARCH</button>
				</form>

				<div className='recipe__component'>
					{myRecipeArray.map((element,id) =>(
							<MyRecipesComponent key={id}
								label={element.recipe.label}
								calories={element.recipe.calories}
								image={element.recipe.image} 
								ingredients={element.recipe.ingredientLines}
								protein={element.recipe.totalDaily}
								fat={element.recipe.totalDaily}
								carb={element.recipe.totalDaily}
								url={element.recipe.url}
								/>
					))}
				</div>
			
		</div>
	);
}

export default App;
