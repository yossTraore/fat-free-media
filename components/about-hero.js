import { Component } from "react";
import Container from "../components/container"
import { motion } from "framer-motion"
import { reveal } from "../helpers/transitionHelper"

class AboutHero extends Component {
  constructor(props){
    super(props);
    this.feeling = null;
    this.state = {
      defaultHover: true,
      feelingHover: false,
      heartHover: false,
      changeHover: false,
    }
  }

  componentDidMount(){  
  }

  render(){
    return (
      <div className="bg-black text-white pt-40 md:pt-48 xl:pt-56 pb-8 md:pb-32 xl:pb-48 mb-8 md:mb-20 relative">
        <Container thin>
          <div className="relative z-10">
            <div className="relative overflow-hidden mb-3" data-scroll data-scroll-speed="0.9">
              <motion.span variants={reveal} className="block text-md md:text-lg xl:text-xl uppercase tracking-tighter leading-none">A small but mighty team</motion.span>
            </div>

            <h1 className="text-4xl md:text-5xl xl:text-6xl leading-none w-full max-w-4xl tracking-tighter pr-12 xl:pr-0 mb-10 md:mb-0" data-scroll data-scroll-speed="1.1"><span className="opacity-50">Video carries more</span> <span className="opacity-100 feeling" onMouseOver={() => this.setState({ feelingHover: true, defaultHover: false })} onMouseOut={() => this.setState({ feelingHover: false, defaultHover: true })}>feeling</span> <span className="opacity-50">and uses more senses than any other medium. It has the potential to pull at the</span> <span className="opacity-100 hearts" onMouseOver={() => this.setState({ heartHover: true, defaultHover: false })} onMouseOut={() => this.setState({ heartHover: false, defaultHover: true })}>hearts</span> <span className="opacity-50">and</span> <span className="opacity-100 change" onMouseOver={() => this.setState({ changeHover: true, defaultHover: false })} onMouseOut={() => this.setState({ changeHover: false, defaultHover: true })}>change</span> <span className="opacity-50">the minds of those who watch it more than any other format. That’s why we spent the last 2 decades working hard and honing our craft.</span></h1>
          </div>

          { this.state.defaultHover && (
            <video loop={true} playsInline autoPlay="autoplay" muted className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover z-0">
              <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" type="video/mp4" />
              
              Sorry. Your browser does not support the video tag.
            </video>
          )}
          
          { this.state.feelingHover && (
            <video loop={true} playsInline autoPlay="autoplay" muted className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover z-0">
              <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" type="video/mp4" />
              
              Sorry. Your browser does not support the video tag.
            </video>
          )}

          { this.state.heartHover && (
            <video loop={true} playsInline autoPlay="autoplay" muted className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover z-0">
              <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4" />
              
              Sorry. Your browser does not support the video tag.
            </video>
          )}

          { this.state.changeHover && (
            <video loop={true} playsInline autoPlay="autoplay" muted className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover z-0">
              <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" type="video/mp4" />
              
              Sorry. Your browser does not support the video tag.
            </video>
          )}
        </Container>
      </div>
    )
  }
}

export default AboutHero