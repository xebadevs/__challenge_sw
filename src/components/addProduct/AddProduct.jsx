import Form from "./Form"

export default function AddProduct() {
    return (
        <div className='container'>
            <section className='title-section'>
                <h1>Product Add</h1>
                <div>
                    <button>Save</button>
                    <button id='delete-product-btn'>Cancel</button>
                </div>
            </section>    
            <hr />
            <Form />
        </div>
    )
}
