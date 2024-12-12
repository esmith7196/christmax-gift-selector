import { useState } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import { Box, Heading, Input, Button, Text } from '@chakra-ui/react';

const IndexPage = () => {
  const [pin, setPin] = useState('');
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [error, setError] = useState('');

  // Mapping of PINs to persons
  const pinToPersonMap = {
    '1234': 'Eric Smith',
    '5678': 'Julia Smith',
    '9101': 'Alice Johnson',
    '1121': 'Bob Brown',
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (pin.length !== 4 || isNaN(Number(pin))) {
      setError('Please enter a valid 4-digit PIN.');
      return;
    }

    // Check if PIN exists in the map
    const person = pinToPersonMap[pin];

    if (person) {
      setSelectedPerson(person);
      setError('');
    } else {
      setError('Invalid PIN. Please try again.');
    }
  };

  return (
    <Layout title="Christmas Gift Person Selector">
      <Box
        backgroundImage={'url(/xmas.jpg)'}
        minHeight={'100vh'}
        width={'100%'}
        mx={'auto'}
        backgroundSize={'cover'}
        backgroundPosition={'center'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Box
          background={'rgba(0,0,0,.8)'}
          p={8}
          borderRadius={10}
          textAlign={'center'}
          color={'white'}
          maxWidth={'400px'}
          width={'100%'}
        >
          {!selectedPerson ? (
            <>
              <Heading mb={4} fontSize={'2xl'}>
                Christmas Gift Person Selector
              </Heading>
              <Text mb={6}>
                Enter your 4-digit PIN below to find out who you are gifting
                this Christmas!
              </Text>
              <form onSubmit={handleSubmit}>
                <Input
                  placeholder="Enter your PIN"
                  value={pin}
                  onChange={e => setPin(e.target.value)}
                  type="text"
                  maxLength={4}
                  mb={4}
                  bg={'white'}
                  color={'black'}
                />
                {error && (
                  <Text color={'red.500'} mb={4}>
                    {error}
                  </Text>
                )}
                <Button type="submit" colorScheme="green" width={'100%'}>
                  Submit
                </Button>
                <Box textAlign={'center'} mt={4} color={'white'}>
                  Any issues please contact Eric to complain. No take backs. 🎅
                </Box>
              </form>
            </>
          ) : (
            <>
              <Heading mb={4} fontSize={'2xl'}>
                🎄 Your Christmas Person 🎁
              </Heading>
              <Text mb={6} fontSize={'lg'}>
                You will be gifting: <strong>{selectedPerson}</strong>
              </Text>
              <Button
                colorScheme="green"
                onClick={() => {
                  setSelectedPerson(null);
                  setPin('');
                }}
              >
                Reset
              </Button>
            </>
          )}
        </Box>
      </Box>
    </Layout>
  );
};

export default IndexPage;
