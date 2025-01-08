import Link from "next/link"
import "../style/home.css"
import Image from "next/image"

function Header(){
    return(
        


       <>
       <div>
        <div className="head-one">
          <div className="header"> 
            <p className="line-one text-center">
              Sign up and get 20% off to your first order. </p>
            <p className="line-two">Sign Up Now</p>
          </div>
          <div className="cross">
            <img
              src="/images/cross.png"
              alt="close"
              width={13.13}
              height={13.13}
            />
          </div>
        </div>
      </div>
      <div className="head-two">
        <div className="heading">
        <div>
        <Link href="./Menu">
        <Image src="/images/menu.png" alt="menu-img" width={24} height={24} className="w-[24px] h-[24px] ml-[16px] hover:bg-slate-400 lg:w-[24px] lg:h-[24px]"/>
        </Link>
        </div>
          <h1 className="shop">SHOP.CO</h1>
          <p  className="one">Shop
          <img className="dropimg"
            src="/images/dropdown.png"
            alt="dropdown"
            width={16}
            height={16}
          /></p>
          <p className="two">On Sale</p>
          <p className="three">New Arrivals</p>
          <p className="four">Brands</p>
          <div className="input">
            <span  className="search-img">
            <img src="/images/search.png" alt="search" width={21} height={21} className="w-[25px] h-[15px] lg:w-[21px] lg:h-[21px]"/>
            </span>
            <input placeholder="Search for products.." className="search"/>
          </div>
          <div className="options">
            <Image src="/images/mob-search.png" alt="cart" width={24} height={24} className="w-[24px] h-[24px] ml-[-40px] lg:hidden" />
            <Image src="/images/cart.png" alt="cart" width={24} height={24} />
            <img src="/images/log.png" alt="log" width={24} height={24} />
          </div>
        </div>
        </div>
      </>
      )
      }export default Header