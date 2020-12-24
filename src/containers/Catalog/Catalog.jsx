import React from 'react';
import Navibar from '../Navibar/Navibar';
import './Catalog.css'
import { Link } from 'react-router-dom'
import BottomBasket from '../Bottombasket/BottomBasket';

const Catalog = () => {
    return (
        <>
            <Navibar />
            <div>
                <div className="container_catalog">
                    <div className="catalog-title">
                        <h2>Каталог</h2>
                    </div>
                    <div className="block-card">
                        <Link to="/bmx">
                            <div>
                                <div>
                                    <p>B</p>
                                    <p>M</p>
                                    <p>X</p>
                                </div>
                                <div className="catalog-img bmx"></div>
                            </div>
                        </Link>
                        <Link to="/fboard">
                            <div>
                                <div>
                                    <p>F</p>
                                    <p>B</p>
                                    <p>O</p>
                                    <p>A</p>
                                    <p>R</p>
                                    <p>D</p>
                                </div>
                                <div className="catalog-img mtb"><img src="https://opt-1637796.ssl.1c-bitrix-cdn.ru/upload/iblock/c54/c54ba830b6430ef8dc7a29d8151695e6.png?16030623303377" alt=""/></div>
                            </div>
                        </Link>
                        <Link to="/samokats">
                            <div>
                                <h5>Самокаты</h5>
                                <div className="catalog-img samokat"></div>
                            </div>
                        </Link>
                        <Link to="/skate">
                            <div>
                                <h5>Скейтборды</h5>
                                <div className="catalog-img skate"></div>
                            </div>
                        </Link>
                        <Link to="/roller">
                            <div>
                                <h5>Ролики</h5>
                                <div className="catalog-img roller"></div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <BottomBasket/>
        </>
    );
};

export default Catalog;