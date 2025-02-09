"use client";

import { Card, CardBody, Grid, Grommet, Heading, Text } from "grommet";
import { Code, Server, PhoneVertical } from "grommet-icons";
import Lottie from "lottie-react";
import { useEffect, useRef } from "react";
import animationData from '../../../public/Animation2.json';
import { motion } from "framer-motion";

const theme = {
    global: {
        font: {
            family: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto`,
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

const data = [
    { city: 'FrontEnd', state: 'Idaho', icon: <Code size="large" color="brand" /> },
    { city: 'BackEnd', state: 'Colorado', icon: <Server size="large" color="brand" /> },
    { city: 'Mobile', state: 'California', icon: <PhoneVertical size="large" color="brand" /> },
];

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

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
};

export const Children = () => (
    <Grommet theme={themeCard}>
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
        >
            <Grid
                pad="large"
                columns={['small', 'small', 'small']}
                justifyContent="center"
                gap="medium"
                responsive
            >
                {data.map((datum) => (
                    <motion.div key={datum.city} variants={fadeIn} >
                        <Card
                            pad="medium"
                            width="small"
                            elevation="large"
                            style={{
                                borderRadius: '12px',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                transition: 'transform 0.3s ease, border-color 0.3s ease',
                                border: '2px solid #656565',
                                position: 'relative',
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.transform = 'scale(1.05)';
                                e.target.style.borderColor = '#7d4cdb';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.transform = 'scale(1)';
                                e.target.style.borderColor = '#656565';
                            }}
                        >
                            <CardBody align="center">
                                {datum.icon}
                                <Heading level={4} margin={{ top: 'small' }}>
                                    {datum.city}
                                </Heading>
                                <Text size="small" color="dark">
                                    {datum.state}
                                </Text>
                            </CardBody>
                        </Card>
                    </motion.div>
                ))}
            </Grid>
        </motion.div>
    </Grommet>
);

export default function Section1() {
    const lottieRef = useRef(null);

    useEffect(() => {
        if (lottieRef.current) {
            lottieRef.current.setSpeed(0.5);
        }
    }, []);

    
    return (
        <Grommet plain theme={theme}>
            <div
                style={{
                    position: "absolute",
                    top: "10%",
                    left: "4%",
                    transform: "translate(-50%, -50%) rotate(270deg)",
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
                    Desenvolvedor FullStack
                </span>
                <div
                    style={{
                        height: "0.5px",
                        background: "#656565",
                        width: "10vw",
                    }}
                />
            </div>

            <div
                className="w-screen h-screen flex items-start justify-start relative"
            >
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute top-5 left-5"
                    style={{
                        margin: "50px 10vw",
                        width: "50%",
                    }}
                >
                    <h1 className="font-bold text-4xl">Bem Vindo ao Meu Site</h1>
                    <p
                        style={{
                            marginTop: '20px',
                            textAlign: "left",
                        }}
                    >
                        Meu Nome é Alexandre Justen e tenho como foco o desenvolvimento de aplicações web,
                        utilizando tecnologias como JavaScript e Java. Tenho experiência comprovada em desenvolvimento
                        mobile e inteligência artificial, com capacidade para adaptar soluções tecnológicas de alto impacto
                        para diversas plataformas e contextos.
                    </p>
                </motion.div>

                <div
                    style={{
                        margin: '20vw 8vw',
                    }}
                >
                    <Children />
                </div>

                <div
                    style={{
                        textAlign: "right",
                        position: "absolute",
                        top: "5vh",
                        right: "2vw",
                    }}
                >
                    <Lottie
                        animationData={animationData}
                        loop={true}
                        lottieRef={lottieRef}
                        style={{
                            width: "30vw",
                            maxWidth: "500px",
                            height: "auto",
                            filter: "grayscale(100%)",
                            backgroundColor: "transparent",
                        }}
                    />
                </div>
            </div>
        </Grommet>
    );
}
