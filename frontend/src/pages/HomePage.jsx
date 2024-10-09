import { Container, VStack, Text, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { useProductStore } from "../store/product";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  return (
    <Container maxW="container.x1" py={12}>
      <VStack spacing={8}>
        <Text
          fontSize={"30"}
          fontWeight={"bold"}
          bgGradient={"linear(to-r, cyan.400, blue.500)"}
          bgClip={"text"}
          textAlign={"center"}
        >
          Current Products
        </Text>

        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            lg: 3,
          }}
          spacing={10}
          w={"full"}
        >
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </SimpleGrid>

        {products.length === 0 && (
          <>
            <Text
              fontSize={"x1"}
              fontWeight={"bold"}
              bgGradient={"linear(to-r, cyan.400, blue.500)"}
              bgClip={"text"}
              textAlign={"center"}
            >
              No Product Found
            </Text>
            <Link to={"/create"}>
              <Text color="blue.500" _hover={{ textDecoration: "underline" }}>
                Create a Product
              </Text>
            </Link>
          </>
        )}
      </VStack>
    </Container>
  );
};

export default HomePage;
