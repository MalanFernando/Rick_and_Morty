import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ResidentInfo = ({url}) => {

    const[character, setCharacter] = useState()
    const[color, setColor] = useState("green")

    useEffect(()=>{
        axios.get(url)
            .then(res=>setCharacter(res.data));
        
            if (character?.status === "Alive") {
                setColor("green")
            }else if (character?.status === "Dead") {
                setColor("red")
            }else{
                setColor("gray")
            }
        },[url,character?.status])
        
    return (
        <section className='card-item'>
            <img src={character?.image || 'https://via.placeholder.com/300x300/111217/FFFFFF/?text=Loading...'} alt="" />
            <h5 className='status'>
                <span className={`status-circle ${color}`}></span>
                {character?.status}
            </h5>
            <article className='card-info'>
            <h4>{character?.name}</h4>
                <h5>Specie: </h5> 
                <p>{character?.species}</p>
                <h5>Origin: </h5>
                <p>{character?.origin.name}</p>
                <h5>Num episodes: </h5>
                <p>{character?.episode.length}</p>
            </article>
        </section>
    );
};

export default ResidentInfo;