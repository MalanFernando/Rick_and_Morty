import axios from 'axios';

const Search = ({setLocation, setId, id}) => {

    const searchCharacter = ()=>{
        if (id <= 126) {
            axios.get(`https://rickandmortyapi.com/api/location/${id}`)
                .then(res=> setLocation(res.data))  
        }else {
            alert("Limit up to 126 - try again")
        }
    }

    const keyEnter = event=>{
        if (event.keyCode === 13) {
            if (id <= 126) {
                axios.get(`https://rickandmortyapi.com/api/location/${id}`)
                    .then(res=> setLocation(res.data))  
            }else {
                alert("Limit up to 126 - try again")
            }
        }
    } 


    return (
        <div className='search-box'>
            <input type="text" onChange={e=>setId(e.target.value)} onKeyDown={e=> keyEnter(e)} value={id} placeholder='Search...'/>
            <button onClick={searchCharacter}>
                <i className="fa-solid fa-magnifying-glass"></i>
            </button>
        </div>
    );
};

export default Search;