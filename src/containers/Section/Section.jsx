import React, { useContext, useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { productsContext } from '../../contexts/ProductsContext';
import './Section.css'

const Section = () => {
    const { getLastProducts, products } = useContext(productsContext)

    useEffect(() => {
        getLastProducts()
    }, [])

    let length = products.length - 8
    let arr = products.filter((item, index) => index >= length)

    return (
        <Container className="section">
            <h4>Новинки</h4>
            <div className="section-card">
                {arr.length ? arr.map(item => (
                    <Link key={item.id} to={`/product-details${item.id}`}>
                        <Card className="grow" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={item.image} />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Link>
                )) : null}
            </div>
        </Container>
    );
};

export default Section;