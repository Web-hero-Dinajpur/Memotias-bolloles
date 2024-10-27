import { useEffect, useState } from 'react'
import Bottle from './Bottle';

const Bottles = () => {
    const [bottles, setBottles] = useState([]);

    useEffect(()=>{
        fetch('bolloles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    },[])
    return (
        <div>
           <h2>Bottles: {bottles.length}</h2>
          <div className='Bottles'>
          {
            bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle}></Bottle>)
           }
          </div>
        </div>
    );
};

export default Bottles;