import React from 'react';
import Logo from './logo.js';
import Navigate from './navigate-header.js';
import Slide from './slide.js';
import '../styles/header.css';

const slideData = [
	{
		id: 1,
		title: 'Honestidad',
		concept: 'Nuestra Escencia',
		img: '../assets/img/header-images/banner01.jpg',
		colorText: 'red'
	},
	{
		id: 2,
		title: 'Compromiso',
		concept: 'Nuestra Escencia',
		img: 'header-images/banner02.jpg',
		colorText: 'yellow'
	},
	{
		id: 3,
		title: 'Profesionalismo',
		concept: 'Nuestra Escencia',
		img: 'header-images/banner03.jpg',
		colorText: 'orange'
	},
	{
		id: 4,
		title: 'Excelencia',
		concept: 'Nuestra Escencia',
		img: 'header-images/banner04.jpg',
		colorText: 'cian'
	},
	{
		id: 5,
		title: 'Lealtad',
		concept: 'Nuestra Escencia',
		img: 'header-images/banner05.jpg',
		colorText: 'purple'
	}
];

function Header() {
	return (
		<header className="header">
			{/* // navbar //*/}
			<div className="navbar  navbar-static-top">
				<div className="container">
					{/* Logo component */}
					<Logo /> {/*  navigatin component */}
					<Navigate />
				</div>
			</div>
			{/* // navbar //*/}
			{/*  // banner Slider //*/}

			<div className="header_v1">
				<div className="banner" id="banner">
					<div className="slides-container" style={{ height: '100%' }}>
						{/*  // slide //*/}

						{slideData.map((props) => (
							<Slide key={props.id} title={props.title} concept={props.concept} img={props.img} colorText={props.colorText} />
						))}

						{/*  // slide //*/}
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
