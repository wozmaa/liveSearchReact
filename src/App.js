import { useState } from 'react';
import './App.css';

function App() {
  const [products, setProducts] = useState([
    {
      name: "bona",
      price: 800,
      image: "https://funik.ru/wp-content/uploads/2019/10/1fff6b7b388ec0630d05-3-700x700.jpg"
    },
    {
      name: "puma",
      price: 900,
      image: "https://novate.ru/files/u37559/polulenizachomo4.jpg"
    },
    {
      name: "nike",
      price: 1800,
      image: "https://www.chitaitext.ru/upload/medialibrary/0d2/1603-m1.jpg"
    },
    {
      name: "asics",
      price: 1500,
      image: "https://wfc.tv/f/images/LlyR-imgonline-com-ua-mirror-nqjpk36fcts.jpg"
    },
    {
      name: "adidas",
      price: 2100,
      image: "https://cs6.livemaster.ru/storage/aa/94/e0a3af67c495ba35807224d23dx7.jpg"
    },
    {
      name: "new balance",
      price: 1600,
      image: "https://krot.info/uploads/posts/2022-03/1646391384_7-krot-info-p-smeshnaya-obuv-muzhskaya-smeshnie-foto-8.jpg"
    },
  ])


  const [text, setText] = useState('')
 
  
  const handleChange = (e) => {
    setText(e.target.value)
  }

  const newProducts = products.filter(item => {
    return item.name.toLowerCase().includes(text.toLowerCase())
  })


  return (
    <div className="main">
      <form action=''>
        <input
         type="text"
          onChange={handleChange}
            value={text}
              />
      </form>

      <div className='addCard'>{newProducts.map((item, id) => {
        return (
          <div className='mainCard' key={id}>
            
            <div className='header'>
              <img src={item.image} alt="anzor" width="100%" height="100%" />
            </div>

            <div className='body'>
              <div className='bodyText'>
                <h3>{item.name}</h3>
                <h2>${item.price}</h2>
              </div>
              <div className='bodyBtn'>
                <button>Детали</button>
              </div>
            </div>

            <hr />

            <div className='footer'>
              <div className='footerText'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
              </div>
              <div className='footerBtn'>
                <button>Добавить в корзину</button>
              </div>
            </div>

          </div>
        )
      })}</div>
    </div>
  );
}

export default App;
