import React, { useState, useContext, useEffect } from "react";
import { Context } from '../store/appContext';
import { Link } from "react-router-dom";
import '../../styles/home.css'

export const Home = () => {

	const {store, actions } = useContext(Context);
	
	return (
	

	<div className="container">
		<h1 className="title">Characters</h1>
			<div className="wrapper">

			{
			store.peopleList.map(
				(item, index) => {
					return (
						<div className="card" key={index}>
						<img className="card-img-top"  src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`} alt={item.name}/>
							<div className="card-body">
								<h5 className="card-title">{item.name}</h5>
									<div className="ButtonCard">
									<Link to={`/character/${index}`}>
										<button href="#" className="btn btn-primary me-5 mt-2">Learn more</button>
									</Link>	
										{store.favorites.includes(item.name) ? null : (
										<button href="#" className="btn btn-warning" onClick={() => actions.setFavorites(item.name)}>♥</button>
										)}
									</div>
							</div>
					  </div>			
					)
				})}
			</div>
	
			<div>
			<h1 className="title">Planets</h1>
				<div className="wrapper">
				{
				store.planetList.map(
					(item, index) => {
						return (
			<div className="card" key={index}>
							<img className="card-img-top" src={item.name === "Tatooine" ? "https://swtorstrategies.com/wp-content/uploads/2010/01/tatooine.jpg" : `https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`} alt={item.name}/>
								<div className="card-body">
									<h5 className="card-title">{item.name}</h5>
										<div className="ButtonCard">
										<Link to={`/planet/${index}`}>
											<button  className="btn btn-primary me-5 mt-2">Learn more</button>
										</Link>	
											{store.favorites.includes(item.name) ? null : (
											<button className="btn btn-warning" onClick={() => actions.setFavorites(item.name)}>♥</button>
											)}
										</div>
								</div>
						</div>			
						)
					})}
				</div>
				</div>

				<div>

			<h1 className="title">Vehicles</h1>
				<div className="wrapper">
				{
				store.vehicleList.map(
					(item, index) => {
						return (

							<div className="card" key={index}>
							<img className="card-img-top" src={`https://starwars-visualguide.com/assets/img/vehicles/${item.uid}.jpg`} alt={item.name}/>
								<div className="card-body">
									<h5 className="card-title">{item.name}</h5>
										<div className="ButtonCard">
										<Link to={`/vehicles/${index}`}>
											<button  className="btn btn-primary me-5 mt-2">Learn more</button>
										</Link>	
											{store.favorites.includes(item.name) ? null : (
											<button className="btn btn-warning" onClick={() => actions.setFavorites(item.name)}>♥</button>
											)}
										</div>
								</div>
						</div>			
						)
					})}
				</div>
				</div>
		</div>


		
	)
	};