// write your CatList component here
import React, { Component } from 'react';

export default class CatList extends Component {
    render(){
        const cats = this.props.catPics.map(cat => {
            return <img key={cat.id} src={cat.url} alt=''/>;
        });
        return (
            <div>
                {cats}
            </div>
        )
    }
}