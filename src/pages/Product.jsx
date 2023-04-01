import { useParams } from "react-router-dom";
import data from "../data";


export default function Product(){
 const {id} = useParams()
const clickedItem = data.find(item=>item.id === Number(id))
function handleCart(){
  
}
 

    return (
    
      
        < div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <div className='prod-photo'>
            <img src={clickedItem.otherImages[0]} />
            <img src={clickedItem.otherImages[1]} />
            <img src={clickedItem.otherImages[2]} />
            <img src={clickedItem.otherImages[3]} />
          </div>
    
    
          <div className='prod-modal'>
            <div className='prod-detail'>
              <h3 style={{ marginBottom: "20px" }}>{clickedItem.name}</h3>
              <em>{clickedItem.description}</em>
              <p>Rs.{clickedItem.finalPrice}</p>
              <p style={{ textDecoration: "line-through" }}>Rs.{clickedItem.strickPrice}</p>
              <strong style={{ color: "red" }}>{clickedItem.discount} %OFF</strong>
              <p>Size chart</p>
              <span className='prod-size'>
                <span>{clickedItem.productSize.slice(0, 2)}</span>
                <span>{clickedItem.productSize.slice(4, 6)}</span>
                <span>{clickedItem.productSize.slice(8, 10)}</span>
                <span>{clickedItem.productSize.slice(12, 14)}</span>
              </span>
            </div>
    
            <button onClick={()=>handleCart(clickedItem)} className='cartBtn'>
             Add to Cart
            </button>
          </div>
        </div>
       
      )
//     <div  data-id={clickedItem.id}className="clickedItem">
   
//     <img src={clickedItem.otherImages[0]} alt="" />
// <p className="item__name">
//     {clickedItem.name}
// </p>
// <p className="item__desc">
//     {clickedItem.description}
// </p>
// <p className="item__price">
//    <span>RS</span> {clickedItem.finalPrice}
// </p>
//   <button onClick={addToCart}>Add To Cart</button>


// </div>

} 