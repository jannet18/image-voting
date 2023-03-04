import React,{ useState } from 'react';
import Image from './Image';

const ImageContainer = ({id, upvotes, onUpvote }) => {
    const width = 500;
    const height = 500;
    const [vote, setVote] = useState(0);

    const upvoteImage = async () => {
        
        try {
            await fetch(`http://localhost:3000/images/${id}`, {
                method:'PATCH',
                headers:{
                    'Content-type': 'application/json'
                },
                body:JSON.stringify()
            });
            setVote(vote)
            onUpvote();
        }
        catch (error){
            console.log(error)

        }
    }
    return (
        <div className="image-container">
            <Image onClick={upvoteImage} id={id} width={width} height={height}/>
            <p className="upvotes">
                <span className='thumb'>👍</span>
                <span onClick={() => setVote(vote + 1)}>{upvotes}</span>
            </p>
        </div>
    )

}

export default ImageContainer;