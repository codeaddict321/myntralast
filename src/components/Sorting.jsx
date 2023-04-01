import data from '../data';
import { useState } from 'react'

const Sorting = ({items,setItems}) => {

    // const [productData, setItems] = useState(items)

    const handleChange = (e) => {

        if (e.target.value == "What-new") {
            setItems(data)
        }

        if (e.target.value == "price-low-to-high") {
            setItems(() => {
                return [...items].sort((a, b) => (a.finalPrice - b.finalPrice))
            })
           
        }
        if (e.target.value == "better-discounts") {
            setItems(() => {
                return [...items].sort((a, b) => (b.discount - a.discount))
            })
        }

    };
    
    return (
        <div className='product-container'>
            <span>Sort by :-
            <select  onChange={handleChange}>

                <option value="What-new">What's new</option>

                <option value="price-low-to-high">Price low to high</option>

                <option value="better-discounts">Better discounts</option>

            </select>
            </span>
            </div>
            )
            }

            export default Sorting;