import data from "../data";
import { Link } from "react-router-dom";
import FilterPage from "../components/FilterPage";
import Sorting from "../components/Sorting"


export default function Products({items,setItems,search}){
 

  return (
<>
    <Sorting items={items}setItems={setItems}  />
    <section className="products">
        <div className="filter__container">
            <FilterPage  items={items} setItems={setItems}/>
        </div>
           <ul className="products__container">
            {items.map((item)=>{
               if(search == '' ){
                return <li key={item.id} data-id={item.id}className="product">
                <Link to={`products/${item.id}`}>
                <img src={item.otherImages[0]} alt="" />
            <p className="item__name">
                {item.name}
            </p>
            <p className="item__desc">
                {item.description}
            </p>
            <div className="item__price">
             
               <p>Rs.{item.finalPrice}</p>
              <p style={{ textDecoration: "line-through" }}>Rs.{item.strickPrice}</p>
              <strong style={{ color: "red" }}>{item.discount} %OFF</strong>
            </div>
                </Link>
           </li>
               } else if(item.name.toLowerCase().includes(search)){
                return <li key={item.id} data-id={item.id}className="product">
                <Link to={`products/${item.id}`}>
                <img src={item.otherImages[0]} alt="" />
            <p className="item__name">
                {item.name}
            </p>
            <p className="item__desc">
                {item.description}
            </p>
            <p className="item__price">
            finalPrice={item.finalPrice} 
                            strickPrice={item.strickPrice}
                            discount={item.discount} id={item.id}
            </p>
                </Link>
          
        
           </li>
               }
            })}
           
           </ul>
    </section>
    </>
    
  )
}