import axios from 'axios';
import React, { useEffect} from 'react';
import ResidentInfo from './ResidentInfo';
import Location from './Location';

const Content = ({location, setLocation}) => {

    useEffect(()=>{
        const random = Math.floor(Math.random() * 126) + 1;
        axios.get(`https://rickandmortyapi.com/api/location/${random}`)
            .then(res=> setLocation(res.data))
    },[setLocation])

    return (
        <div>
            <Location location={location}/>
            <div className='cards'>
            {location.residents?.length === 0 ? <h2>No characters found</h2> : location.residents?.map(resident=>(
                <ResidentInfo url={resident} key={resident}/>
            ))}
            </div>
        </div>
    );
};

export default Content;