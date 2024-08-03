import { InfoButtons } from "@components/InfoButtons";
import { Container } from "./styles";
import { Header } from "@components/Header";

export function Home() {
  return (
    <Container>
      <Header />
      <InfoButtons title="90,86%" subtitle="das refeições dentro da dieta" />
    </Container>
  );
}
