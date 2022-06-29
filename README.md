# Usage
Creat a card with us

Install 

npm i cardflip

<!-- ===> <CardFlip /> <==== -->
The component accepts the following props:
1.name
2.price
3.content
4.onClick

import "./App.css";

import CardFlip from "cardflip/dist/CardFlip";

function App() {

    const handleBuy =()=>{

    }

  return (

    <div className="App">

      <CardFlip image="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/380697/03/sv01/fnd/IND/fmt/png/Wild-Rider-Layers-Unisex-Sneakers" 

      name="Puma Shoe"
      price="$ 45"
      content="You dream it,we do it"
      onClick={handleBuy}
      />
    </div>
  );
}

export default App;