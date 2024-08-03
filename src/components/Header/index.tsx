import { Container, Logo, Avatar, BackIcon, BackButton } from "./styles";
import logoImg from "@assets/Logo.png";
import avatarImg from "@assets/Ellipse.png";

type Props = {
  ShowBackButton?: boolean;
};

export function Header({ ShowBackButton = false }: Props) {
  return (
    <Container>
      {ShowBackButton ? (
        <BackButton>
          <BackIcon />
        </BackButton>
      ) : (
        <>
          <Logo source={logoImg} />
          <Avatar source={avatarImg} />
        </>
      )}
    </Container>
  );
}
