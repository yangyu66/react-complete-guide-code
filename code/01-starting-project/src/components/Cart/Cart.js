import { React, useContext, useState } from 'react';

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import Checkout from './Checkout';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [isChecked, setChecked ]= useState(false)
  const [isSubmitting, setisSubmitting ]= useState(false)
  const [isDone, setisDone]= useState(false)

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const orderHandler = (event) => {
    setChecked(true)
  }

  const cancelHandler = (eventt) => {
    setChecked(false)
  }

  const onOrderConfirm =  (userInfo) => {
    console.log(userInfo)
    setisSubmitting(true)
    const postOrder = async (userInfo) => {
      const resp = await fetch("https://react-http-c381d-default-rtdb.firebaseio.com/orders.json", 
      {
        method: "POST",
        body: JSON.stringify({
          user: userInfo,
          orderedItems: cartCtx.items
        })
      })

      setisSubmitting(false)
      if (!resp.ok) {
        throw new Error('Something went wrong!');
      }
    }

    postOrder(userInfo).catch((error) => {
      console.log(error.message)
    }).then(() => {setisDone(true)})

  }

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes['button--alt']} onClick={props.onClose}>
        Close
      </button>
      {hasItems && <button className={classes.button} onClick={orderHandler}>Order</button>}
    </div>

  )

  const ModalOrders = (
    <div>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>

      {isChecked && <Checkout onOrderConfirm={onOrderConfirm} onCancel={cancelHandler}> </Checkout>}
      {!isChecked && modalActions}
    </div>
  
  )

  const ModalSubmitting = (
    <p> Submitting ...</p>
  )
  
  const ModalSubmited= (
    <p>
      <p> Submited!! </p>
      <div className={classes.actions}>
      <button className={classes['button--alt']} onClick={props.onClose}>
      Close </button>
      </div>
    </p>
  )
  
  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !isDone && ModalOrders}
      {isSubmitting && ModalSubmitting}
      {!isSubmitting && isDone && ModalSubmited}
    </Modal>
  );
};

export default Cart;
