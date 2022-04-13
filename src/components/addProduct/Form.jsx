import { useState } from "react"

export default function Forms() {

    const [typeSwitcher, setTypeSwitcher] = useState('DVD')
    const [skuValue, setSkuValue] = useState('')
    const [nameValue, setNameValue] = useState('')
    const [priceValue, setPriceValue] = useState('')
    const [sizeValue, setSizeValue] = useState('')
    const [heightValue, setHeightValue] = useState('')
    const [widthValue, setWidthValue] = useState('')
    const [lengthValue, setLengthValue] = useState('')
    const [weightValue, setWeightValue] = useState('')

    const setSkuValueFn = (val) => {if(val !== ''){setSkuValue(val)}}
    const setNameValueFn = (val) => {if(val !== ''){setNameValue(val)}}
    const setPriceValueFn = (val) => {if(val !== ''){setPriceValue(val)}}
    const setSizeValueFn = (val) => {if(val !== ''){setSizeValue(val)}}
    const setHeightValueFn = (val) => {if(val !== ''){setHeightValue(val)}}
    const setWidthValueFn = (val) => {if(val !== ''){setWidthValue(val)}}
    const setLengthValueFn = (val) => {if(val !== ''){setLengthValue(val)}}
    const setWeightValueFn = (val) => {if(val !== ''){setWeightValue(val)}}



    return (
        <>
            <div className="form-li">
                <label htmlFor="sku">SKU</label>
                <input type="text" id='sku' onChange={(e) => setSkuValueFn(e.target.value)} value={skuValue} />
            </div>
            <div className="form-li">
                <label htmlFor="name">Name</label>
                <input type="text" id='name' onChange={(e) => setNameValueFn(e.target.value)} value={nameValue} />
            </div>
            <div className="form-li">
                <label htmlFor="price">Price ($)</label>
                <input type="number" id='price' onChange={(e) => setPriceValueFn(e.target.value)} value={priceValue} />
            </div>
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
                    <input type="number" id='size' onChange={(e) => setSizeValueFn(e.target.value)} value={sizeValue} />
                </div>
                    <p>Please, provide size</p>
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
                    <p>Please, provide dimensions</p>
            </>
            }

            {typeSwitcher === 'Book' &&
            <>
                <div className="form-li">
                    <label htmlFor="weight">Weight (KG)</label>
                    <input type="number" id='weight' onChange={(e) => setWeightValueFn(e.target.value)} value={weightValue} />
                </div>
                    <p>Please, provide weight</p>
            </>
            }
        </>
    )
}
