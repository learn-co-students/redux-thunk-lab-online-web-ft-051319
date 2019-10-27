import React from 'react';

const CatList = ({catPics}) => {
    const cats = catPics.map(catPic => <img key={catPic.id} src={catPic.url} />)
    return (
        <div>
            {cats}
        </div>
    )
}

export default CatList;