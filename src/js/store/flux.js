const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [],
			peopleList: [],
			planetList: [],
			vehicleList: [],
			peopleInfoList: [],
			planetInfoList: [],
			vehicleInfoList: []
		},
		actions: {
			fetchPeople: async () => {
				const URL = "https://www.swapi.tech/api/people";
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

			fetchPeopleInfo: async () => {
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
				setStore({peopleInfoList: json.results})
			},

			fetchPlanets: async () => {
				const URL = "https://www.swapi.tech/api/planets";
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

			fetchPlanetInfo: async () => {
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
				setStore({planetInfoList: json.results})
			},

			setFavorites: (name) => {
					const store = getStore();
					setStore({favorites: [...store.favorites, name]})
			},

			removeItem: (item) => {
				const store = getStore();
				setStore({ favorites: store.favorites.filter(fav => fav !== item) });
			},

			fetchVehicles: async () => {
				const URL = "https://www.swapi.tech/api/vehicles";
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
			},

			fetchVehicleInfo: async () => {
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
				setStore({vehicleInfoList: json.results})
			}
			
			
		}
	};

}


export default getState;
