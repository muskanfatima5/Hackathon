import "../style/home.css"
import Link from "next/link"

function Bar(){
    return(
        <div className="w-[290px] h-[400px] mt-[140px] pt-[80px] text-2xl ml-[30px] 
        lg:w-[600px] lg:h-[400px] lg:pt-[70px] lg:mt-[100px] lg:ml-[370px] lg:text-3xl underline 
        text-center rounded-md font-bold text-white flex-col bg-black">
         <Link href="./Home">
         <h3 className="hover:bg-gray-800 ">Home</h3>
         </Link>
         &nbsp;
         <Link href="./Categ">
         <h3 className="hover:bg-gray-800">Category</h3>
         </Link>
         &nbsp;
         <Link href="./Detail">
         <h3 className="hover:bg-gray-800">Products</h3>
         </Link>
         &nbsp;
         <Link href="./Cart">
         <h3 className="hover:bg-gray-800">Cart</h3>
         </Link>
        </div>
    )
}export default Bar