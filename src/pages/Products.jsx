import data from "../data";
import { Link } from "react-router-dom";
import FilterPage from "../components/FilterPage";

export default function Products({items,setItems,search}){
    let id = 0
    const newData = data.map(el=>{
        return {...el,id:id++}
    })
    console.log(newData);

  return (
    
    


    <section className="products">
        <div className="filter__container">
            <FilterPage />
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
            <p className="item__price">
               <span>RS</span> {item.finalPrice}
            </p>
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
               <span>RS</span> {item.finalPrice}
            </p>
                </Link>
          
        
           </li>
               }
                  
                
              
                  

            })}
           
           </ul>
    </section>
    
  )
}