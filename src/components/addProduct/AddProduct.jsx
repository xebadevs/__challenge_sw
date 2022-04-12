import Form from "./Form"
import { useNavigate } from "react-router-dom"


export default function AddProduct() {

    const navigate = useNavigate()


    return (
        <div className='container'>
            <section className='title-section'>
                <h1>Product Add</h1>
                <div>
                    <button>Save</button>
                    <button id='delete-product-btn' onClick={() => navigate('/')}>Cancel</button>
                </div>
            </section>    
            <hr />
            <Form />
        </div>
    )
}
