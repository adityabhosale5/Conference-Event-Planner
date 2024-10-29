import React, { useState } from "react";
import "./Home.css";
import TotalCost from "./TotalCost";
import { useSelector, useDispatch } from "react-redux";
import { incrementQuantity } from "./plantSlice";
import { incrementafQuantity } from "./afplantSlice";
import { BsCart } from "react-icons/bs";
import{ Typography} from '@mui/material';

const Home = ({showplant, setShowplant}) => {
    const [showItems, setShowItems] = useState(false);
	const [count, setCount] = useState(0);
    const ap_plants = useSelector((state) => state.plant);
    const af_plants = useSelector((state) => state.afplant);
    const dispatch = useDispatch();

    const handleToggleItems = () => {
        console.log("handleToggleItems called");
        setShowItems(!showItems);
    };

    const handleapAddToCart = (index) => {
        dispatch(incrementQuantity(index));
        setCount((prevCount) => prevCount + 1);
    };

    const handleafAddToCart = (index) => {
        dispatch(incrementafQuantity(index));
        setCount((prevCount) => prevCount + 1);
    };

    const calculateTotalCost = () => {
        let totalCost = 0;
        ap_plants.forEach((item) => {
            totalCost += item.cost * item.quantity;
        });
        af_plants.forEach((item) => {
            totalCost += item.cost * item.quantity;
        });
        return totalCost;
    };
    const plantTotalCost = calculateTotalCost();

    return (
        <>
            <navbar className="navbar_event">
                <div className="company_logo">
                    <Typography
                        fontWeight="bold" 
                        fontSize="clamp(1rem, 1.5rem, 2.25rem)"
                        color="0d5700"
                        onClick = {() => setShowplant(!showplant)}
                        sx ={{"&:hover":{
                        cursor: "pointer",
                        }}}
                    >
                    BloomEase Solutions
                    </Typography>       
                </div>
                <div className="right-btn">
                    <button className="details_button" onClick={handleToggleItems}>
                    <BsCart style={{ fontSize: '38px', color: '#333' }} />
                        {count >= 0 && (
                            <span style={{
                                position: 'absolute',
                                top: '24.5px',
                                right: '33.5px',
                                transform: 'translate(50%, -50%)', 
                                color: 'black',
                                borderRadius: '50%',
                                padding: '2px 6px',
                                fontSize: '16px',
                                fontWeight: 'bold'
                            }}>
                                {count}
                            </span>
                        )}
                    </button>
                </div>
            </navbar>
            <div className="main_container">
                {!showItems ? (
                    <div className="items-information">
                        <div id="ap_plant" className="plant_container container_main">
                            <div className="text">
                                <h1>AIR PURIFYING PLANTS</h1>
                            </div>

                            <div className="plant_selection">
                                {ap_plants.map((item, index) => (
                                    <div className="plant_main" key={index}>
                                        <div className="text">{item.name}</div>

                                        <div className="img">
                                            <img src={item.img} alt={item.name} />
                                        </div>

                                        <div className="cost">Rs. {item.cost}</div>

                                        <div className="desc">{item.desc}</div>

                                        <div className="button_container">
                                            <button
                                                className={`add-to-cart-btn ${
                                                    item.quantity != 0 ? "btn-disabled" : "btn-active"
                                                }`}
                                                onClick={() => handleapAddToCart(index)}
                                                disabled={item.quantity != 0}
                                            >
                                                {item.quantity != 0 ? "Added" : "Add to Cart"}
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div id="aromaticfragrant_plants" className="plant_container container_main">
                            <div className="text">
                                <h1>AROMATIC FRAGRANT PLANTS</h1>
                            </div>

                            <div className="plant_selection">
                                {af_plants.map((item, index) => (
                                    <div className="plant_main" key={index}>
                                        <div className="text">{item.name}</div>

                                        <div className="img">
                                            <img src={item.img} alt={item.name} />
                                        </div>

                                        <div className="cost">Rs. {item.cost}</div>

                                        <div className="desc">{item.desc}</div>

                                        <div className="button_container">
                                            <button
                                                className={`add-to-cart-btn ${
                                                    item.quantity != 0 ? "btn-disabled" : "btn-active"
                                                }`}
                                                onClick={() => handleafAddToCart(index)}
                                                disabled={item.quantity != 0}
                                            >
                                                {item.quantity != 0 ? "Added" : "Add to Cart"}
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="total_amount_detail">
                        <TotalCost
                            totalCosts={plantTotalCost}
                            count={count}
                            setcount={setCount}
                            showItems = {showItems}
                            handleToggleItems={handleToggleItems}
                        />
                    </div>
                )}
            </div>
        </>
    );
};

export default Home;
