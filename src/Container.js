import React, { Component } from 'react';
import App from './App.js';

var farmPics = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiDyFcvz5PhzQxuiFseY1-X4lNYBHFyXkB1uQe7nzgTFnZBalcVQ", "http://www.mountainviewgrand.com/files/2794/Farm_summer_1.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAqZ-whO2rLlkS8w7BIF3Ztft3o3gW0yJ12uVQl47jU4b7GkcC", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD4j4MZWI9Zr_bjbKmnjr1CzECARhp6gY-T0th2qbkRNdsLZ55IQ", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3TDK1-GjVsHYuSBIx5AEhe7UyTmgrUkgCJYTg0O5xQeRO3ldwVQ", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoLrgyeaW-C2BFF1ColZ1OIUZactWk7rTvJgSdPt6imVL2VAuHSw"];

function getRandomFarm(imgAr){
  var num = Math.floor( Math.random() * imgAr.length );
  var img = imgAr[ num ];
  return img;
  //var imgStr = '<img src="'+ img + '" alt = "">';
  //document.write(imgStr); document.close();
}

var sectionStyle = {
  //background
  //background
  width: "100%",
  height: "100%",
  backgroundImage: "url(" + getRandomFarm(farmPics) + ")",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

class Container extends Component {
  render() {
    return (
      <section style={ sectionStyle }>
      <App />
      </section>
    );
  }
}
export default Container;
