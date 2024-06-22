import { useEffect, useState, useRef } from "react";
import { Container, SimpleGrid, Link, Box, keyframes, Text, Flex } from "@chakra-ui/react";
import { FaCalendar, FaEnvelope, FaFilePdf, FaLinkedin, FaWhatsapp, FaYoutube } from "react-icons/fa";

const typing = keyframes`
  from { width: 0 }
  to { width: 100%; }
`;

const blink = keyframes`
  50% { border-color: transparent }
`;

const Index = () => {
  const [text, setText] = useState("");
  const fullText = "Oliver Bonallack";
  const indexRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setText(fullText.substring(0, indexRef.current + 1));
      indexRef.current++;
      if (indexRef.current === fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <Container centerContent maxW="100vw" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bgGradient="linear(to-r, white, lightblue)" color="black" fontFamily="Roboto, sans-serif" overflow="hidden">
      <Box textAlign="center" mb={8}>
        <Box as="pre" fontSize="3xl" fontWeight="bold" whiteSpace="nowrap" overflow="hidden" borderRight="2px solid" animation={`${typing} 4s steps(${fullText.length}), ${blink} 0.75s step-end infinite`}>
          {text}
        </Box>
      </Box>
      <Flex justify="center" align="center" width="100%">
        <SimpleGrid columns={{ base: 2, md: 3 }} spacing={8} textAlign="center">
          <Link href="https://www.linkedin.com/in/oliverbonallack" isExternal>
            <Box textAlign="center">
              <Box as={FaLinkedin} size="48px" _hover={{ transform: "scale(1.1)" }} transition="transform 0.2s" />
              <Text mt={0.5} fontFamily="Roboto, sans-serif" fontWeight="bold">LinkedIn</Text>
            </Box>
          </Link>

          <Link href="https://www.youtube.com/@collectivevc" isExternal>
            <Box textAlign="center">
              <Box as={FaYoutube} size="48px" _hover={{ transform: "scale(1.1)" }} transition="transform 0.2s" />
              <Text mt={0.5} fontFamily="Roboto, sans-serif" fontWeight="bold">YouTube</Text>
            </Box>
          </Link>

          <Link href="https://collectivevc.substack.com" isExternal>
            <Box textAlign="center">
              <Box as={FaEnvelope} size="48px" _hover={{ transform: "scale(1.1)" }} transition="transform 0.2s" />
              <Text mt={0.5} fontFamily="Roboto, sans-serif" fontWeight="bold">Substack</Text>
            </Box>
          </Link>

          <Link href="tel:+447572794778" isExternal>
            <Box textAlign="center">
              <Box as={FaWhatsapp} size="48px" _hover={{ transform: "scale(1.1)" }} transition="transform 0.2s" />
              <Text mt={0.5} fontFamily="Roboto, sans-serif" fontWeight="bold">WhatsApp</Text>
            </Box>
          </Link>

          <Link href="https://www.oliverbonallack.com" isExternal>
            <Box textAlign="center">
              <Box as={FaFilePdf} size="48px" _hover={{ transform: "scale(1.1)" }} transition="transform 0.2s" />
              <Text mt={0.5} fontFamily="Roboto, sans-serif" fontWeight="bold">CV</Text>
            </Box>
          </Link>

          <Link href="https://www.oliverbonallack.com" isExternal>
            <Box textAlign="center">
              <Box as={FaFilePdf} size="48px" _hover={{ transform: "scale(1.1)" }} transition="transform 0.2s" />
              <Text mt={0.5} fontFamily="Roboto, sans-serif" fontWeight="bold">Portfolio Deck</Text>
            </Box>
          </Link>

          <Link href="https://www.calendly.com/oliverbonallack" isExternal>
            <Box textAlign="center">
              <Box as={FaCalendar} size="48px" _hover={{ transform: "scale(1.1)" }} transition="transform 0.2s" />
              <Text mt={0.5} fontFamily="Roboto, sans-serif" fontWeight="bold">Calendly</Text>
            </Box>
          </Link>
        </SimpleGrid>
      </Flex>
    </Container>
  );
};

export default Index;
