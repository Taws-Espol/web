import './style.css';
import React from 'react';
import logo from '../assets/logoTaws1.png';


const Main = () => {
	return (
		<div className="Main grid grid-cols-2 max-sm:grid-cols-1">
			<div className="flex-col">
				<h1 className="text-white font-semibold text-5xl">BE DIFFERENT</h1>
				<h1 className="text-tawsBlue font-bold text-5xl">BE TAWS</h1>
				<p className="text-white my-4 text-xl">
					Taws es un grupo estudiantil politécnico que busca contribuir a la
					formación integral de jóvenes investigadores precursores en el
					desarrollo de tecnologías de la información.
				</p>
				<a href='https://www.instagram.com/taws_espol/' target='_blank'>
					<button className="bg-tawsBlue rounded-full p-2 w-4/12 mt-2 ml-0.5 font-semibold">
						Conoce más
					</button>
				</a>
			</div>
			<img width={"200"} className='justify-self-center' src={logo} alt={'Logo Taws'} />
		</div>
	);
};

export default Main;
