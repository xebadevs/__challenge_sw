import { useState } from "react"

export default function Form() {

    const [typeSwitcher, setTypeSwitcher] = useState('DVD')

    return (
        <>
                <div className="form-li">
                    <label htmlFor="sku">SKU</label>
                    <input type="text" id='sku' />
                </div>
                <div className="form-li">
                    <label htmlFor="name">Name</label>
                    <input type="text" id='name' />
                </div>
                <div className="form-li">
                    <label htmlFor="price">Price ($)</label>
                    <input type="number" id='price' />
                </div>
                <select id='productType' value={typeSwitcher}
                    onChange={(e) => {
                        const selectedType = e.target.value
                        setTypeSwitcher(selectedType)
                    }}>
                    <option id='DVD'>DVD</option>
                    <option id='Furniture'>Furniture</option>
                    <option id='Book'>Book</option>
                </select>

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
                        <p>Please, provide heigth, width and length</p>
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
