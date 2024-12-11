import Link from "next/link"
import "../style/home.css"
import Image from "next/image"

function Header(){
    return(
       <>
       <div>
        <div className="head-one">
          <div className="header">
            <p className="line-one">
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
          <h1 className="shop">SHOP.CO</h1>
          {/* <select id="options" name="options">
         <option value="1">Google</option>
         <option value="2">Youtube</option>
         <option value="3">Facebook</option>
          </select> */}
          {/* <select id="options" name="options" className="one">
            <option value="1">Shop</option>
            <option value="2">
            <a href="/Categ">
            Casual</a></option>
            <option value="3">Formal</option>
            <option value="4">Party</option>
            <option value="5">Gym</option>
            <option value="6">Cart</option>
          </select> */}
          <p  className="one">Shop
          <img
            src="/images/dropdown.png"
            alt="dropdown"
            width={16}
            height={16}
          /></p>
          <p className="two">On Sale</p>
          <p className="three">New Arrivals</p>
          <p >Brands</p>
          <div className="input">
            <span  className="search-img">
            <img src="/images/search.png" alt="search" width={21} height={21}/>
            </span>
            <input placeholder="Search for products.." className="search"/>
          </div>
          <div className="options">
            <Link href="/Cart">
            <img src="/images/cart.png" alt="cart" width={24} height={24} />
            </Link>
            <img src="/images/log.png" alt="log" width={24} height={24} />
          </div>
        </div>
        </div>
      </>
      )
      }export default Header