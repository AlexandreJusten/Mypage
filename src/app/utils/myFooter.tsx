"use client";

import React from 'react';
import { Grommet as GrommetIcon } from 'grommet-icons';
import { Anchor, Box, Footer, Text } from 'grommet';

// Component to render an anchor link


// Footer content with links to GitHub, Dev.to, and email
const FooterContent = () => (
  <Box direction="row-responsive" gap="xlarge">
    <Box gap="medium">
      <Text weight="bold" size="small">
        Contato
      </Text>
      <Box>
       <span>Github: https://github.com/AlexandreJusten</span>
       <spa>DevTo: https://dev.to/alexandrejusten</spa>
      </Box>
    </Box>
  </Box>
);

export default function MyFooter() {
  return (
    <Box>
      <Footer pad="large" >
      <FooterContent />
        <Box direction="row-responsive" gap="xsmall">
          <Box align="center" gap="small">
            <GrommetIcon size="large" />
            <Text alignSelf="center" weight="bold" color="white">
              Alexandre Justen
            </Text>
          </Box>
        </Box>
     
      </Footer>
    </Box>
  );
}
