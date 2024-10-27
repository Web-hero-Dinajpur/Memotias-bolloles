import { useEffect, useState } from 'react'
import Bottle from './Bottle';

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('bolloles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    },[])
    const handleBottlePurchade=(bottle)=>{
        const newCart = [...cart, bottle];
        setCart(newCart)
    }
    return (
        <div>
           <h2>Bottles available: {bottles.length}</h2>
           <h4>Cart: {cart.length}</h4>
          <div className='Bottles'>
          {
            bottles.map(bottle => <Bottle 
                key={bottle.id} 
                bottle={bottle}
                handleBottlePurchade={handleBottlePurchade}
                ></Bottle>)
           }
          </div>
        </div>
    );
};

export default Bottles;