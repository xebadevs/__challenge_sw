import { useState } from "react"

export default function Forms() {

    const [typeSwitcher, setTypeSwitcher] = useState('DVD')
    const [skuValue, setSkuValue] = useState('')
    const [nameValue, setNameValue] = useState('')
    const [priceValue, setPriceValue] = useState('')

    const setSkuValueFn = (val) => {if(val !== ''){setSkuValue(val)}}
    const setNameValueFn = (val) => {if(val !== ''){setNameValue(val)}}
    const setPriceValueFn = (val) => {if(val !== ''){setPriceValue(val)}}

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
                    <input type="number" id='size' />
                </div>
                    <p>Please, provide size</p>
            </>
            }

            {typeSwitcher === 'Furniture' &&
            <>
                <div className="form-li">
                    <label htmlFor="height">Height (CM)</label>
                    <input type="number" id='height' />
                </div>
                <div className="form-li">
                    <label htmlFor="width">Width (CM)</label>
                    <input type="number" id='width' />
                </div>
                <div className="form-li">
                    <label htmlFor="length">Length (CM)</label>
                    <input type="number" id='length' />
                </div>
                    <p>Please, provide dimensions</p>
            </>
            }

            {typeSwitcher === 'Book' &&
            <>
                <div className="form-li">
                    <label htmlFor="weight">Weight (KG)</label>
                    <input type="number" id='weight' />
                </div>
                    <p>Please, provide weight</p>
            </>
            }
        </>
    )
}
