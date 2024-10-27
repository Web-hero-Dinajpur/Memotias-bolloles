import './Bottle.css'

const Bottle = ({bottle}) => {
    const {img, name, price} = bottle;
    return (
        <div className="Bottle">
            <h2>Bottle Name: {name}</h2>
            <img src={img} alt="" />
            <p>Price: {price}</p>
        </div>
    );
};

export default Bottle;