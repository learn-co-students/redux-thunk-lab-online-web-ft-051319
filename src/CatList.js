import React from 'react';

const CatList = (props) => {
    console.log("CatList props: ", props);

    return (
        <div>
            { props.catPics.map(cat => <img src={cat.url} alt="" />) }
        </div>
    )
}

export default CatList;

