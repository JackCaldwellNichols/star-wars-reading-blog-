import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const Character = props => {
	const {store, actions} = useContext(Context)
	let params = useParams()
	
	return (

	
		<div className="row p-5 rounded-lg d-flex">
				<div className="col d-flex justify-content-center mb-3">
					<img src={`https://starwars-visualguide.com/assets/img/characters/${store.peopleList[params.index].uid}.jpg`} />
				</div>
				<div className="col d-inline justify-content-center">
					<h1>{store.peopleList[params.index].name}</h1>
					<p className="desc pe-3 me-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				</div>
				<div>
					<hr></hr>
				</div>
				<div className="info">
					<div>
						<p><strong>Birth Year:</strong></p>
						<p>{store.peopleInfoList[params.index].birth_year}</p>
					</div>
					<div>
						<p><strong>Hair Colour:</strong></p>
						<p>{store.peopleInfoList[params.index].hair_color}</p>
					</div>
					<div>
						<p><strong>Height:</strong></p>
						<p>{store.peopleInfoList[params.index].height}</p>
					</div>
					<div>
						<p><strong>Eye Colour:</strong></p>
						<p>{store.peopleInfoList[params.index].eye_color}</p>
					</div>
					<div>
						<p><strong>Gender:</strong></p>
						<p>{store.peopleInfoList[params.index].gender}</p>
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

