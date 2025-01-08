import Image from "next/image"
import Foot from "../Foot/page"
import Header from "../Head/page"

function Cart(){
    return(
        <div className="w-[390px] h-[500px] lg:w-[1440px] lg:h-[1437px]">
             <Header />
             <div className="lg:mx-[100px] lg:my-[25px]">
             <img src="/images4/Line5.png" alt="line" />
             </div>
            <div className="w-[89px] mt-[20px] ml-[16px] h-[19px] lg:w-[106px] lg:h-[22px] lg:mx-[100px] lg:my-[30px]">
             <img src="/images4/cart.png" alt="arrow" />
            </div>
            <div >
            <img src="/images4/your.png" alt="head" className="w-[207px] h-[38px] ml-[16px] mt-[25px] mb-[30px] lg:w-[259px] lg:h-[48px] lg:ml-[100px] lg:mb-[30px]" />
            </div>
            <div  className="ml-[16px] lg:ml-[100px] lg:flex lg:items-start lg:gap-5">
            <img src="/images4/opts.png" alt="main" className="w-[358px] h-[389px] lg:w-[715px] lg:h-[508px] lg:mt[20px]"/>
            <img src="/images4/order.png" alt="order" className="w-[358px] h-[390px] mt-[20px] lg:w-[505px] lg:h-[458px]" />
            </div>
            <Foot />
             </div>
    )
}export default Cart