import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function AddProduct() {
    const navigate = useNavigate()

    const [inputValue, setInputValue] = useState({
        sku: '',
        name: '',
        price: '',
        reg_sku: /^[a-zA-Z0-9]{4,20}$/,
        reg_name: /^[a-zA-Z0-9\s]{4,20}$/,
        error: 'Please, submit required data',
    })

    const [numValue, setNumValue] = useState({
        size: '',
        weight: '',
        height: '',
        width: '',
        length: '',
        error: 'Please, provide the data of indicated type'
    })
    
    const [typeSwitcher, setTypeSwitcher] = useState('DVD')
    const [inputError, setInputError] = useState(false);
    const [errorMsg, setErrorMsg] = useState(false)

    const handleInputChange = (e) => {
        setInputValue({
            ...inputValue,
            [e.target.name] : e.target.value
        })
        setInputError(false)   
        if(e.target.value === ''){
            setInputError(true)
        }
    }

    const setNumber = (e) => {
        setNumValue({
            ...numValue,
            [e.target.name] : e.target.value
        })
        setErrorMsg(false)
        if(e.target.value === ''){
            setErrorMsg(true)
        }
    }

    const validate = () => {
        if(
            inputValue.reg_sku.test(inputValue.sku) &&
            inputValue.reg_name.test(inputValue.name) &&
            inputValue.price !== ''
            ){
                alert('todo viento')
        }else{
            alert('todo mal')
        }
    }

    const sendForm = (e) => {
        e.preventDefault()
        validate()
    }

    return (
        <form id="product_form" className="form-main" onSubmit={sendForm}>
            <div className='container'>
                <section className='title-section'>
                    <h1>Product Add</h1>
                    <div>
                        <button type="submit" onClick={sendForm}>Save</button>
                        <button id='delete-product-btn' onClick={() => navigate('/')}>Cancel</button>
                    </div>
                </section>    
                <hr />

                <>
                    <div className="form-li">
                        <label htmlFor="sku">SKU</label>
                        <input type="text" id='sku' name="sku" onChange={handleInputChange} value={inputValue.sku} />
                    </div>
                    <div className="form-li">
                        <label htmlFor="name">Name</label>
                        <input type="text" id='name' name="name" onChange={handleInputChange} value={inputValue.name} />
                    </div>
                    <div className="form-li">
                        <label htmlFor="price">Price ($)</label>
                        <input type="number" id='price' name="price" onChange={handleInputChange} value={inputValue.price} />
                    </div>
                    {inputError && <p className="form-error">{inputValue.error}</p>}
                    
                    <div className="form-li">
                        <label>Type Switcher</label>
                        <select id='productType' value={typeSwitcher}
                            onChange={(e) => {
                                const selectedType = e.target.value
                                setTypeSwitcher(selectedType)
                            }}>
                            <option id='DVD'>DVD</option>
                            <option id='Furniture'>Furniture</option>
                            <option id='Book'>Book</option>
                        </select>
                    </div>

                    {typeSwitcher === 'DVD' &&
                    <>
                        <div className="form-li">
                            <label htmlFor="size">Size (MB)</label>
                            <input type="number" id='size' name="size" onChange={setNumber} value={numValue.size}/>
                        </div>
                    </>
                    }

                    {typeSwitcher === 'Furniture' &&
                    <>
                        <div className="form-li">
                            <label htmlFor="height">Height (CM)</label>
                            <input type="number" id='height' name="height"  onChange={setNumber} value={numValue.height}/>
                        </div>
                        <div className="form-li">
                            <label htmlFor="width">Width (CM)</label>
                            <input type="number" id='width' name="width" onChange={setNumber} value={numValue.width}/>
                        </div>
                        <div className="form-li">
                            <label htmlFor="length">Length (CM)</label>
                            <input type="number" id='length' name="length" onChange={setNumber} value={numValue.length}/>
                        </div>
                    </>
                    }

                    {typeSwitcher === 'Book' &&
                    <>
                        <div className="form-li">
                            <label htmlFor="weight">Weight (KG)</label>
                            <input type="number" id='weight' name="weight" onChange={setNumber} value={numValue.weight} />
                        </div>
                    </>
                    }
                    {errorMsg && <p className="form-error"> {numValue.error} </p>}
                </>
            </div>
        </form>
    )
}