import "./Home.css"
import products from "../../data"
import ProductCard from "../../components/ProductCard/ProductCard"

function Home() {
  return (
    <>
    <div className="container">
        {
            products.map((proObj, i)=>{
                const {
                    id,
                    title,
                    name,
                    rating,
                    Img,
                    price,
                    about
                }=proObj

                return(
                    <ProductCard
                    id={id}
                    title={title}
                    name={name}
                    rating={rating}
                    Img={Img}
                    price={price}
                    about={about}
                    />
                )
            })
        }
    </div>
    </>
  )
}

export default Home