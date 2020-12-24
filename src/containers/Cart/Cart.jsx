import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { productsContext } from '../../contexts/ProductsContext';
import Delete from '../../img/delete.png'
import { calcTotalPrice } from '../../helpers/CalcPrice'
import './Cart.css'
import { Modal, ModalBody } from 'react-bootstrap';
import PaymentForm from '../Payment/Payment';
import Navibar from '../Navibar/Navibar';
import BottomBasket from '../Bottombasket/BottomBasket';
import Footer from '../Footer/Footer';

const Cart = (props) => {
    const {
        getCart,
        products,
        cartData,
        changeCountProducts,
        clearCartAfterPay,
        saveOrderInHistory,
        getBmx,
        deleteProductInCart
    } = useContext(productsContext)

    const [show, setShow] = useState(false)
    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    const [show1, setShow1] = useState(false)
    const handleShow1 = () => setShow1(true)
    const handleClose1 = () => {
        setShow1(false)
        getBmx()
        props.history.push('/')
        clearCartAfterPay()
    }

    useEffect(() => {
        getCart()
    }, [products])

    function switcher(obj) {
        if (!obj.cvc.trim() || !obj.expiry.trim() || !obj.name.trim() || !obj.number.trim()) {
            return alert("Заполните поля")
        }
        else {
            handleClose()
            saveOrderInHistory(JSON.parse(localStorage.getItem("cart")))
            handleShow1()
            localStorage.setItem("cart", null)
        }
    }


    return (
        <>
            <Navibar />
            {!cartData ?
                (
                    <>
                        <div style={{ display: 'flex', justifyContent: "center" }}>
                            <div style={{ height: "200px" }}>

                            </div>
                            <div style={{ textAlign: 'start', marginTop: "20px" }}>
                                <h5 style={{ color: "gray" }}>Ваша корзина пуста</h5>
                            </div>
                        </div>
                    </>
                ) :
                (
                    cartData.totalPrice ?
                        <div>
                            <div className="container-cart-page">
                                <table>
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Название</th>
                                            <th>Кол-во</th>
                                            <th>Цена</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cartData.products.map(item => (
                                            <tr key={item.product.id}>
                                                <td className="cart-image">
                                                    <img className="cart-image" src={item.product.image} alt="" />
                                                </td>
                                                <td>
                                                    {item.product.name}
                                                </td>
                                                <td className="cart-count">
                                                    <input
                                                        style={{ width: '60px' }}
                                                        onChange={(e) => changeCountProducts(e.target.value, item.product.id)}
                                                        min="1"
                                                        type="number"
                                                        value={item.count}
                                                    />
                                                </td>
                                                <td className="cart-price">{item.subPrice} сом</td>
                                                <td style={{ textAlign: "center" }}>
                                                    <img src={Delete} alt="" style={{ cursor: "pointer" }} onClick={() => deleteProductInCart(item)} />
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <div>
                                    <h5>Итого: {calcTotalPrice(cartData.products)}</h5>
                                    <button onClick={handleShow}>Оплатить</button>
                                </div>
                            </div>
                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Оплатить картой</Modal.Title>
                                </Modal.Header>
                                <ModalBody>
                                    <PaymentForm switcher={switcher} />
                                </ModalBody>
                            </Modal>

                            <Modal show={show1} onHide={handleClose1}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Чек</Modal.Title>
                                </Modal.Header>
                                <ModalBody>
                                    <p>Ваш заказ принят. Ожидайте курьера!</p>
                                </ModalBody>
                                <button onClick={handleClose1}>OK</button>
                            </Modal>
                        </div>
                        :
                        <>
                            <div style={{ display: 'flex', justifyContent: "center" }}>
                                <div style={{ height: "200px" }}>

                                </div>
                                <div style={{ textAlign: 'start', marginTop: "20px" }}>
                                    <h5 style={{ color: "gray" }}>Ваша корзина пуста</h5>
                                </div>
                            </div>
                        </>
                )}
            <Footer />
            <BottomBasket />
        </>
    );
};

export default Cart;