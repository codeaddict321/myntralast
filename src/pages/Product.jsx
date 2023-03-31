import { useParams } from "react-router-dom";
import data from "../data";
export default function Product(){
 const {id} = useParams()
const clickedItem = data.find(item=>item.id === Number(id))
function addToCart(){
    console.log("hi");
}
 
 return(
    <div  data-id={clickedItem.id}className="product">
   
    <img src={clickedItem.otherImages[0]} alt="" />
<p className="item__name">
    {clickedItem.name}
</p>
<p className="item__desc">
    {clickedItem.description}
</p>
<p className="item__price">
   <span>RS</span> {clickedItem.finalPrice}
</p>
  <button onClick={addToCart}>Add To Cart</button>


</div>
 )
} 