import './Bottle.css'

const Bottle = ({bottle, handleBottlePurchade}) => {
    const {img, name, price} = bottle;
    return (
        <div className="Bottle">
            <h2>Bottle Name: {name}</h2>
            <img src={img} alt="" />
            <p>Price: {price}</p>
            <button onClick={handleBottlePurchade}>Parches</button>
        </div>
    );
};

export default Bottle;