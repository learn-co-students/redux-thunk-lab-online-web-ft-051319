import React from 'react';

const CatList = ({catPics}) => {
    const cats = catPics.map(pic => <img key={pic.id} src={pic.url} alt={pic.source_url} />)

    return (
        <div>
            {cats}
        </div>
    )
}

export default CatList;