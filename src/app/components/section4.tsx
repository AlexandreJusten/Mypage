import React, { useEffect, useRef } from "react";
import { Card, CardBody, Grid, Grommet, Heading, Text } from "grommet";
import Slider from "react-slick"; // Importa o carrossel
import { Code, Device, PhoneVertical, Server } from "grommet-icons";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Lottie from "lottie-react";
import animationData from '../../../public/Animation7.json';
import { size } from "polished";

const theme = {
  global: {
    font: {
      family: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto",
    },
    colors: {
      text: "white",
    },
  },
};

const courses = [
  { title: "Cursos FrontEnd", description: "Desenvolvimento moderno de interfaces.", icon: <Code size="large" color="brand" /> },
  { title: "Cursos BackEnd", description: "APIs e servidores eficientes.", icon: <Server size="large" color="brand" /> },
  { title: "Cursos Mobile", description: "Criação de apps para Android ", icon: <PhoneVertical size="large" color="brand" /> },
];

const CourseCards = () => {
  // Configurações do carrossel
  const settings = {
    dots: true, // Exibe os pontos de navegação
    // arrows: false, // Desativa as setas de navegação
    infinite: true, // Permite rotação infinita
    speed: 500, // Velocidade da transição
    slidesToShow: 2, // Quantidade de slides visíveis
    slidesToScroll: 1, // Quantidade de slides rolados por vez
    responsive: [
      {
        breakpoint: 768, // Para telas menores que 768px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div style={{ display: "none" }} className="grid-layout">
        {/* Grid padrão para telas maiores */}
        <Grid
          columns={{ count: "fit", size: "small" }}
          gap="medium"
          pad="large"
          style={{
             boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Sombra sutil
                border: "2px solid #656565", // Linha ao redor do card
          }}
        >
          {courses.map((course) => (
            <Card
              key={course.title}
              pad="medium"
              elevation="medium"
              hoverIndicator={{ background: "light-2" }}
              style={{
                borderRadius: "12px",
                transition: "transform 0.3s ease",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Sombra sutil
                border: "2px solid #656565", // Linha ao redor do card
                
              }}
            >
              <CardBody align="center">
                {course.icon}
                <Heading level={4} margin="small">{course.title}</Heading>
                <Text size="small" color="light-4">{course.description}</Text>
              </CardBody>
            </Card>
          ))}
        </Grid>
      </div>

      {/* Carrossel para telas menores */}
      <Slider {...settings} className="carousel-layout">
        {courses.map((course) => (
          <div key={course.title}>
            <Card
              pad="medium"
              elevation="medium"
              hoverIndicator={{ background: "light-2" }}
              style={{
                borderRadius: "12px",
                transition: "transform 0.3s ease",
                border: '2px solid #656565',
                margin: "0 1rem",
                // height: "60vh",
                width: "34vw",
                // marginLeft:'25%'
              }}
            >
              <CardBody align="center">
                {course.icon}
                <Heading level={4} margin="small">{course.title}</Heading>
                <Text size="small" color="light-4">{course.description}</Text>
              </CardBody>
            </Card>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default function Section4() {
   const lottieRef = useRef(null);
  
      useEffect(() => {
          if (lottieRef.current) {
              lottieRef.current.setSpeed(0.5); // Define a velocidade da animação (0.5x mais lenta)
          }
      }, []);
  return (
    <Grommet theme={theme} full>
      <div style={{ height: "100vh", padding: "4rem"}}>
        <div  > 
       
                    <div style={{ width:'80%',marginLeft:'10%'}}>

        <CourseCards />
                    </div>
        </div>
      
      </div>
    </Grommet>
  );
}
