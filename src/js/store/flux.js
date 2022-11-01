const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [],
			peopleList: [],
			planetList: [],
			vehicleList: [],
		},
		actions: {
			fetchPeople: async () => {
				const URL = "https://swapi.dev/api/people";
				const CONFIG = {
					method: "GET",
					headers: {
						"Content-type": "application/json"
					}
				};
				const response  = await fetch (URL, CONFIG)
				const json = await response .json();

				console.log(">>DATA>>", json)
				setStore({peopleList: json.results})
			},
			fetchPlanets: async () => {
				const URL = "https://swapi.dev/api/planets";
				const CONFIG = {
					method: "GET",
					headers: {
						"Content-type": "application/json"
					}
				};
				const response  = await fetch (URL, CONFIG)
				const json = await response .json();

				console.log(">>DATA>>", json)
				setStore({planetList: json.results})
			},
				setFavorites: (name) => {
					const store = getStore();
					setStore({favorites: [...store.favorites, name]})
			},
			fetchVehicles: async () => {
				const URL = "https://swapi.dev/api/vehicles";
				const CONFIG = {
					method: "GET",
					headers: {
						"Content-type": "application/json"
					}
				};
				const response  = await fetch (URL, CONFIG)
				const json = await response .json();

				console.log(">>DATA>>", json)
				setStore({vehicleList: json.results})
			}
			
			
		}
	};

}


export default getState;
