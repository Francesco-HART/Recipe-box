import React from 'react';

const Card = ({details}) => {
    return (
        <div className='Card'>
            <div className='recette'>
                <h2> {details.nom} </h2>
            </div>
        </div>
    );
};

export default Card;