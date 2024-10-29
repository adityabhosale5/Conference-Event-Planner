import React, { useState } from 'react';
import "./TotalCost.css";
import { useSelector, useDispatch } from "react-redux";
import { incrementQuantity, decrementQuantity, decrementToZeroQuantity } from "./plantSlice";
import { incrementafQuantity, decrementafQuantity, decrementToZeroafQuantity } from "./afplantSlice";
import checkout from './assets/shopping-bag.png'

const TotalCost = ({ totalCosts, count, setcount, setItems, handleToggleItems}) => {

	const [showPopup, setShowPopup] = useState(false);
	const ap_plants = useSelector((state) => state.plant.filter((item) => item.quantity > 0));
	const af_plants = useSelector((state) => state.afplant.filter((item) => item.quantity > 0));
	const dispatch = useDispatch();

	
	const handleAddToCart = (id) => {
        dispatch(incrementQuantity(id));
    };

	const handleAddToCartt = (id) => {
        dispatch(incrementafQuantity(id));
    };

	const handleRemoveFromCart = (id) => {
        const plant = ap_plants.find((item) => item.id === id);
        if (plant && plant.quantity > 0) {
          dispatch(decrementQuantity(id));
		  if(plant.quantity === 1) setcount(count = count - 1);
        }
    };

	const handleRemoveFromCartt = (id) => {
        const plant = af_plants.find((item) => item.id === id);
        if (plant && plant.quantity > 0) {
          dispatch(decrementafQuantity(id));
		  if(plant.quantity === 1) setcount(count = count - 1);
        }
    };


	const handleDelete = (id) => {
		dispatch(decrementToZeroQuantity(id));
		setcount(count = count - 1);
	}
	const handleDeletee = (id) => {
		dispatch(decrementToZeroafQuantity(id));
		setcount(count = count - 1);
	}

	const handleCheckout = () => {
		ap_plants.forEach((item) => {
            dispatch(decrementToZeroQuantity(item.id));
        });
		af_plants.forEach((item) => {
            dispatch(decrementToZeroafQuantity(item.id));
        });
		setcount(count = 0);
		setShowPopup(true);
	};


	return (
		<div className="pricing-app">
			<div className="header">
				Total Cart Amount: Rs. {totalCosts}
			</div>
			<div className="selected_plants">
				{ap_plants.length > 0 ? (
					ap_plants.map((item) => (
						<div className="selected_plant" key={item.id}>
							<div className="img">
								<img src={item.img} alt={item.name} />
							</div>

							<div className='desc'>
								<div className="text">{item.name}</div>
								<div className="cost">Rs. {item.cost}</div>

								<div className="button_containerr">
									<button
										className={
											item.quantity === 1 ? "btn-warning btn-disabled" : "btn-warning btn-plus"
										}
										disabled={item.quantity === 1}
										onClick={() => handleRemoveFromCart(item.id)}
									>
										&#8211;
									</button>

									<span className="selected_count">
										{item.quantity > 0 ? ` ${item.quantity}` : "0"}
									</span>

									<button
										className={
											item.quantity === 10 ? "btn-success btn-disabled" : "btn-success btn-plus"
										}
										onClick={() => handleAddToCart(item.id)}
									>
										&#43;
									</button>
								</div>

								<div className="pcost">Total: Rs. {item.cost * item.quantity}</div>
								<button className="del" onClick={() => handleDelete(item.id)}>Delete</button>
							</div>
						</div>
					))
				) : (
					<></>
				)}
				{af_plants.length > 0 ? (
					af_plants.map((item) => (
						<div className="selected_plant" key={item.id}>
							<div className="img">
								<img src={item.img} alt={item.name} />
							</div>

							<div className='desc'>
								<div className="text">{item.name}</div>
								<div className="cost">Rs. {item.cost}</div>

								<div className="button_containerr">
									<button
										className={
											item.quantity === 1 ? "btn-warning btn-disabled" : "btn-warning btn-plus"
										}
										disabled={item.quantity === 1}
										onClick={() => handleRemoveFromCartt(item.id)}
									>
										&#8211;
									</button>

									<span className="selected_count">
										{item.quantity > 0 ? ` ${item.quantity}` : "0"}
									</span>

									<button
										className={
											item.quantity === 10 ? "btn-success btn-disabled" : "btn-success btn-plus"
										}
										onClick={() => handleAddToCartt(item.id)}
									>
										&#43;
									</button>
								</div>

								<div className="pcost">Total: Rs. {item.cost * item.quantity}</div>
								<button className="del" onClick={() => handleDeletee(item.id)}>Delete</button>
							</div>
						</div>
					))
				) : (
					<></>
				)}
			</div>

			<div className="btns">
				<button className="continue" onClick={() => handleToggleItems(!setItems)}>Continue Shopping</button>
				<button className="checkout" onClick={() => handleCheckout()}>Checkout</button>
			</div>

			{showPopup && (
				<div className="popup">
					<div className="popup-content">
						<img src={checkout} alt="Thank you" />
						<p>
							Thanks for ordering!<br></br>
							Stay tuned for delivery updates!
						</p>
						<button onClick={() => setShowPopup(false)}>Close</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default TotalCost;
