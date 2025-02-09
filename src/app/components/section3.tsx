"use client";
/* eslint-disable */

import { Card, CardBody, Grid, Grommet, Heading, Text } from "grommet";


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

const experienceData = [
    {
        title: "FAPESC",
        items: [
            "2023 - PROJETO Aplicação de algoritmos de compartilhamento de segredos e anonimização de dados para adequação de sistemas à LGPD",
        ],
    },
    {
        title: "ISI Sistemas Embarcados",
        items: [
            "Desenvolvedor Full Stack e Mobile no Instituto SENAI de Inovação em Sistemas Embarcados, com foco em tecnologias como Spring Boot, ReactJS e React Native para criar soluções web e mobile robustas e escaláveis.",
        ],
    },
    {
        title: "Atual - Professor Senai Aprendizagem Industrial",
        items: [
            "Professor de Desenvolvimento de Sistemas no Senai São José/SC",
        ],
    },
];

const experienceData2 = [
    {
        title: "Trabalho Voluntário",
        items: [
            "2022 - WebSite, Implantação, testes e entrega da Vitrine Virtual da AMA (Associação dos pais e amigos do autista de Canoinhas)",
            "2022 - Informática para cidadãos socialmente vulneráveis (CRAS)",
        ],
    },
    {
        title: "INTEROP INFORMATICA LTDA",
        items: [
            "2022 - Assistente administrativo, Instalação do sistema nas urnas eletrônicas e administração das mesmas no período eleitoral de 2022",
        ],
    },
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

export const Children = () => (
    <Grommet theme={themeCard}>
        <Grid
            pad="large"
            columns={['repeat(auto-fill, minmax(250px, 1fr))']} // Responsivo
            justifyContent="center"
            gap="medium"
        >
            {experienceData.map((datum) => (
                <Card
                    key={datum.title}
                    pad="medium"
                    width="medium"
                    elevation="large"
                    style={{
                        borderRadius: '12px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        transition: 'transform 0.3s ease',
                        border: '2px solid #656565',
                        position: 'relative',
                    }}
                    onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
                    onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
                >
                    <CardBody align="center">
                        <Heading level={4} margin={{ top: 'small', bottom: '20px' }}>
                            {datum.title}
                        </Heading>
                        <Text size="small" color="dark">
                            {datum.items}
                        </Text>
                    </CardBody>
                </Card>
            ))}
        </Grid>
    </Grommet>
);

export const Children2 = () => (
    <Grommet theme={themeCard}>
        <Grid
            pad="large"
            columns={['repeat(auto-fill, minmax(250px, 1fr))']} // Responsivo
            justifyContent="center"
            gap="medium"
        >
            {experienceData2.map((datum) => (
                <Card
                    key={datum.title}
                    pad="medium"
                    width="medium"
                    elevation="large"
                    style={{
                        borderRadius: '12px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        transition: 'transform 0.3s ease',
                        border: '2px solid #656565',
                        position: 'relative',
                    }}
                    onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
                    onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
                >
                    <CardBody align="center">
                        <Heading level={4} margin={{ top: 'small', bottom: '20px' }}>
                            {datum.title}
                        </Heading>
                        <Text size="small" color="dark">
                            {datum.items}
                        </Text>
                    </CardBody>
                </Card>
            ))}
        </Grid>
    </Grommet>
);

export default function Section3() {
    return (
        <Grommet plain theme={theme}>
            <div
                style={{
                    position: "absolute",
                    top: "62%",
                    left: "0%",
                    transform: "translate(0%, -50%) rotate(270deg)",
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
                    Meus Trabalhos
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
                <div
                    className="absolute top-5 left-[12vw]"
                    style={{
                        margin: "-100px 100px",
                        width: "100%",
                    }}
                >
                    <Children />
                </div>
                <div
                    className="absolute top-14 left-[16vw]"
                    style={{
                        margin: "150px 0px",
                        width: "100%",
                    }}
                >
                    <Children2 />
                </div>
            </div>
        </Grommet>
    );
}
