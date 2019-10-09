import React from 'react'

const CatList = (props) => {

    return (
        <div>
            { props.catPics.map(catPic => <img src={catPic.url} alt="" key={catPic.id} />) }
        </div>
    )
}

export default CatList;

