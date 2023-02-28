import React from "react";
import "./styles.css";
import styles from "./styles.module.scss";
import { Container } from "./styles";
import { Flex, Text } from "@chakra-ui/react";

const Styling = () => {
  return (
    <>
      <h1>Título</h1>
      <div className="container">
        <p className="containerText">Alguma descrição</p>
      </div>
      <div className={styles.container}>
        <p className={styles.containerText}>Alguma descrição</p>
      </div>
      <Container>
        <p className="text">Alguma descrição</p>
      </Container>
      <Flex backgroundColor="gray.50">
        <Text as="p" color="gray.900">
          Alguma descrição
        </Text>
      </Flex>
    </>
  );
};

export default Styling;
