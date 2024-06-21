import "./ProductView.css"
import { useParams } from "react-router-dom"
import products from "../../data"

function ProductView() {
  const { id } = useParams()

  const selectedProd = products.find((prodObj) => prodObj.id === id)
  return (
    <>
      <div className="view-container">
        <div className="img">
          <img src={selectedProd.Img.mainImg} className="main-img" alt="img" />
          <img src={selectedProd.Img.secImg} className="sub-img" alt="img" />
          <img src={selectedProd.Img.thirdImg} className="sub-img"  alt="img"/>
          <img src={selectedProd.Img.fourthImg} className="sub-img" alt="img" />
          <img src={selectedProd.Img.fifthImg} className="sub-img" alt="img" />
        </div>


        <div className="description">
          <h1>{selectedProd.name}</h1>

          <span className="desc-price">Price: {selectedProd.price} </span>

          <div className="about-main">
            <span className="about">About this item:</span>
            <p className="about-desc"><span className="about-title">Processor:</span> {selectedProd.about.Processor}</p>
            <p className="about-desc"><span className="about-title">RAM & Storage</span> {selectedProd.about.RAM_Storage}</p>
            <p className="about-desc"><span className="about-title">Software: </span> {selectedProd.about.Software}</p>
            <p className="about-desc"><span className="about-title">Graphics & Keyboard:</span> {selectedProd.about.Graphics_Keyboard}</p>
            <p className="about-desc"><span className="about-title">Ports: </span> {selectedProd.about.Ports}</p>
          </div>

          <div>
            <button className="btn about-btn">ADD TO CART</button>
            <button className="btn about-btn">BUY NOW</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductView