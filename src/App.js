import React from "react";
import "./App.css";

function App() {
  const items = ["HTML", "css", "js Es5", "js Es6", "React"];

  const heroes = [
    {
      id: 1,
      nome: "Tony",
      cognome: "Stark",
      eta: "40",
      skill: "React",
      imgSrc: 'https://oneelpis.files.wordpress.com/2019/12/d95ac9d6f0acd56e12b9452301c763cd1aeffe51.jpg'
    },
    {
      id: 2,
      nome: "Steve",
      cognome: "Rogers",
      eta: "102",
      skill: "Angular",
      imgSrc: 'https://i.pinimg.com/736x/aa/f0/2c/aaf02c6c4ea93198ceda82d02f555ed9.jpg'
    },
    {
      id: 3,
      nome: "Bruce",
      cognome: "Banner",
      eta: "39",
      skill: "Vue",
      imgSrc: 'https://i.pinimg.com/originals/dc/07/7f/dc077fb9253b756cfbd86a2d7ac1dca9.jpg'
    },
  ];

  return (
    <div className="container">
      <div className="imgContainer">
        <img
          src="https://thumbor-gc.tomandco.uk/unsafe/trim/fit-in/342x342/center/middle/smart/filters:upscale():fill(white):sharpen(0.5,0.5,true)/https://shop.eaglemoss.com/static/media/catalog/product/i/m/abyswe045_3.jpg"
          alt=""
          className="img"
        />
      </div>
      <div className="cardContainer">
        <List />
      </div>
    </div>
  );

  //   ("ul",{id:'lista'},items.map( (item,index) => React.createElement('li',{index},item))),

  function ListItems() {
    const list = items.map((item, index) => <li key={item[index]}>{item},</li>);

    return <ul className="listStyle">{list}</ul>;
  }

  function Hero({ id, nome, cognome, eta, skill, imgSrc }) {
    // const {id, nome, cognome, eta, skill} = heroes
    return (
      <h2>
        Io {nome} {cognome} ho {eta} anni, conosco molto bene {skill}
      </h2>
    );
  }

  function List() {
    const heroList = heroes.map((hero) => (
      <div className="card">
        <div className="imgHero">
            <img src={hero.imgSrc} style={{width: '80px', borderRadius: '50%', border: '5px', height:'80px'}} alt="asdasda"/>
        </div>
        <ListItems />
        <Hero {...hero} />
      </div>
    ));
    return heroList;
  }
}

export default App;

