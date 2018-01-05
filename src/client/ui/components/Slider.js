import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WeatherCard from './WeatherCard';
import Swipe from '../../utils/Swipe';
class Slider extends Component {

    // TODO: add key listeners in order to control slider with left and right slider

    componentWillMount = () =>  {
        this.resetState();
        this.handleKeyboard();
    }

    componentDidMount = () => {
        window.addEventListener('resize', this.handleResize);
        this.handleSwipe();
    }

    handleResize = () => {
        this.resetState();
    }  
    
    resetState = () => {
        const pageSize = this._calcPageSize();
        const {forecast} = this.props;

        const numPages = Math.ceil(forecast.length / pageSize);
        this.setState({pageSize: this._calcPageSize(), translateValue: 0, currentPage: 0, numPages: numPages});
    }
    
    renderSlides = () => {
        const {pageSize} = this.state;
        const {forecast} = this.props;

        let slides = [];
        let numPages = Math.ceil(forecast.length / pageSize);
    
        for(let i = 0; i <= numPages; i++) {            
            slides.push(<div className='weather-card-slide' key={i} >
                {this.props.forecast.slice(i*pageSize, i*pageSize+pageSize)
                    .map((item, j)=> <WeatherCard data={item} key={j}/>)}</div>);
    
        }
        return slides;
    }

    handleKeyboard = () => {
        window.onkeyup = (e) => {
            var key = e.keyCode ? e.keyCode : e.which;
         
            if (key == 37) {
                this.previousPage();
            }else if (key == 39) {
                this.nextPage();
            }
        };
    }

    handleSwipe = () => {
        new Swipe(document.getElementById('slider'), (event, direction) => {
            event.preventDefault();            
            switch (direction) {            
            case 'left':
                this.nextPage();
                break;
            case 'right':
                this.previousPage();
                break;
            }
        });
    }

    previousPage = () => {
        if (this.state.currentPage > 0) {

            if (this.state.currentPage === 1) {
                this._toggleActiveStyle(leftArrow);
            }

            if (this.state.currentPage === this.state.numPages - 1) {
                this._toggleActiveStyle(rightArrow);
            }

            this.setState({translateValue: this.state.translateValue + this._slideWidth(),
                currentPage: this.state.currentPage-1 
            });
        }
    }
    
    nextPage = () => {
        if (this.state.currentPage < this.state.numPages - 1) {

            if (this.state.currentPage === this.state.numPages - 2) {
                this._toggleActiveStyle(rightArrow);
            }

            if (this.state.currentPage === 0) {
                this._toggleActiveStyle(leftArrow);
            }

            this.setState({translateValue: this.state.translateValue - this._slideWidth(),
                currentPage: this.state.currentPage+1 
            });
        }
    }

    _toggleActiveStyle = (element) => {
        element.classList.toggle('control');
        element.classList.toggle('control--disabled');
    }

    _calcTranslateValue = () => {
        const width = document.body.offsetWidth;
        return width;
    }

    _calcPageSize = () => {
        const width = document.body.offsetWidth;
        // conditions are based on media queries in main.scss
        let pageSize = 3;
        if (width <= 380) {
            pageSize = 1;
        } else if (width > 380 && width <= 600) {
            pageSize = 2;
        } else if (width >= 1200) {
            pageSize = 4;
        }

        return pageSize;

    }  

    _slideWidth = () => {
        const slide = document.querySelector('.weather-card-slide');
        return slide.clientWidth;
    }

    render = () => {

        const {translateValue} = this.state;

        return (

            <div className='slider' id='slider'>
                <div className='left-control' onClick={this.previousPage}>
                    <span id='leftArrow' className='glyphicon glyphicon-chevron-left control--disabled'></span>
                </div>
                <div className='weather-slider'>
                    <div className='slider-wrapper'
                        style={{
                            transform: `translateX(${translateValue}px)`,
                            transition: 'transform ease-out 0.45s'
                        }}>
                        { this.renderSlides() }
                    </div>
                </div>
                <div className='right-control' onClick={this.nextPage}>
                    <span id='rightArrow' className='glyphicon glyphicon-chevron-right control'></span>
                </div>
            </div>

        );

    }

}

Slider.propTypes = {
    forecast: PropTypes.array
};

export default Slider;