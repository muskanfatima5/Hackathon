import Image from "next/image"
import Foot from "../components/Footer"
import Header from "../components/Header"

function Cart(){
    return(
        <div className="w-[1440px] h-[1437px]">
             <Header />
             <div className="mx-[100px] my-[25px]">
             <img src="/images4/Line5.png" alt="line" />
             </div>
            <div className="mx-[100px] my-[30px]">
             <img src="/images4/cart.png" alt="arrow" />
            </div>
            <div className="heading">
            <img src="/images4/Your cart.png" alt="head" />
            </div>
            <div  className="mx-[100px] flex items-start gap-5">
            <img src="/images4/opts.png" alt="main" className="w-[715px] h-[508px]"/>
            <img src="/images4/order.png" alt="order" className="w-[505px] h-[458px]" />
            </div>
            <Foot />
             </div>
    )
}export default Cart