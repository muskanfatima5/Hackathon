import "./style/home.css"
import Home from "./components/Home"
import Header from "./components/Header"
// import Cat from "./components/Categ/page"

function Page(){
  return(
  <div className="main">
   <Header />
   {/* <Cat /> */}
   <Home />
  </div>)
}export default Page