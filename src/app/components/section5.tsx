import React, { useEffect, useRef } from "react";
import { Card, CardBody, Grid, Grommet, Heading, Text } from "grommet";
import Lottie from "lottie-react";
import animationData from "../../../public/Animation7.json";

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

const videos = [
  { title: "Video 1", description: "Descrição do vídeo 1", src: "https://www.youtube.com/embed/YGkEVaBRkp4?list=RDYGkEVaBRkp4" },
  { title: "Video 2", description: "Descrição do vídeo 2", src: "https://www.youtube.com/embed/YGkEVaBRkp4?list=RDYGkEVaBRkp4" },
  { title: "Video 3", description: "Descrição do vídeo 3", src: "https://www.youtube.com/embed/YGkEVaBRkp4?list=RDYGkEVaBRkp4" },
  { title: "Video 4", description: "Descrição do vídeo 4", src: "https://www.youtube.com/embed/YGkEVaBRkp4?list=RDYGkEVaBRkp4" },
  { title: "Video 5", description: "Descrição do vídeo 5", src: "https://www.youtube.com/embed/YGkEVaBRkp4?list=RDYGkEVaBRkp4" },
  { title: "Video 6", description: "Descrição do vídeo 6", src: "https://www.youtube.com/embed/YGkEVaBRkp4?list=RDYGkEVaBRkp4" },
];

const VideoGrid = () => {
  return (
    <div
     
    >
      <Grid
        columns={{ count: 3, size: "auto" }}
        gap="medium"
        style={{
          justifyContent: "center",
        }}
      >
        {videos.map((video) => (
          <Card
            key={video.title}
            pad="medium"
            elevation="medium"
            hoverIndicator={{ background: "light-2" }}
            style={{
              borderRadius: "12px",
              transition: "transform 0.3s ease",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              border: "2px solid #656565",
            }}
          >
            <CardBody align="center">
              <iframe
                src={video.src}
                title={video.title}
                style={{
                  width: "100%",
                  height: "150px", 
                  borderRadius: "8px",
                }}
                allowFullScreen
              />
              <Heading level={4} margin="small">
                {video.title}
              </Heading>
              <Text size="small" color="light-4">
                {video.description}
              </Text>
            </CardBody>
          </Card>
        ))}
      </Grid>
    </div>
  );
};

export default function Section5() {
  const lottieRef = useRef(null);

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(0.5);
    }
  }, []);

  return (
    <Grommet theme={theme} full >
      <div style={{ height: "100vh", padding: "4rem" }}>
        
        <div style={{ width: "80%", marginLeft: "10%" }}>
          <VideoGrid />
        </div>
      </div>
    </Grommet>
  );
}
