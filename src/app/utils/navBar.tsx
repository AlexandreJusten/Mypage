"use client";
/* eslint-disable */

import {  Grommet, Image } from "grommet";
import { Anchor, Box, Header, Nav } from "grommet";
import { useState } from "react";

const items = [
  { label: "Inicial", href: "#section-1" },
  { label: "Sobre", href: "#section-2" },
  { label: "Projetos", href: "#section-3" },
  { label: "Cursos", href: "#section-4" },
  { label: "Videos", href: "#section-5" },
];

const theme = {
  global: {
    font: {
      family: `-apple-system,
         BlinkMacSystemFont,
         "Segoe UI",
         Roboto`,
    },
    colors: {
      text: "white",
    },
  },
  anchor: {
    color: "white",
    hover: {
      textDecoration: "none",
    },
  },
};

const OnHeaderNav = () => {
  const [active, setActive] = useState("Home");

  return (
    <Header background="transparent" pad="medium" justify="between" >
      {/* Nome à esquerda */}
      <Box>
        
      </Box>

      {/* Navegação à direita */}
      <Box direction="row" align="center" gap="medium">
        <Nav direction="row">
          {items.map((item) => (
            <Box
              key={item.label}
              style={{ position: "relative", padding: "0 10px" }}
            >
              <Anchor
                // href={item.href}
                label={item.label}
                // onClick={() => setActive(item.label)}
                style={{
                  fontWeight: active === item.label ? "bold" : "normal",
                  color: active === item.label ? "white" : "#bbb",
                }}
              />
              {/* {active === item.label && (
                <Box
                  style={{
                    position: "absolute",
                    bottom: "-5px",
                    left: "0",
                    height: "2px",
                    width: "100%",
                    background: "white",
                  }}
                />
              )} */}
            </Box>
          ))}
        </Nav>
        <Box
          style={{
            height: "0.5px",
            background: "white",
            width: "15vw", // Tamanho da linha
            marginLeft: "10px",
          }}
        />
      </Box>
    </Header>
  );
};

export default function NavBar() {
    return (
        <Grommet plain theme={theme}>
        <Box margin='70px' style={{ marginBottom: '0px',marginTop:'40px' }}>
       
              {/* <span style={{
            fontFamily: "'Georgia', serif", // Fonte clássica e elegante
            fontWeight: 'normal',  // Deixa a fonte mais fina
            fontSize: '1.2rem', // Ajuste o tamanho da fonte conforme necessário
          }}>
            Alexandre Justen
          </span> */}
          <Image src="/logo.png" style={{
            width: '9vw',
            opacity: '60%'
          }}>
          </Image>
          {/* </Anchor> */}
        </Box>
        <OnHeaderNav />
      </Grommet>
    );
  }
