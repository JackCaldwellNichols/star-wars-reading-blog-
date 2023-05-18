import React, {useContext} from "react";
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Context } from '../store/appContext';
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const Navbar = () => {
const {store, actions } = useContext(Context);

	return (
		<nav className="nav">
			<Link to="/">
				<img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9a494b12-0ae6-4522-99c0-b4b7f08d9047/d98e4ji-e4e61fb6-d1e1-4c04-b385-fa04e1755807.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzlhNDk0YjEyLTBhZTYtNDUyMi05OWMwLWI0YjdmMDhkOTA0N1wvZDk4ZTRqaS1lNGU2MWZiNi1kMWUxLTRjMDQtYjM4NS1mYTA0ZTE3NTU4MDcuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.qiMNd51CWoAsfn_iRHn86bgsBwAaYVx8LHgZUubAGYY" className="sw-image"/>
			</Link>
			<DropdownButton id="dropdown-basic-button" className='me-3' title={`Favourites ${store.favorites.length}`}> 
				{store.favorites.map((item, index) => {
					return (
						<Dropdown.Item key={item.index} className='menu'>{item}<button className="trash"><FontAwesomeIcon icon={faTrashCan} onClick={() => actions.removeItem(item)}></FontAwesomeIcon></button></Dropdown.Item>
					)
				})}		
    		</DropdownButton>
		</nav>
	);
};