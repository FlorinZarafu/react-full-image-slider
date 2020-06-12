import React from "react";
import "./Slider.scss";
import Slide from "./components/slide.component";
// import Button from "./components/button.component";
import ImgComp from "./components/ImgComp";
import p1 from "./assets/p1.jpg";
import p2 from "./assets/p2.jpg";
import p3 from "./assets/p3.jpg";
import p4 from "./assets/p4.jpg";

class Slider extends React.Component {
  state = {
    sliderImgs: [
      <ImgComp src={p1} />,
      <ImgComp src={p2} />,
      <ImgComp src={p3} />,
      <ImgComp src={p4} />,
    ],
    x: 0,
  };
  goLeft = () => {
    const { sliderImgs, x } = this.state;
    const newPos = x === 0 ? -100 * (sliderImgs.length - 1) : x + 100;
    this.setState({
      x: newPos,
    });
    console.log(newPos);
  };
  goRight = () => {
    const { sliderImgs, x } = this.state;
    const newPos = x === -100 * (sliderImgs.length - 1) ? 0 : x - 100;
    this.setState({
      x: newPos,
    });
    console.log(newPos);
  };
  render() {
    const { sliderImgs, x } = this.state;
    const sliderImgList = sliderImgs.map((sliderImg, index) => (
      <div
        className="slide"
        key={index}
        style={{ transform: `translateX(${x}%)` }}
      >
        {sliderImg}
      </div>
      //   <Slide
      //     key={index}
      //     sliderImg={sliderImg}
      //     style={{ transform: `translateX(${x}%)` }}
      //   />
    ));
    return (
      <div className="slider">
        {sliderImgList}
        <button id="goLeft" onClick={this.goLeft}>
          Left
        </button>
        <button id="goRight" onClick={this.goRight}>
          Right
        </button>
        {/* <Button className="goLeft" name="Left" />
        <Button id="goRight" name="right" /> */}
      </div>
    );
  }
}
export default Slider;
