/* eslint-disable */

import React, { useEffect, useState } from "react";
import { Card, CardBody, Grid, Grommet, Heading, Text } from "grommet";
import axios from "axios";

const themeCard = {
  global: {
    colors: {
      brand: "#363636",
      dark: "#4B4B4B",
      light: "#E4E4E4",
    },
    font: {
      family: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto',
    },
  },
};

const RepositoryCard = ({ repo }) => (
  <Card
  pad="medium"
  width="300px"
  height="140px"
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
    <CardBody>
      <Heading level={3} size="20px" margin={{ top: "small", bottom: "small" }}>
        {repo.name}
      </Heading>
      <Text size="small" color="dark-4">
        {repo.description}
      </Text>
      <Text size="xsmall" color="dark-4" margin={{ top: "small" }}>
        Linguagem: {repo.language || "N/A"}
      </Text>
      {repo.stargazers_count !== undefined && (
        <Text size="xsmall" color="dark-4">
          ⭐ {repo.stargazers_count}
        </Text>
      )}
    </CardBody>
  </Card>
);

const RepositoriesGrid = () => {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/AlexandreJusten/repos?sort=created&direction=desc")
      .then((response) => {
        setRepositories(response.data.slice(0, 4));
      })
      .catch((error) => {
        console.error("Erro ao buscar repositórios: ", error);
      });
  }, []);

  return (
    <Grommet theme={themeCard}>
      <Grid
        columns={{ count: 4, size: "small" }}
        justify="center"
        responsive
        gap="20px"
      >
        {repositories.map((repo, index) => (
          <RepositoryCard key={index} repo={repo} />
        ))}
      </Grid>
    </Grommet>
  );
};

export default RepositoriesGrid;
