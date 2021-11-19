import { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import SearchBar from "./SearchBar";
import Cart from "./Cart";



import "../App.css";

export default function Listing() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cartData, setCartData] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const isInCart = (item) => {
    return cartData.indexOf(item) !== -1;
  };
  // Removing the item from cart
  const removeFromCart = (item) => {
    const { quantity,price }=item
    var updatedCartData = [...cartData];
    var index = updatedCartData.indexOf(item);
    updatedCartData.splice(index, 1)
    setCartData(updatedCartData);
    setCartTotal(Number(cartTotal - (quantity * price)));
  };
  //Adding the item to the cart
  const addToCart = (product) => {
    //Check if the item is already there thn increase the quantity
    const existingProduct = cartData.find(item=>item.sku === product.sku)
    let updatedProduct={}
    if(existingProduct){
      updatedProduct = {...product,
        quantity: existingProduct.quantity+1 
      }
    }else{
      updatedProduct = {...product,
        quantity:1}
    }
    const remainingProducts=cartData.filter(item=>item.sku !== product.sku)
    setCartData([updatedProduct,...remainingProducts]);
    setCartTotal(Number(cartTotal + product.price));
  };

// To filter the data based on user input
  useEffect(() => {
        if( searchQuery !== '' ){
         const filteredProducts=products.filter(item=>item.name.toLowerCase().includes(searchQuery.toLowerCase()))
         if(filteredProducts){
          setFilteredProducts(filteredProducts)
         }
        }else{
          setFilteredProducts(products)
        }
    }, [products, searchQuery]);

 //Mock api to get data
    useEffect(() => {
      if( products.length === 0 ){
        setLoading(true)
        fetch("https://619610ea902243001762fa33.mockapi.io/api/v1/products")
        .then((response) => response.json())
        .then((data) => {
          setLoading(false)
          setProducts(data)
          
        });
      }
  }, [products.length]);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Notch MarketPlace</h1>
      </header>
       {/* added search based on names */}
      <SearchBar searchQuery={setSearchQuery}/>
      {loading ?
       <Loader
       type="Puff"
       color="#00BFFF"
       height={100}
       width={100}
       timeout={3000} 
       /> :
        <div className="container">
          <div className="product-Parentblock">
            {filteredProducts.map((item, index) => (
              <div key={index} className="product-block">
                <img
                  className="product-image"
                  alt=""
                  src={item["productImage"]}
                ></img>
                <div>{item["sku"]} </div>
                <div> <b>{item["name"]} </b></div>
                <div>{item["description"]}</div>
                <div> <b>${item["price"]} </b></div>
              
                <button
                  className="btn btn-primary"
                  onClick={() => addToCart(item)}
                >
                  Add to cart
                </button>
              </div>
            ))}
          </div>
          <Cart cartData={cartData}  cartTotal={cartTotal} removeFromCart={removeFromCart}/>
        </div>
      }
    </div>
  );
}
