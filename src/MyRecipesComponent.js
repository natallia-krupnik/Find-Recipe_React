import React from 'react';
import "./MyRecipesComponent.css"

const MyRecipesComponent = ({label, calories, image, ingredients, protein,fat, carb, url}) => {
	return (
		<div className='container'>
			<div className='top'>
				<div className='top__foto'>
					<img src={image} alt="recipeFoto"/>
				</div>
				<div className='top__right'>
					<h3>{label}</h3>
					<ul>
						{ingredients.map((item,id) =>(
							<li key={id}>{item}</li>
						))}
					</ul>
				</div>
			</div>

			<div className='bottom'>
				<div className='bottom__container one'>
					<p>4 servings</p>
					<p><span>{calories.toFixed(0)}</span> kcal</p>
				</div>
				<div className='bottom__container two'>
					<p>PROTEIN</p>
					<p>FAT</p>
					<p>CARB</p>
				</div>
				<div className='bottom__container four'>
					<span className='two__quantity'>
						{protein.PROCNT.quantity.toFixed()}
					</span>
					<span className='two__quantity'>
						{fat.FAT.quantity.toFixed()}
					</span>
					<span className='two__quantity'>
							{carb.CHOCDF.quantity.toFixed(2)}
					</span>
				</div>
				<div className='bottom__container three'>
					<a href={url} target="_blank" rel="noreferrer">Link to Recipe</a>
				</div>
			</div>
		</div>
	);
}

export default MyRecipesComponent;
