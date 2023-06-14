import React, { useEffect, useState } from "react";
import { Container, Button, Text } from "./styles";
import { useNavigation } from "@react-navigation/native";

import { getAll, getId } from "../../api/get";

export default function Home() {
  const { navigate } = useNavigation();
  const [list, setList] = useState<object[]>([]);

  useEffect(() => {
    // getAll({ setList });
  });

  useEffect(() => {
    console.log(list);
  }, [list]);

  return (
    <Container>
      <Button onPress={ () => { navigate('Details') } }>
        <Text>{ list }</Text>
      </Button>
    </Container>
  );
}
