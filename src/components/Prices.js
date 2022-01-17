import React from "react";

const Prices = () => {
  return (
    <div className="prices">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="/img/starter.jpg" alt="starter" />
              </div>
              <h1 className="price__heading">Starter</h1>
              <p className="price__text">
                <a href="">Order Now</a>
              </p>
           
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="/img/Pizza_menu.jpg" alt="pizza" />
              </div>
              <h1 className="price__heading">Pizza</h1>
              <p className="price__text">
                <a href="">Order Now</a>
              </p>
             
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="/img/pasta.jpg" alt="pasta" />
              </div>
              <h1 className="price__heading">Pasta</h1>
              <p className="price__text">
                <a href="">Order Now</a>
              </p>
           
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="/img/drink.jpg" alt="drink" />
              </div>
              <h1 className="price__heading">Cafe Casa Blanca</h1>
              <p className="price__text">
                <a href="">Order Now</a>
              </p>
             
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="/img/burger.jpg" alt="chicken" />
              </div>
              <h1 className="price__heading">Fried Chicken</h1>
              <p className="price__text">
                <a href="">Order Now</a>
              </p>
              
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="/img/wings.jpg" alt="wings" />
              </div>
              <h1 className="price__heading">Wings World</h1>
              <p className="price__text">
                <a href="">Order Now</a>
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prices;
