import Cards from "./addProduct/Cards"
import { useNavigate } from "react-router-dom"

export default function Main() {

    const navigate = useNavigate()

    return (
        <div className='container'>
            <section className='title-section'>
                <h1>Product List</h1>
                <div>
                    <button onClick={() => navigate('/add-product')}>ADD</button>
                    <button id='delete-product-btn'>MASS DELETE</button>
                </div>
            </section>    
            <hr />
            <Cards />
        </div>
    )
}