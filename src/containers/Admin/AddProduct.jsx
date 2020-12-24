import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { adminContext } from '../../contexts/AdminContext';

const AddProduct = () => {

    // check on admin
    const [state, setState] = useState(false)
    let checkStatus = JSON.parse(localStorage.getItem("login"))
    useEffect(() => {
        if (checkStatus) setState(true)
    })

    const { addProduct } = useContext(adminContext)

    const [newProduct, setNewProduct] = useState({})

    function createNewProduct(e) {
        let obj = {
            ...newProduct,
            [e.target.name]: e.target.value,
            comments: [],
            likes: 0
        }
        setNewProduct(obj)
        console.log(obj)
    }

    return (
        <>
            {state ? (
                <div>
                    <h1>Добавить товар</h1>
                    <div>
                        <select onChange={createNewProduct} name="category" id="">
                            <option value="">Выберите категорию</option>
                            <option value="bmx">BMX</option>
                            <option value="fboard">Fboard</option>
                            <option value="roller">РОЛИКИ</option>
                            <option value="skate">СКЕЙТБОРД</option>
                            <option value="samokat">САМОКАТЫ</option>
                        </select>
                        <input onChange={createNewProduct} type="text" placeholder="Название" name="name" />
                        <input onChange={createNewProduct} type="text" placeholder="Поизводитель" name="manufacturer" />
                        <input onChange={createNewProduct} type="text" placeholder="Вес" name="weight" />
                        <input onChange={createNewProduct} type="text" placeholder="Гарантия" name="warranty" />
                        <input onChange={createNewProduct} type="text" placeholder="Описание" name="description" />
                        <input onChange={createNewProduct} type="text" placeholder="Год" name="year" />
                        <input onChange={createNewProduct} type="text" placeholder="Фото" name="image" />
                        <input onChange={createNewProduct} type="text" placeholder="Цена" name="price" />
                        <input onChange={createNewProduct} type="text" placeholder="Цвет" name="color" />
                        <Link to="/admin">
                            <button onClick={() => addProduct(newProduct)}>Add</button>
                        </Link>
                    </div>
                </div>
            ) : (
                    <h1>Авторизуйтесь как админ</h1>
                )}
        </>
    );
};

export default AddProduct;