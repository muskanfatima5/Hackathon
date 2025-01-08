import Image from "next/image"
import "../style/home.css"

function Foot(){
    return(
        <>
        <div className="footer">
         <img src="/images/footer.png" alt="footer" className="lg:w-[1441px] lg:h-[598px]"/>
         </div>
         <div className="foot1">
         <img src="/images4/short-foot.png" alt="footer" className="w-[392px] h-[981px] mt-[50px] lg:hidden" />
         </div>
         </>
    )
}export default Foot