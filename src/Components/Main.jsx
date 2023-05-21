import './style.css';
import React from 'react';
import logo from '../assets/logoTaws1.png';
import { Link } from 'react-router-dom';


const Main = () => {
	return (
		<div className="Main grid grid-cols-1 justify-items-center">
			<div className="flex-col w-4/5">
				<h1 className="text-white font-semibold text-5xl">BE DIFFERENT</h1>
				<h1 className="text-tawsBlue font-bold text-5xl">BE TAWS</h1>
				<p className="text-white my-4 text-xl">
					Taws es un grupo estudiantil politécnico que busca contribuir a la
					formación integral de jóvenes investigadores precursores en el
					desarrollo de tecnologías de la información.
				</p>
				<div className="text-center">
				<Link to={"/about"}>
					<button className="bg-tawsBlue rounded-full p-2 w-3/12 mt-2 ml-0.5 font-semibold">
						Conoce más
					</button>
				</Link>
				</div>
			</div>
		</div>
	);
};

export default Main;
