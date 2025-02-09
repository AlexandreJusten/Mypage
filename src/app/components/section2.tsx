/* eslint-disable */

import { Card, CardBody, Grid, Grommet, Heading, Text } from "grommet";
import React, { useState } from "react";
import RepositoriesGrid from "../utils/repositories";

const themeCard = {
  global: {
    colors: {
      brand: '#363636',
      dark: '#4B4B4B',
      light: '#E4E4E4',
    },
    font: {
      family: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto',
    },
  },
};

const data = [
  { 
    title: 'Sobre',
    content: `Sou Alexandre Justen, programador apaixonado por criar soluções inovadoras e escaláveis. Com experiência em ReactJS, Node.js, Spring Boot e Django, desenvolvo sistemas web e mobile com foco em performance e qualidade.

Além de ser professor de desenvolvimento de sistemas no SENAI, participei de projetos como a Vitrine Virtual da AMA e a adequação à LGPD na FAPESC. Sempre em busca de novos desafios, meu objetivo é aplicar tecnologias como ReactNative e Python para impactar positivamente os usuários.

Meu foco está em trabalho em equipe, comunicação eficaz e resolução de problemas, sempre com o desejo de aprender e evoluir.`,
    icon:''
  },
 
];

export const Children = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <Grommet theme={themeCard}>
      <Grid 
        pad="large" 
        columns={{ 
          count: 'fit', 
          size: 'auto', 
          responsive: true 
        }} 
        justifyContent="center" 
        gap="medium"
      >
        {data.map((datum, index) => (
          <Card
            key={index}
            pad="medium"
            width="xlarge"
            elevation="large"
            style={{
              borderRadius: '12px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease, border 0.3s ease',
              border: '2px solid transparent',
              position: 'relative',
            }}
          >
            <CardBody align="left">
              {datum.icon}
              <Heading level={2} margin={{ top: 'small' }} alignSelf="left">
                {datum.title}
              </Heading>
              <Text size="medium" color="#a0a0a0" margin={{ top: 'small' }}>
                {datum.content}
              </Text>
              {datum.technologies && (
                <Grid
                  columns={{
                    count: 4, 
                    size: 'xsmall',
                    responsive: true 
                  }}
                  gap="small"
                  align="left"
                  justify="center"
                  style={{ marginTop: '0px' }}
                >
                  {datum.technologies.map((tech, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        transition: 'transform 0.3s ease',
                      }}
                      className="tech-icon-container"
                    >
                      <div
                        onMouseEnter={() => setHoveredIndex(idx)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        style={{
                          cursor: 'pointer',
                          transition: 'color 0.3s ease',
                        }}
                      >
                        {React.cloneElement(tech.icon, {
                          color: hoveredIndex === idx ? '#7d4cdb' : 'brand',
                        })}
                      </div>
                      <Text size="xsmall" color="dark" style={{ marginTop: '5px' }}>
                        {tech.name}
                      </Text>
                    </div>
                  ))}
                </Grid>
              )}
            </CardBody>
          </Card>
        ))}
      </Grid>
    </Grommet>
  );
};

export default function Section2() {
  return (
    <Grommet plain theme={themeCard}>
      <div
        style={{
          position: "absolute",
          top: "34%",
          left: "81%",
          transform: "translate(0%, -50%) rotate(90deg)",
          transformOrigin: "center",
          whiteSpace: "nowrap",
          fontSize: "16px",
          color: "white",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            height: "0.5px",
            background: "#656565",
            width: "10vw",
          }}
        />
        <span
          style={{
            fontWeight: "normal",
            color: "#656565",
            margin: "0 5%",
          }}
        >
          Sobre Mim
        </span>
        <div
          style={{
            height: "0.5px",
            background: "#656565",
            width: "10vw",
          }}
        />
      </div>

      <div className="w-screen h-screen flex items-start justify-start relative">
        <div className="absolute top-5 left-2" style={{ margin: "-150px 0px", width: "100%" }}>
          <Children />
          <div style={{
            width:'70%',
            marginLeft: "15vw",
          }}>

        <RepositoriesGrid/>
          </div>
        </div>
      </div>
    </Grommet>
  );
}
