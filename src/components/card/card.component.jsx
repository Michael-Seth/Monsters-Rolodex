import React from 'react';
import './card.style.css';

export const Card = osas => (
    <div className='card-container card-container:hover'>
        <img alt='monsters' src = {`https://robohash.org/${osas.monster.id}?set=set2&size=180x180`} />
        <h2>{osas.monster.name}</h2>
<p>{osas.monster.email}</p>
    </div>
)