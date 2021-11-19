import React from 'react';
import './App.css';
import Button from "./components/Button";
import Product from "./components/Product";
import Tile from "./components/Tile";
import bag1 from "./assets/bag_1.png";
import bag2 from "./assets/bag_2.png";
import bag3 from "./assets/bag_3.png";
import bag4 from "./assets/bag_4.png";
import brand from "./assets/brand.png";
import our_story from "./assets/our_story.png";

import {logDOM} from "@testing-library/react";




function App() {

  return (
      <>
         <h1>Handbags & Purses</h1>
         <nav>
             <Button typeOfButton="button" name="to the collection" klikEvent={() => console.log("To the collection")}/>
             <Button typeOfButton="button" name="shop all bags" klikEvent={() => console.log("Shop all bags")} />
             <Button typeOfButton="button" name="pre-orders" klikEvent={() => console.log("Pre-orders")} onDisabled={true} />
         </nav>

         <main>
             <Product label="best seller" image={bag1} altToImage="image of bag1" name="The handy bag" price={400}/>
             <Product label="best seller" image={bag2} altToImage="image of bag2" name="The stylish bag" price={250}/>
             <Product label="new collection" image={bag3} altToImage="image of bag3" name="The simple bag" price={300}/>
             <Product label="new collection" image={bag4} altToImage="image of bag4" name="The trendy bag" price={150}/>
         </main>

          <footer>

              <Tile title="THE BRAND" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus debitis itaque iusto quasi quis quo sint veniam. Deserunt molestias possimus quis ratione veniam! A doloremque dolores laudantium nam nulla quam quis quisquam sequi voluptate! Consectetur, earum magnam? Obcaecati, quidem, totam!" text1="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus debitis itaque iusto quasi quis quo sint veniam. Deserunt molestias possimus quis ratione veniam! A doloremque dolores laudantium nam nulla quam quis quisquam sequi voluptate! Consectetur, earum magnam? Obcaecati, quidem, totam!" altToText={brand}/>

              <Tile image={brand} imageName="brand"/>

              <Tile image={our_story} imageName="story"/>

              <Tile title="OUR STORY" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus debitis itaque iusto quasi quis quo sint veniam. Deserunt molestias possimus quis ratione veniam! A doloremque dolores laudantium nam nulla quam quis quisquam sequi voluptate! Consectetur, earum magnam? Obcaecati, quidem, totam!"/>

          </footer>

      </>
  );
}

export default App;
