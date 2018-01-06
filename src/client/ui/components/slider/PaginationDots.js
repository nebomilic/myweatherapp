import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PaginationDots extends Component {

    renderDots = () => {
        const {numPages, currentPage} = this.props;
        let dots = [];

        for(let i = 0; i < numPages; i++) {
            const className = (i === currentPage)?'wi icon wi-moon-full dot--active':'wi icon wi-moon-full dot';
            dots.push(<i className={className} key={i}></i>);
        }
        return dots;
    }

    render = () => {
        return (
            <div className='pagination-dots'>
                {this.renderDots()}
            </div>  
        );
    }
}

PaginationDots.propTypes = {
    numPages: PropTypes.number,
    currentPage: PropTypes.number
};

export default PaginationDots;