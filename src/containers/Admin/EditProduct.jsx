import React, { useContext, useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { adminContext } from '../../contexts/AdminContext';

const EditProduct = (props) => {

    // check on admin
    const [state, setState] = useState(false)
    let checkStatus = JSON.parse(localStorage.getItem("login"))
    useEffect(() => {
        if (checkStatus) setState(true)
    }, [])

    const { productToEdit, saveEditedProduct } = useContext(adminContext)
    const [editedProduct, setEditedProduct] = useState(productToEdit)
    console.log(productToEdit)
    useEffect(() => {
        setEditedProduct(productToEdit)
    }, [productToEdit])

    function updateProduct(e) {
        let obj = {
            ...editedProduct,
            [e.target.name]: e.target.value
        }
        setEditedProduct(obj)
    }

    return (
        <>
            {state ?
                (
                    <>
                        {editedProduct ?
                            (
                                <div>
                                    <div>
                                        <h1>Редактировать товар</h1>
                                        <div>
                                            <select onChange={updateProduct} name="category" id="">
                                                <option value="">Выберите категорию</option>
                                                <option value="bmx">BMX</option>
                                                <option value="fboard">Fboard</option>
                                                <option value="roller">РОЛИКИ</option>
                                                <option value="skate">СКЕЙТБОРД</option>
                                            </select>
                                            <input onChange={updateProduct} value={editedProduct.name} type="text" placeholder="Название" name="name" />
                                            <input onChange={updateProduct} value={editedProduct.manufacturer} type="text" placeholder="Поизводитель" name="manufacturer" />
                                            <input onChange={updateProduct} value={editedProduct.weight} type="text" placeholder="Вес" name="weight" />
                                            <input onChange={updateProduct} value={editedProduct.warranty} type="text" placeholder="Гарантия" name="warranty" />
                                            <input onChange={updateProduct} value={editedProduct.description} type="text" placeholder="Описание" name="description" />
                                            <input onChange={updateProduct} value={editedProduct.year} type="text" placeholder="Год" name="year" />
                                            <input onChange={updateProduct} value={editedProduct.image} type="text" placeholder="Фото" name="image" />
                                            <input onChange={updateProduct} value={editedProduct.price} type="text" placeholder="Цена" name="price" />
                                            <input onChange={updateProduct} value={editedProduct.color} type="text" placeholder="Цвет" name="color" />
                                            <button onClick={() => saveEditedProduct(editedProduct, props.history)}>Save</button>
                                        </div>
                                    </div>
                                </div>
                            )
                            :
                            (
                                <h1>Loading <Spinner /></h1>
                            )}
                    </>
                )
                :
                (
                    <h1>Авторизуйтесь как админ</h1>
                )}
        </>
    );
};

export default EditProduct;