import React, { Component } from 'react';
import Default from './img/product-placeholder.png';
import './App.css';

class App extends Component {
	state = {
		headerQuery: 'Header Text',
		priceQuery: 'ex: 5$',
		productQuery: 'ex: T-Shirt',
		image: Default
	}

	changedHeaderQuery = (e) => this.setState({headerQuery: e.target.value})
	changedPriceQuery = (e) => this.setState({priceQuery: e.target.value})
	changedProductQuery = (e) => this.setState({productQuery: e.target.value})

	onOptionsClicked = () => {
		const more = document.querySelector('#more');
		const play = document.querySelector('#play');
		const show = document.querySelector('#show');
		const url = document.querySelector('#url');

		const moreButton = document.querySelector('.more-button');
		const playButton = document.querySelector('.play-button');
		const showButton = document.querySelector('.show-button');
		const urlButton = document.querySelector('.url-button');

		if (more.checked === true) {
			moreButton.style.display="block";
		} else {
			moreButton.style.display="none";
		}

		if (play.checked === true) {
			playButton.style.display="block";
		} else {
			playButton.style.display="none";
		}

		if (show.checked === true) {
			showButton.style.display="block";
		} else {
			showButton.style.display="none";
		}

		if (url.checked === true) {
			urlButton.style.display="block";
		} else {
			urlButton.style.display="none";
		}
	}

	changedImage = (ev) => {
		if (ev.target.files && ev.target.files[0]) {
			let reader = new FileReader();
			reader.onload = (e) => this.setState({image: e.target.result})
			reader.readAsDataURL(ev.target.files[0])
		}
	}

	render() {
		return (
			<div className="App">
				<h1 aria-label="header">NasNav Task</h1>
				<main aria-label="main">
					<h3 aria-label="Header">Header <input type="text" placeholder="Header text" onChange={this.changedHeaderQuery}/></h3>
					<h3 aria-label="Header">Price <input type="text" placeholder="ex: 5$" onChange={this.changedPriceQuery}/></h3>
					<h3 aria-label="Header">Product Name <input type="text" placeholder="ex: T-Shirt" onChange={this.changedProductQuery}/></h3>
					<input type="file" name="filename" accept="image/gif, image/jpeg, image/png" onChange={this.changedImage}/>
					<h3 className="buttons-title">Buttons<br/></h3>
          <input type="checkbox" id="more" className="options"
                 name="Options" value="More" onClick={this.onOptionsClicked}/>
          <label htmlFor="more">More<br/></label>

          <input type="checkbox" id="play" className="options"
                 name="Options" value="Play" onClick={this.onOptionsClicked}/>
          <label htmlFor="play">Play<br/></label>

          <input type="checkbox" id="show" className="options"
                 name="Options" value="Show" onClick={this.onOptionsClicked}/>
          <label htmlFor="show">Show<br/></label>

          <input type="checkbox" id="url" className="options"
                 name="Options" value="URL" onClick={this.onOptionsClicked}/>
          <label htmlFor="url">URL</label>
				</main>
				<aside>
					<h3>{this.state.headerQuery}</h3>
					<h3>{this.state.priceQuery}</h3>
					<img src={this.state.image} className="default-img" alt="Selected File"/>
					<h3>{this.state.productQuery}</h3>
					<div className="buttons">
						<button className="more-button option-button" tabIndex="1">More</button>
						<button className="play-button option-button" tabIndex="1">Play</button>
						<button className="show-button option-button" tabIndex="1">Show</button>
						<button className="url-button option-button" tabIndex="1">URL</button>
					</div>
				</aside>
			</div>
		);
	}
}

export default App;
