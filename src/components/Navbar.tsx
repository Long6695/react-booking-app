import React from 'react';
import { Flex, Box, Stack, Text } from '@chakra-ui/react';
import { MdFlight, MdHotel } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Button from './Button';
import background from '../assets/images/background-nav.png';

type Props = {
  component: JSX.Element;
};

const Navbar: React.FC<Props> = ({ component }) => {
  return (
    <div style={{ position: 'relative' }}>
      <Flex
        backgroundImage={background}
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        height="431px"
        width="100%"
        pt="40px"
        px="60px"
        justifyContent="flex-end"
      >
        <Stack spacing={4} direction="row">
          <Button>Become a partner</Button>
          <Button>Thanh Long</Button>
        </Stack>
      </Flex>
      <Box
        position="absolute"
        top="400px"
        left="50%"
        transform="translate(-50%,-50%)"
        maxW="1000px"
        width="100%"
      >
        <Stack spacing={4} direction="row" color="#fff">
          <Link to="/">
            <Box>
              <MdFlight size={40} />
              <Text fontSize="md">FLIGHTS</Text>
            </Box>
          </Link>
          <Link to="/hotel">
            <Box>
              <MdHotel size={40} />
              <Text fontSize="md">HOTEL</Text>
            </Box>
          </Link>
        </Stack>
        <Box>{component}</Box>
      </Box>
    </div>
  );
};

export default Navbar;
