import React, {Component} from 'react';

class Rating extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const color = this.props.color
        const text = this.props.text
        const value = this.props.value

        return (
            <div className={"rating"}>
                {/* 1 START */}
                <i style={{color}} className={
                    value >= 1
                        ? 'fas fa-star'
                        : value >= 0.5
                            ? 'fas fa-star-half-alt'
                            : 'fas fa-star'
                }></i>

                {/* 2 START */}
                <i style={{color}} className={
                    value >= 2
                        ? 'fas fa-star'
                        : value >= 1.5
                            ? 'fas fa-star-half-alt'
                            : 'fas fa-star'
                }></i>

                {/* 3 START */}
                <i style={{color}} className={
                    value >= 3
                        ? 'fas fa-star'
                        : value >= 2.5
                            ? 'fas fa-star-half-alt'
                            : 'fas fa-star'
                }></i>

                {/* 4 START, ToDo: fix half-star on fourth star*/}
                <i style={{color}} className={
                    value >= 4
                        ? 'fas fa-star'
                        : value >= 3.5
                            ? 'fas fa-star-half-alt'
                            : 'fas fa-star'
                }></i>

                {/* 5 START */}
                <i style={{color}} className={
                    value >= 5
                        ? 'fas fa-star'
                        : value >= 4.5
                            ? 'fas fa-star-half-alt'
                            : 'fas fa-star'
                }></i>
                <span>{ text && text }</span>
            </div>
        );
    }
}

export default Rating;