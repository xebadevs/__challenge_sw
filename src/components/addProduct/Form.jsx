import React from 'react'

export default function Form() {
    return (
        <>
            <form id='product_form' className='form-main'>
                <div>
                    <label htmlFor="sku">SKU</label>
                    <input type="text" id='sku' />
                </div>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id='name' />
                </div>
                <div>
                    <label htmlFor="price">Price ($)</label>
                    <input type="number" id='price' />
                </div>
                <select id='productType'>
                    <option id='DVD'>DVD</option>
                    <option id='Furniture'>Furniture</option>
                    <option id='Book'>Book</option>
                </select>
            </form>
        </>
    )
}
