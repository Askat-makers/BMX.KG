import React, { useContext } from 'react';
import { Button, Container } from 'react-bootstrap';
import './BottomBasket.css'
import { faShoppingCart, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { productsContext } from '../../contexts/ProductsContext';
import { Link } from 'react-router-dom';

const BottomBasket = () => {
    const { productsCountInCart ,productsCountInFavorites } = useContext(productsContext)

    return (
        <div className="bottom-block">
            <Container className="container_bottom-block">
                <a href='tel:+996706661616'>+996(706)66-16-16</a>
                <div className="basket-block">
                    <Link to="/favorites" style={{marginRight: "10px"}}>
                        <Button className="btn_bottom-basket">
                            <FontAwesomeIcon icon={faStar} />
                            <span id="shop-count">{productsCountInFavorites}</span>
                        </Button>
                    </Link>
                    <Link to="/cart">
                        <Button className="btn_bottom-basket">
                            <FontAwesomeIcon icon={faShoppingCart} />
                            <span id="shop-card">Корзина</span>
                            <span id="shop-count">{productsCountInCart}</span>
                        </Button>
                    </Link>
                </div>
            </Container >
        </div >
    );
};

export default BottomBasket;