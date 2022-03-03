import { Box, Flex } from '@chakra-ui/react';
import { MdPeopleAlt } from 'react-icons/md';
import { IoIosArrowDown } from 'react-icons/io';
import { Link } from 'react-router-dom';
type Props = {
  children: string;
};

const Button: React.FC<Props> = ({ children }) => (
  <Link to="/">
    <Flex
      alignItems="center"
      p="4px 9px"
      background="rgba(249,249,249,0.5)"
      height="40px"
      borderRadius="20px"
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        w="30px"
        h="30px"
        mr="4"
        background="#fff"
        borderRadius="50%"
      >
        <MdPeopleAlt />
      </Box>
      <Box color="#fff">{children}</Box>
      <Box>
        <IoIosArrowDown />
      </Box>
    </Flex>
  </Link>
);

export default Button;
