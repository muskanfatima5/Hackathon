import Image from "next/image"
import Header from "../Head/page"
import Foot from "../Foot/page"

function Cat(){
    return(
        <div className="w-[390px] h-[1500px] lg:w-[1440px] lg:h-[2332px]" >
            <Header /> 
            <div className="w-[358px] ml-[16px] lg:w-[1240px] lg:ml-[100px] lg:mt-[15px]">
            <Image src="/images2/Line2.png" alt="line" width={1240}  height={1}/>       
            </div>
            <div className="w-[104px] h-[19px] ml-[16px] mt-[20px] lg:w-[123px] lg:h-[22px] lg:ml-[100px] lg:mt-[25px]">
            <Image src="/images2/side.png" alt="arrow" width={123}  height={22}/>    
            </div>
            <div  className="lg:ml-[100px] lg:mt-[10px] lg:flex lg:items-start">
            <Image src="/images2/filters.png" alt="filters" width={390}  height={1066} className="mt-[30px] lg:w-[295px] lg:h-[1220px] "/>  

            <Image src="/images2/Casual.png" alt="heading" width={101}  height={32} className="w-[76px] h-[32px] ml-[16px] mt-[25px] lg:w-[101px] lg:h-[32px] lg:ml-[23px] lg:mt-[20px]"/>

            <Image src="/images2/white-g.png" alt="shirt" width={295}  height={298} className="w-[172px] h-[174px] ml-[16px] mt-[30px] lg:w-[295px] lg:h-[298px] lg:ml-[-100px] lg:mt-[65px]"/> 
            <Image src="/images2/pink.png" alt="shirt" width={295}  height={298} className="w-[172px] h-[174px] mt-[-175px] ml-[200px] lg:w-[295px] lg:h-[298px] lg:ml-[20px] lg:mt-[65px]"/> 
            <Image src="/images2/white.png" alt="shirt" width={295}  height={298} className="w-[172px] h-[174px]  ml-[16px] mt-[120px] lg:w-[295px] lg:h-[298px] lg:ml-[20px] lg:mt-[65px]"/> 

            <Image src="/images2/grad-sh.png" alt="text" width={227}  height={27} className="w-[145px] h-[22px] mt-[-280px] ml-[16px] lg:w-[227px] lg:h-[27px] lg:ml-[-920px] lg:mt-[380px]"/>
            <Image src="/images2/polo-sh.png" alt="text" width={231}  height={27} className="w-[145px] h-[22px] mt-[-20px] ml-[200px] lg:w-[227px] lg:h-[27px] lg:ml-[90px] lg:mt-[380px]"/>  
            <Image src="/images2/black-sh.png" alt="text" width={227}  height={27} className="w-[145px] h-[22px] ml-[16px] mt-[265px] lg:w-[227px] lg:h-[27px] lg:ml-[80px] lg:mt-[380px]"/> 

            <Image src="/images2/star.png" alt="stars" width={126}  height={19} className="w-[106px] h-[16px] lg:w-[126px] lg:h-[19px] mt-[-285px] ml-[16px] lg:ml-[-850px] lg:mt-[410px]"/> 
            <Image src="/images2/stars.png" alt="stars" width={150}  height={19} className="w-[106px] h-[16px] mt-[-15px] ml-[200px] lg:w-[126px] lg:h-[19px] lg:ml-[190px] lg:mt-[410px]"/>  
            <Image src="/images2/star1.png" alt="stars" width={160}  height={19} className="w-[106px] h-[16px]  ml-[16px] mt-[265px] lg:w-[130px] lg:h-[19px] lg:ml-[180px] lg:mt-[410px]"/> 
            
            <Image src="/images2/rate6.png" alt="price" width={54}  height={32} className="w-[34px] h-[27px] ml-[16px] mt-[-275px] lg:w-[54px] lg:h-[32px] lg:ml-[-750px] lg:mt-[440px]"/>  
            <Image src="/images2/rate3.png" alt="price" width={56}  height={32} className="w-[34px] h-[27px] ml-[200px] mt-[-25px] lg:w-[56px] lg:h-[32px] lg:ml-[265px] lg:mt-[440px]"/> 
            <Image src="/images2/rate1.png" alt="price" width={188}  height={32} className="w-[135px] h-[27px]  ml-[16px] mt-[248px] lg:w-[188px] lg:h-[32px] lg:ml-[250px] lg:mt-[435px]"/> 
            
            <Image src="/images2/jeans.png" alt="jeans" width={295}  height={298} className="w-[172px] h-[174px] ml-[200px] mt-[-245px] lg:w-[295px] lg:h-[298px] lg:ml-[-820px] lg:mt-[500px]"/> 
            <Image src="/images2/checkered.png" alt="shirt" width={295}  height={298} className="w-[172px] h-[174px] ml-[16px] mt-[100px] lg:w-[295px] lg:h-[298px] lg:ml-[22px] lg:mt-[500px]"/> 
            <Image src="/images2/striped.png" alt="shirt" width={295}  height={298} className="w-[172px] h-[174px] ml-[200px] mt-[-175px] lg:w-[295px] lg:h-[298px] lg:ml-[22px] lg:mt-[500px]"/> 
            
            <Image src="/images/fit-jen.png" alt="text" width={150}  height={27} className="w-[120px] h-[22px] ml-[200px] mt-[-262px] lg:w-[150px] lg:h-[27px] lg:ml-[-930px] lg:mt-[820px]"/> 
            <Image src="/images/check-sh.png" alt="text" width={151}  height={27} className="w-[100px] h-[22px]  ml-[16px] mt-[250px] lg:w-[151px] lg:h-[27px] lg:ml-[175px] lg:mt-[820px]"/>  
            <Image src="/images/sleeve-sh.png" alt="text" width={199}  height={27} className="w-[145px] h-[22px]  ml-[200px] mt-[-20px] lg:w-[227px] lg:h-[27px] lg:ml-[160px] lg:mt-[820px]"/>
            
            <Image src="/images2/star.png" alt="stars" width={126}  height={19} className="w-[106px] h-[16px]  ml-[200px] mt-[-274px] lg:w-[126px] lg:h-[19px] lg:ml-[-862px] lg:mt-[850px]"/> 
            <Image src="/images2/stars.png" alt="stars" width={150}  height={19} className="w-[106px] h-[16px]  ml-[16px] mt-[260px] lg:w-[150px] lg:h-[19px] lg:ml-[195px] lg:mt-[852px]"/> 
            <Image src="/images2/stars.png" alt="stars" width={150}  height={19} className="w-[106px] h-[16px]  ml-[200px] mt-[-18px] lg:w-[150px] lg:h-[19px] lg:ml-[165px] lg:mt-[850px]"/> 
            
            <Image src="/images2/rate2.png" alt="price" width={200}  height={32} className="w-[135px] h-[27px]  ml-[200px] mt-[-275px] lg:w-[200px] lg:h-[32px] lg:ml-[-790px] lg:mt-[870px]"/>
            <Image src="/images2/rate3.png" alt="price" width={56}  height={32} className="w-[34px] h-[27px]  ml-[16px] mt-[255px] lg:w-[56px] lg:h-[32px] lg:ml-[125px] lg:mt-[875px]"/>  
            <Image src="/images2/rate4.png" alt="price" width={189}  height={32} className="w-[135px] h-[27px]  ml-[200px] mt-[-30px] lg:w-[189px] lg:h-[32px] lg:ml-[255px] lg:mt-[870px]"/> 
            
            <Image src="/images2/green.png" alt="shirt" width={295}  height={298} className="w-[172px] h-[174px]  ml-[16px] mt-[30px] lg:w-[295px] lg:h-[298px] lg:ml-[-815px] lg:mt-[950px]"/>
            <Image src="/images2/graphic.png" alt="shirt" width={295}  height={298} className="w-[172px] h-[174px] ml-[200px] mt-[-175px] lg:w-[295px] lg:h-[298px] lg:ml-[22px] lg:mt-[950px]"/>
            <Image src="/images2/shorts.png" alt="short" width={295}  height={298} className="w-[172px] h-[174px]  ml-[16px] mt-[120px] lg:w-[295px] lg:h-[298px] lg:ml-[22px] lg:mt-[950px]"/>
            
            <Image src="/images/vert-sh.png" alt="text" width={194}  height={27} className="w-[145px] h-[22px]  ml-[16px] mt-[-280px] lg:w-[194px] lg:h-[27px] lg:ml-[-930px] lg:mt-[1270px]"/> 
            <Image src="/images/cour-sh.png" alt="text" width={226}  height={27} className="w-[145px] h-[22px]  ml-[200px] mt-[-20px] lg:w-[226px] lg:h-[27px] lg:ml-[120px] lg:mt-[1270px]"/> 
            <Image src="/images/berm-sho.png" alt="text" width={239}  height={27} className="w-[145px] h-[22px]  ml-[16px] mt-[265px] lg:w-[239px] lg:h-[27px] lg:ml-[100px] lg:mt-[1270px]"/> 
            
            <Image src="/images2/star1.png" alt="stars" width={160}  height={19} className="w-[106px] h-[16px]  ml-[16px] mt-[-285px] lg:w-[126px] lg:h-[19px] lg:ml-[-880px] lg:mt-[1300px]"/> 
            <Image src="/images2/Frame 68.png" alt="stars" width={137}  height={19} className="w-[106px] h-[16px]  ml-[200px] mt-[-15px] lg:w-[126px] lg:h-[19px] lg:ml-[190px] lg:mt-[1300px]"/> 
            <Image src="/images2/star3.png" alt="stars" width={113}  height={19} className="w-[106px] h-[16px]  ml-[16px] mt-[275px] lg:w-[126px] lg:h-[19px] lg:ml-[190px] lg:mt-[1305px]"/>
            
            <Image src="/images2/rate5.png" alt="price" width={53}  height={32} className="w-[34px] h-[27px]  ml-[16px] mt-[-285px] lg:w-[54px] lg:h-[32px] lg:ml-[-760px] lg:mt-[1330px]"/>
            <Image src="/images2/x-rate.png" alt="price" width={56}  height={32} className="w-[34px] h-[27px]  ml-[55px] mt-[-25px] lg:w-[54px] lg:h-[32px] lg:ml-[10px] lg:mt-[1330px]"/>
            <Image src="/images2/disc.png" alt="price" width={58}  height={28} className="w-[34px] h-[27px]  ml-[95px] mt-[-27px] lg:w-[54px] lg:h-[32px] lg:ml-[10px] lg:mt-[1327px]"/>
            <Image src="/images2/rate6.png" alt="price" width={54}  height={32} className="w-[34px] h-[27px]  ml-[200px] mt-[-24px] lg:w-[54px] lg:h-[32px] lg:ml-[135px] lg:mt-[1330px]"/>
            <Image src="/images2/rate3.png" alt="price" width={47}  height={32} className="w-[34px] h-[27px]  ml-[16px] mt-[260px] lg:w-[54px] lg:h-[32px] lg:ml-[265px] lg:mt-[1330px]"/>
            
            <Image src="/images2/show.png" alt="text" width={396}  height={16} className="w-[230px] h-[10px] ml-[100px] mt-[-1447px] lg:w-[396px] lg:h-[16px] lg:ml-[-170px] lg:mt-[25px]"/> 
            </div>
            <div className="lg:ml-[420px]">
            <Image src="/images2/Line 9.png" alt="line" width={925} height={1} className="w-[358px] h-[1px] ml-[16px] mt-[1460px] lg:w-[925px] lg:h-[1px] lg:mt-[40px]" /> 
            </div>
            <div className="lg:ml-[420px] lg:my-[30px]">
            <Image src="/images2/nums.png" alt="text" width={920}  height={40} className="w-[359px] h-[26px] ml-[16px] mt-[20px] lg:w-[920px] lg:h-[40px]" /> 
            </div>
            <div className="mt-[35px]">
            <Foot />
            </div>
        </div>
    )
}export default Cat