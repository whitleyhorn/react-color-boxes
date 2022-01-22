import React, { Component } from 'react';
import Box from './Box';
import './ColorBoxes.css';

class ColorBoxes extends Component {
	static defaultProps = {
		nBoxes: 18
	};
    constructor(props) {
        super(props);
        this.state = {
            // Creates array of length `nBoxes`, where each value is a random color
            boxes: Array.from(Array(props.nBoxes)).map(val => this.getRandomColor())
        };
        console.log(this.state);
	}

	getRandomColor() {   
		var letters = '0123456789ABCDEF';   
		var color = '#';   
		for (var i = 0; i < 6; i++) {     
			color += letters[Math.floor(Math.random() * 16)];   
		}   
		return color; 
	}

    changeColor(i) {
        console.log(i);
    }

    render(){
        return <div className="ColorBoxes">
                {
                    this.state.boxes.map((c, i) => {
                        return <Box color={c} onClickEvent={this.changeColor.bind(this, i)}/>
                    })
                }
            </div>;
    }
}

export default ColorBoxes;
