import React from 'react';

const Image = ({id, width, height}) => {
    const url = `https://picsum.photos/id/${id}/${width}/${height}`

    return (
        <div className="image">
            <img src={url} alt="/" />
        </div>
    )

}
export default Image;