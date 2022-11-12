import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";



export const Vehicle = props => {
	const {store, actions} = useContext(Context)
	let params = useParams()

	return (

	
		<div className="row p-5 rounded-lg d-flex">
				<div className="col d-flex justify-content-center mb-3">
				<img src={`https://starwars-visualguide.com/assets/img/vehicles/${store.vehicleList[params.index].uid}.jpg`} />
				</div>
				<div className="col d-inline justify-content-center">
					<h1>{store.vehicleList[params.index].name}</h1>
					<p className="desc pe-3 me-3 justify-content-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				</div>
				<div>
					<hr></hr>
				</div>
				<div className="info mx-auto">
					<div>
						<p><strong>Crew:</strong></p>
						<p className="">{store.vehicleInfoList[params.index].crew}</p>
					</div>
					<div>
					<p><strong>Passengers:</strong></p>
						<p>{store.vehicleInfoList[params.index].passengers}</p>
					</div>
					<div>
					<p><strong>Length:</strong></p>
						<p>{store.vehicleInfoList[params.index].length}</p>
					</div>
					<div>
					<p><strong>Model:</strong></p>
						<p>{store.vehicleInfoList[params.index].model}</p>
					</div>
					<div>
						<p><strong>Cargo Capacity:</strong></p>
						<p>{store.vehicleInfoList[params.index].cargo_capacity}</p>
					</div>			
					<hr></hr>
				</div>

				<div className="d-flex justify-content-center mt-5 pt-4">
					<Link to="/">
						<button className="btn btn-primary" href="#" role="button">
							Back home
						</button>
					</Link>
				</div>
		</div>	

	);
};