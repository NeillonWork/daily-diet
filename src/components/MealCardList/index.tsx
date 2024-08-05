import { Container, DescMealTitle, Form } from "./styles";

type Props = {
  desc: string;
};

export function MealCardList({ desc }: Props) {
  return (
    <Container>
      <Form>
        <DescMealTitle>{desc}</DescMealTitle>
      </Form>
    </Container>
  );
}
