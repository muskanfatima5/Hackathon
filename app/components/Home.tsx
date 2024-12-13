import Image from "next/image";
import "../style/home.css";
import Link from "next/link";
import Foot from "./Footer";


function Home() {
  return (
    <div className="home">
      <div className="first">
      <div className="head-three">
        <div className="content">
          <p>FIND CLOTHES THAT MATCHES YOUR STYLE</p>
        </div>
        <div className="sec-cont">
          <p>
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
        </div>
        <div className="third-cont">
          <button className="butt">Shop Now</button>
       </div>
        </div>
          {/* <img src="/images/small.png" alt="vector" width={} height={100} className="vector-one"/> */}
           {/* <img src="/images/big.png" alt="vector" width={104} height={104}className="vector-two" />
        {/* i tried for 5 hours but couldn't place these images */}
        <img src="/images/hero.jpg" alt="hero-img" width={663} height={663} className="hero-img" />
        
      </div>

        <div className="logos">
          <div className="versace">
          <img src="/images/logo(1).png" alt="versace" width={166.48} height={33.16}/>
          </div>
          <div className="zara">
            <img  src="/images/zara.png" alt="zara" width={91} height={38}/>
          </div>
          <div className="gucci">
              <img src="/images/logo(3).png" alt="gucci" width={156} height={36}/>
          </div>
          <div className="prada">
            <img  src="/images/prada.png" alt="prada" width={194} height={32}/>
          </div>
          <div className="calvin">
            <img src="/images/c-k.png" alt="kelin" width={206} height={33}/>
          </div>
        </div>
        <div className="new">
           <img src="/images/NEW ARRIVALS.png" alt="heading"/>
        </div>
        <div className="shirts">
          <img  src="/images/one.png" alt="shirt" width={295} height={298}/>
          <img  src="/images/two.png"  alt="shirt" width={295} height={298}/>
          <img  src="/images/three.png" alt="shirt" width={295} height={298}/>
          <img  src="/images/four.png"  alt="shirt" width={295} height={298}/>
        </div>
        <div className="texts">
          <img src="/images/T-SHIRT WITH TAPE DETAILS.png" alt="text" className="text1"/>
          <img src="/images/SKINNY FIT JEANS.png" alt="text" className="text2"/>
          <img src="/images/CHECKERED SHIRT.png" alt="text" className="text3"/>
          <img src="/images/SLEEVE STRIPED T-SHIRT.png" alt="text" className="text4"/>
        </div>
        <div  className="stars">
          <img src="/images/stars.png" alt="stars" className="star1"/>
          <img src="/images/star.png" alt="stars" className="star2"/>
          <img src="/images/stars.png" alt="stars" className="star3"/>
          <img src="/images/stars.png" alt="stars" className="star4"/>
        </div>
        <div className="rates">
          <img src="/images/rate1.png" alt="rate" className="rate1"/>
          <img src="/images/rate2.png" alt="rate" className="rate2"/>
          <img src="/images/rate3.png" alt="rate" className="rate3"/>
          <img src="/images/rate4.png" alt="rate" className="rate4"/>
        </div>
        <div className="view-butt">
          <button>View All</button>
        </div>
        <div className="line">
            <img src="/images/line1.png" alt="line"/>
        </div>
        <div className="new">
          <img src="/images/top selling.png" alt="selling"/>
        </div>
        <div className="shirts">
        <img src="/images/sh1.png" alt="cloths" width={295} height={298}/>
        <img src="/images/sh2.png" alt="cloths"  width={295} height={298}/>
        <img src="/images/sho3.png" alt="cloths"  width={295} height={298}/>
        <img src="/images/pant.png" alt="cloths"  width={295} height={298}/>
        </div>
        <div className="texts">
          <img src="/images/VERTICAL STRIPED SHIRT.png" alt="text" className="text5"/>
          <img src="/images/COURAGE GRAPHIC T-SHIRT.png" alt="text" className="text6"/>
          <img src="/images/LOOSE FIT BERMUDA SHORTS.png" alt="text" className="text7"/>
          <img src="/images/FADED SKINNY JEANS.png" alt="text" className="text8"/>
        </div>
        <div  className="stars">
          <img src="/images/star1.png" alt="stars" className="star1"/>
          <img src="/images/star2.png" alt="stars" className="star5"/>
          <img src="/images/star3.png" alt="stars" className="star6"/>
          <img src="/images/stars.png" alt="stars" className="star7"/>
        </div>
        <div className="ratez">
          <img src="/images/rate5.png" alt="rate" className="rate5"/>
          <img src="/images/x-rate.png" alt="rate" className="rate6"/>
          <img src="/images/disc.png" alt="rate" className="rate7"/>
          <img src="/images/rate6.png" alt="rate" className="rate8"/>
          <img src="/images/rate3.png" alt="rate" className="rate9"/>
          <img src="/images/rate7.png" alt="rate" className="rate10"/>
        </div>
        <div className="view-butt">
          <button>View All</button>
        </div>
        <div className="browse">
        <img src="/images/BROWSE BY dress STYLE.png" alt="image" className="b-head" />
          <div className="row-one">
        <Link href="./Categ"> 
        <Image src="/images/casual.png" alt="image" width={407} height={289} className="casual" />
        </Link>  
        <img src="/images/formal.png" alt="image" className="formal" />
        </div>
        <div className="row-two">
        <img src="/images/party.png" alt="image" className="party" />
        <img src="/images/gym.png" alt="image" className="gym" />
        </div>
        </div>
        <div className="feedback">
        <img src="/images/OUR HAPPY CUSTOMERS.png" alt="feedback" />
        <img src="/images/arrow 2.png" alt="arrow"  className="arrow-2" />
        <img src="/images/arrow 1.png" alt="arrow" className="arrow-1" />
        </div>
        <div className="customers">
        <img src="/images/first.png" alt="box" className="feedbacks" />
        <img src="/images/second.png" alt="box" className="feedbacks" />
        <img src="/images/third.png" alt="box" className="feedbacks" />
        <img src="/images/fourth.png" alt="box" className="feedbacks" />
        <img src="/images/fifth.png" alt="box" className="feedbacks" />
        </div>
        <Foot />
    </div>
  );
}
export default Home;
