import React from 'react';
import {
  Flex,
  Stack,
  FormControl,
  FormLabel,
  Select,
  Button,
  Text,
} from '@chakra-ui/react';
const SearchHotel = () => {
  return (
    <>
      <Flex background="#fff" direction="column" p="20px" borderRadius="20px">
        <Stack direction="row" spacing="6">
          <FormControl background="#EEF0F4" borderRadius="20px" padding="20px">
            <FormLabel htmlFor="from">From</FormLabel>
            <Select id="from" placeholder="Select country">
              <option>United Arab Emirates</option>
              <option>Nigeria</option>
            </Select>
          </FormControl>
          <FormControl background="#EEF0F4" borderRadius="20px" padding="20px">
            <FormLabel htmlFor="to">To</FormLabel>
            <Select id="to" placeholder="Select country">
              <option>United Arab Emirates</option>
              <option>Nigeria</option>
            </Select>
          </FormControl>
          <FormControl background="#EEF0F4" borderRadius="20px" padding="20px">
            <FormLabel htmlFor="country">Person</FormLabel>
            <Select id="country" placeholder="Choose people">
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </Select>
          </FormControl>
        </Stack>
        <Flex mt="30px" justifyContent="flex-end">
          <Button colorScheme="red" width={224} height={88}>
            <Text fontSize="xl" textTransform="uppercase" fontWeight="bold">
              Search Hotel
            </Text>
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default SearchHotel;
