import React from 'react';

const Location = ({location}) => {
    return (
        <section className='location'>
                <h2>{location.name}</h2>
                <article className='location-info'>
                    <p><span className="title-info">Type:</span> {location.type}</p>
                    <p><span className="title-info">Dimension:</span> {location.dimension}</p>
                    <p><span className="title-info">Population:</span> {location.residents?.length}</p>
                </article>
        </section>
    );
};

export default Location;