import React, { useState, useContext, useEffect } from "react";
import { Context } from '../store/appContext';
import { Link } from "react-router-dom";

export const Home = () => {

	const {store, actions } = useContext(Context);
	
	return (
	
	<div className="p-5 rounded-lg mx-auto">
		<h1 className="characters display-4 p-3">Characters</h1>
			<div className="d-inline-flex flex-wrap my-auto">
			{
			store.peopleList.map(
				(item, index) => {
					return (
						<div className="main card px-2 py-2 mb-1" key={index}>
						<img className="card-img-top"  src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`} alt={item.name}/>
							<div className="card-body">
								<h5 className="card-title">{item.name}</h5>
									<div className="ButtonCard d-flex justify-content-between">
									<Link to={`/character/${index}`}>
										<a href="#" className="btn btn-primary me-5 mt-2">Learn more</a>
									</Link>	
										{store.favorites.includes(item.name) ? null : (
										<a href="#" className="btn btn-warning" onClick={() => actions.setFavorites(item.name)}>♥</a>
										)}
									</div>
							</div>
					  </div>			
					)
				})}
			</div>
		

			<div>
			<h1 className="planets display-4 p-3">Planets</h1>
				<div className="d-inline-flex flex-wrap my-auto">
				{
				store.planetList.map(
					(item, index) => {
						return (
							<div className="main card px-2 py-2 mb-1" key={index}>
							<img className="card-img-top" src={item.name === "Tatooine" ? "https://swtorstrategies.com/wp-content/uploads/2010/01/tatooine.jpg" : `https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`} alt={item.name}/>
								<div className="card-body">
									<h5 className="card-title">{item.name}</h5>
										<div className="ButtonCard d-flex justify-content-between">
										<Link to={`/planet/${index}`}>
											<a href="#" className="btn btn-primary me-5 mt-2">Learn more</a>
										</Link>	
											{store.favorites.includes(item.name) ? null : (
											<a href="#" className="btn btn-warning" onClick={() => actions.setFavorites(item.name)}>♥</a>
											)}
										</div>
								</div>
						</div>			
						)
					})}
				</div>
				</div>

				<div>
			<h1 className="planets display-4 p-3">Vehicles</h1>
				<div className="d-inline-flex me-4 flex-wrap my-auto">
				{
				store.vehicleList.map(
					(item, index) => {
						return (
							<div className="main card px-2 py-2 mb-1" key={index}>
							<img className="card-img-top" src={`https://starwars-visualguide.com/assets/img/vehicles/${item.uid}.jpg`} alt={item.name}/>
								<div className="card-body">
									<h5 className="card-title">{item.name}</h5>
										<div className="ButtonCard d-flex justify-content-between">
										<Link to={`/vehicles/${index}`}>
											<a href="#" className="btn btn-primary me-5 mt-2">Learn more</a>
										</Link>	
											{store.favorites.includes(item.name) ? null : (
											<a href="#" className="btn btn-warning" onClick={() => actions.setFavorites(item.name)}>♥</a>
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
