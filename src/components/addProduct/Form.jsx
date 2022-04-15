import { useState } from "react"

export default function Forms() {
    const [inputValue, setInputValue] = useState({
        sku: '',
        name: '',
        price: '',
        error: 'Please, submit required data',
    })

    const [typeSwitcher, setTypeSwitcher] = useState('DVD')
    const [sizeValue, setSizeValue] = useState('')
    const [heightValue, setHeightValue] = useState('')
    const [widthValue, setWidthValue] = useState('')
    const [lengthValue, setLengthValue] = useState('')
    const [weightValue, setWeightValue] = useState('')
    const [inputError, setInputError] = useState(false);
    const [errorMsg, setErrorMsg] = useState(false)

    const [numValue, setNumValue] = useState({
        size: ''
    })


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


    const setSizeValueFn = (val) => {if(val !== ''){setSizeValue(val)}}
    const setHeightValueFn = (val) => {if(val !== ''){setHeightValue(val)}}
    const setWidthValueFn = (val) => {if(val !== ''){setWidthValue(val)}}
    const setLengthValueFn = (val) => {if(val !== ''){setLengthValue(val)}}
    
    const setWeight = (e) => {
        setWeightValue(e.target.value)
        setErrorMsg(false)

        if(e.target.value === ''){
            setErrorMsg(true)
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

    return (
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
                <input type="number" id='height'  onChange={(e) => setHeightValueFn(e.target.value)} value={heightValue}/>
            </div>
            <div className="form-li">
                <label htmlFor="width">Width (CM)</label>
                <input type="number" id='width'  onChange={(e) => setWidthValueFn(e.target.value)} value={widthValue}/>
            </div>
            <div className="form-li">
                <label htmlFor="length">Length (CM)</label>
                <input type="number" id='length'  onChange={(e) => setLengthValueFn(e.target.value)} value={lengthValue}/>
            </div>
        </>
        }

        {typeSwitcher === 'Book' &&
        <>
            <div className="form-li">
                <label htmlFor="weight">Weight (KG)</label>
                <input type="number" id='weight' name="weight" onChange={setWeight} value={weightValue} />
            </div>
        </>
        }
        {errorMsg && <p className="form-error"> Please, provide the data of indicated type </p>}
    </>
    )
}
