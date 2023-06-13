import React from "react";
import { Container, Button, Text } from "./styles";
import { useNavigation } from "@react-navigation/native";


export default function Home() {
  const { navigate } = useNavigation();

  return (
    <Container>
      <Button onPress={ () => { navigate('Details') } }>
        <Text>Home</Text>
      </Button>
    </Container>
  );
}
