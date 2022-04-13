import Forms from "./Form"
import { useNavigate } from "react-router-dom"

export default function AddProduct() {
    const navigate = useNavigate()

    const sendForm = (e) => {
        e.preventDefault()

    }

    return (
        <form id="product_form" className="form-main">
            <div className='container'>
                <section className='title-section'>
                    <h1>Product Add</h1>
                    <div>
                        <button type="submit" onClick={sendForm}>Save</button>
                        <button id='delete-product-btn' onClick={() => navigate('/')}>Cancel</button>
                    </div>
                </section>    
                <hr />
                <Forms />
            </div>
        </form>
    )
}