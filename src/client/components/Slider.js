import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WeatherCard from './WeatherCard';
class Slider extends Component {

    // TODO: add key listeners in order to control slider with left and right slider

    componentWillMount() {
        this.resetState();
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
    }

    handleResize = () => {
        this.resetState();
    }  
    
    resetState = () => {
        this.setState({pageSize: this._calcPageSize(), translateValue: 0});
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

    previousPage = () => {
        this.setState({translateValue: this.state.translateValue + this._slideWidth()});
    }
    
    nextPage = () => {
        this.setState({translateValue: this.state.translateValue - this._slideWidth()});
    }

    _calcTranslateValue = () => {
        const width = document.body.offsetWidth;
        return width;
    }

    _calcPageSize() {
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

    render() {

        const {translateValue} = this.state;

        return (

            <div className='slider' >
                <div className='left-control'><a href='#' onClick={this.previousPage}>&lt;</a></div>
                <div className='weather-slider'>
                    <div className='slider-wrapper'
                        style={{
                            transform: `translateX(${translateValue}px)`,
                            transition: 'transform ease-out 0.45s'
                        }}>
                        { this.renderSlides() }
                    </div>
                </div>
                <div className='right-control'><a href='#' onClick={this.nextPage}>&gt;</a></div>
            </div>

        );

    }

}

Slider.propTypes = {
    forecast: PropTypes.array
};

export default Slider;