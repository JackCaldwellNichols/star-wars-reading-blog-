import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";



export const Planet = props => {
	const {store, actions} = useContext(Context)
	let params = useParams()

	return (

	
		<div className="row p-5 rounded-lg d-flex">
				<div className="col d-flex justify-content-center mb-3">
			
				<img src={store.planetList[params.index].name === "Tatooine" ? "https://swtorstrategies.com/wp-content/uploads/2010/01/tatooine.jpg" : `https://starwars-visualguide.com/assets/img/planets/${store.planetList[params.index].uid}.jpg`} />
				</div>
				<div className="col d-inline justify-content-center">
					<h1>{store.planetList[params.index].name}</h1>
					<p className="desc pe-3 me-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				</div>
				<div>
					<hr></hr>
				</div>
				<div className="info mt-4 d-flex justify-content-around">
					<div>
						<p><strong>Terrain:</strong></p>
						<p>{store.planetInfoList[params.index].terrain}</p>
					</div>
					<div>
						<p><strong>Climate:</strong></p>
						<p>{store.planetInfoList[params.index].climate}</p>
					</div>
					<div>
						<p><strong>Population:</strong></p>
						<p>{store.planetInfoList[params.index].population}</p>
					</div>
					<div>
						<p><strong>Diameter:</strong></p>
						<p>{store.planetInfoList[params.index].diameter}</p>
					</div>				
					<hr></hr>
				</div>

				<div className="d-flex justify-content-center mt-4">
					<Link to="/">
						<button className="btn btn-primary" href="#" role="button">
							Back home
						</button>
					</Link>
				</div>
		</div>	

	);
};

