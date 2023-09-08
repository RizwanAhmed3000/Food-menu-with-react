import './App.css';
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react';

function App() {

  const [menus, setMenus] = useState([]);

  async function getMenu() {
    const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=steak`);
    const data = await res.json();
    console.log(data.data.recipes)
    setMenus(data.data.recipes)
  }

  useEffect(function () {
    getMenu()
  }, [])
  // getMenu()

  return (
    <div className="App">
      <Header />
      <SubHeader />
      <Menu menus={menus} />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <h1 className='headerFont'>Fast React Pizza Co</h1>
  )
}
function SubHeader() {
  return (
    <>
      <h1 className='subHeading'>Our Menu</h1>
      <p style={{ fontFamily: "'Raleway', sans-serif"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ut officia ipsum dignissimos magnam. Sit, dolores quod officia temporibus nisi, placeat tempore dicta ullam, autem amet deleniti porro aspernatur officiis?</p>
    </>
  )
}
function Menu({ menus }) {
  return (
    <div style={{ width: "100vw", display: "flex", alignItems: "center", justifyContent: "center", flexWrap: "wrap", marginRight: "0px" }}>
      {
        menus.map((menu) => (
          <CardContainer image={menu.image_url} title={menu.title} />
        ))
      }
    </div>
  )
}
function Footer() {
  return (
    <p style={{ fontFamily: "'Raleway', sans-serif" }}>We are open 24 / 7</p>
  )
}

function CardContainer({image, title}) {
  return (
    <Card style={{ width: '18rem', margin: "15px" }}>
      <Card.Img variant="top" src={image} style={{width: "200px", height: "200px", objectFit: "cover", borderRadius: "25px"}}/>
      <Card.Body>
        <Card.Title style={{ fontSize: "1.2rem", fontWeight: "bold", fontFamily: "'Raleway', sans-serif"}}>{title}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default App;
