import React, { useEffect, useState } from 'react';
import './Navibar.css'
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.svg'

const Navibar = () => {

    const [state, setState] = useState(false)
    let checkStatus = JSON.parse(localStorage.getItem("user"))
    useEffect(() => {
        if (checkStatus) setState(true)
    }, [])

    return (
        <>
            <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-between">
                        <Nav>
                            <Nav>
                                <Link className="nav-link" to="/">
                                    Главная
                                </Link>
                            </Nav>
                            <Nav>
                                <Link className="nav-link" to="/bmx">
                                    BMX
                                </Link>
                            </Nav>
                            <Nav>
                                <Link className="nav-link" to="/skate">
                                    Скейтборды
                                </Link>
                            </Nav>
                            <Nav>
                                <Link className="nav-link" to="/samokats">
                                    Самокаты
                                </Link>
                            </Nav>
                        </Nav>
                        {state ?
                            (
                                <Nav>
                                    <Link to="/profile" className="nav-link" role="button">
                                        Профиль
                                    </Link>
                                </Nav>
                            )
                            :
                            (
                                <Nav>
                                    <Link to="/auth" className="nav-link" role="button">
                                        Вход
                                    </Link>
                                    <Link to="/registration" className="nav-link" role="button">
                                        Регистрация
                                    </Link>
                                </Nav>
                            )}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div>
                <div className="under-navbar-block">
                    <div className="navbar-logo"></div>
                    <div className="under-navbar">
                        <div>
                            <Link to="/"><img className="navbar-img" src={logo} alt="" />Rider.Kg</Link>
                        </div>
                    </div>
                    <div className="search-block">
                        <input className="search-inp" type="text" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navibar;