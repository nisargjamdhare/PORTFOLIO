import JAVA from "../assets/img/skill/java.png";
import SQL from "../assets/img/skill/SQL.png";
import CSS from "../assets/img/skill/css.png";
import CANVA from "../assets/img/skill/Canva.png";
import SPRING from "../assets/img/skill/spring.png";
import POSTMAN from "../assets/img/skill/Postman.png";
import GITHUB from "../assets/img/skill/git.png";
import MONGO from "../assets/img/skill/Mongo.png";
import REACT from "../assets/img/skill/React.png";
import HTML from "../assets/img/skill/Html.png";
import Slider from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      autoPlaySpeed: 500
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      autoPlaySpeed:500
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      autoPlaySpeed: 600
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      autoPlaySpeed: 600
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>Proficient in Java and SQL, with a strong foundation in backend development.<br/>
                Beginner-level proficiency in React for front-end development.
                <br/>
                Keen interest in Data Structures and Algorithms (DSA) to enhance problem-solving skills.</p>
              <Slider
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={600} // Set the autoplay speed to 1000 milliseconds (1 second)
                className="owl-carousel owl-theme skill-slider"
                stopOnHover={true}
                slideTransition={true} // Enable smooth transitions
              >
                
                            <div className="item">
                               <img src={JAVA} alt="Image" />
                                 <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={REACT} alt="Image" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={SQL} alt="Image" />
                                <h5>MySql</h5>
                            </div>
                            <div className="item">
                               <img src={HTML} alt="Image" />
                                 <h5>Html</h5>
                            </div>
                            <div className="item">
                               <img src={CSS} alt="Image" />
                                 <h5>Css</h5>
                            </div>
                            <div className="item">
                                <img src={MONGO} alt="Image" />
                                <h5>Mongo DB</h5>
                            </div>
                            <div className="item">
                                <img src={SPRING} alt="Image" />
                                <h5>Spring Boot</h5>
                            </div>
                            <div className="item">
                                <img src={POSTMAN} alt="Image" />
                                <h5>PostMan</h5>
                            </div>
                            <div className="item">
                                <img src={GITHUB} alt="Image" />
                                <h5>Github</h5>
                            </div>
                            <div className="item">
                                <img src={CANVA} alt="Image" />
                                <h5>Canva</h5>
                            </div>
                           
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}