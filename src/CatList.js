import React, { Component } from 'react'

export default class CatList extends Component {
   
    render() {
        
        return (
            <div>
                {this.props.catPics.map(catPic => <img alt="catgif" src={catPic.url}/>)}
            </div>
        )
    }
}



