import React from 'react'
import Cards from './Cards'

export default function main() {
    return (
        <div className='container'>
            <section className='title-section'>
                <h1>Product List</h1>
                <div>
                    <button>ADD</button>
                    <button id='delete-product-btn'>MASS DELETE</button>
                </div>
            </section>    
            <hr />
            <Cards />
        </div>
    )
}
