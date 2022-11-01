import React, { useContext, useEffect } from "react";
import { Context } from '../store/appContext';
import { Link } from "react-router-dom";

export const Home = () => {

	const {store, actions } = useContext(Context);

	useEffect( () => {

		actions.fetchPeople();

	}, [])

	useEffect( () => {

		actions.fetchPlanets();

	}, [])

	useEffect( () => {

		actions.fetchVehicles();

	}, [])

	return (
	
	<div className="bg-dark p-5 rounded-lg mx-auto">
		<h1 className="characters display-4">Characters</h1>
			<div className="d-inline-flex flex-wrap my-auto">
			{
			store.peopleList.map(
				(item, index) => {
					return (
						<div className="main card px-2 py-2 mb-1" key={index}>
						<img className="card-img-top" src="https://via.placeholder.com/400x400" alt="Card image cap"/>
							<div className="card-body">
								<h5 className="card-title">{item.name}</h5>
								<p className="card-text">Gender: {item.gender}</p>
								<p className="card-text">Eye-colour: {item.eye_color}</p>
								<p className="card-text">Hair-colour: {item.hair_color}</p>
									<div className="ButtonCard d-flex justify-content-between">
									<Link to={`/character/${index}`}>
										<a href="#" className="btn btn-primary me-5">Learn more</a>
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
			<h1 className="planets display-4">Planets</h1>
				<div className="d-inline-flex flex-wrap my-auto">
				{
				store.planetList.map(
					(item, index) => {
						return (
							<div className="main card px-2 py-2 mb-1" key={index}>
							<img className="card-img-top" src="https://via.placeholder.com/400x400" alt="Card image cap"/>
								<div className="card-body">
									<h5 className="card-title">{item.name}</h5>
									<p className="card-text">Population: {item.population}</p>
									<p className="card-text">Terrain: {item.terrain}</p>
										<div className="ButtonCard d-flex justify-content-between">
										<Link to={`/planet/${index}`}>
											<a href="#" className="btn btn-primary me-5">Learn more</a>
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
			<h1 className="planets display-4">Vehicles</h1>
				<div className="d-inline-flex flex-wrap my-auto">
				{
				store.vehicleList.map(
					(item, index) => {
						return (
							<div className="main card px-2 py-2 mb-1" key={index}>
							<img className="card-img-top" src="https://via.placeholder.com/400x400" alt="Card image cap"/>
								<div className="card-body">
									<h5 className="card-title">{item.name}</h5>
									<p className="card-text">Model: {item.model}</p>
									<p className="card-text">Cargo Capacity: {item.cargo_capacity}</p>
										<div className="ButtonCard d-flex justify-content-between">
										<Link to={`/vehicles/${index}`}>
											<a href="#" className="btn btn-primary me-5">Learn more</a>
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
