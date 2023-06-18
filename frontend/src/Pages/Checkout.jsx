import { useState, useEffect } from 'react';
import { Box, Heading, Stack, FormControl, FormLabel, Input, Button, Text, Image, Spinner } from '@chakra-ui/react';
import { FaCreditCard } from 'react-icons/fa';

const CheckoutPage = () => {
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [zip, setZip] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCVC, setCardCVC] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [paymentDone, setPaymentDone] = useState(false);
  const [processingPayment, setProcessingPayment] = useState(false);

  useEffect(() => {
    const productDetail = localStorage.getItem('productDetails');
    if (productDetail) {
      const { img, price, user } = JSON.parse(productDetail);
      setSelectedImage({ url: img, price, user });
    }
  }, []);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const handleZipChange = (e) => {
    setZip(e.target.value);
  };

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleCardExpiryChange = (e) => {
    setCardExpiry(e.target.value);
  };

  const handleCardCVCChange = (e) => {
    setCardCVC(e.target.value);
  };

  const handleCheckout = () => {
    // Simulate payment processing
    setProcessingPayment(true);
    alert("wait for some time to done the payment")
    setTimeout(() => {
      // Assuming payment is successful
      setPaymentDone(true);
      setProcessingPayment(false);

      // Save the address in local storage
      localStorage.setItem('city', city);
      localStorage.setItem('country', country);
      localStorage.setItem('zip', zip);
    }, 1000);

  };

  const handleDownload = () => {
    if (paymentDone && selectedImage) {
      fetch(selectedImage.url)
        .then((response) => response.blob())
        .then((blob) => {
          // Create a temporary download link
          const downloadLink = document.createElement('a');
          downloadLink.href = URL.createObjectURL(blob);
          downloadLink.download = selectedImage.name;
  
          // Simulate a click event to trigger the download
          downloadLink.click();
  
          // Clean up the temporary download link
          URL.revokeObjectURL(downloadLink.href);
          
          // Remove the image from local storage
          localStorage.removeItem('productDetails');
  
          setSelectedImage(null);
        })
        .catch((error) => {
          console.error('Error downloading the image:', error);
        });
    } else if (!paymentDone) {
      alert('Payment must be completed before downloading.');
    } else {
      alert('An image must be selected before downloading.');
    }
  };
  
  return (
    <Box display="flex"
     >
      <Box width="50%" mr={8}>
        <Heading as="h1" size="lg" mb={4}>
          Checkout
        </Heading>
        <Stack spacing={4}>
          <Box>
            <FormControl>
              <FormLabel>City</FormLabel>
              <Input type="text" value={city} onChange={handleCityChange} />
            </FormControl>
          </Box>
          <Box>
            <FormControl>
              <FormLabel>Country</FormLabel>
              <Input type="text" value={country} onChange={handleCountryChange} />
            </FormControl>
          </Box>
          <Box>
            <FormControl>
              <FormLabel>Zip</FormLabel>
              <Input type="text" value={zip} onChange={handleZipChange} />
            </FormControl>
          </Box>
          <Box>
            <FormControl>
              <FormLabel>Card Number</FormLabel>
              <Input type="text" value={cardNumber} onChange={handleCardNumberChange} />
            </FormControl>
          </Box>
          <Box>
            <FormControl>
              <FormLabel>Card Expiry</FormLabel>
              <Input type="date" value={cardExpiry} onChange={handleCardExpiryChange} />
            </FormControl>
          </Box>
          <Box>
            <FormControl>
              <FormLabel>Card CVC</FormLabel>
              <Input type="text" value={cardCVC} onChange={handleCardCVCChange} />
            </FormControl>
          </Box>
          <Button onClick={handleCheckout} colorScheme="blue">
            Proceed to Payment
          </Button>
          {processingPayment && (
            <Spinner size="sm" color="blue.500" thickness="2px" mt={2} />
          )}
        </Stack>
      </Box>
      <Box width="50%">
        <Heading as="h1" size="lg" mb={4}>
          Image Summary
        </Heading>
        {selectedImage ? (
          <>
            <Image src={selectedImage.url} alt={selectedImage.name} maxH="400px" mb={4} />
            <Text>Name: {selectedImage.user}</Text>
            <Text>Price: {selectedImage.price}</Text>
            {paymentDone ? (
              <>
                <Text mt={4}>Payment is done.</Text>
                <Button onClick={handleDownload} mt={4}>
                  Download
                </Button>
              </>
            ) : (
              <Text>Once payment is done then you can download the image</Text>
            )}
          </>
        ) : (
          <Text>No image Selected</Text>
        )}
      </Box>
    </Box>
  );
};

export default CheckoutPage;
