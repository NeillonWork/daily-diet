import {
  Container,
  Logo,
  Avatar,
  BackIcon,
  BackButton,
  PageTitle,
  PageHeader,
} from "./styles";
import logoImg from "@assets/Logo.png";
import avatarImg from "@assets/Ellipse.png";
import { useNavigation } from "@react-navigation/native";

type Props = {
  ShowBackButton?: boolean;
  title?: string;
};

export function Header({ ShowBackButton = false, title }: Props) {
  const navigator = useNavigation();

  return (
    <Container>
      {ShowBackButton ? (
        <>
          <BackButton onPress={() => navigator.navigate("home")}>
            <BackIcon />
          </BackButton>
          <PageHeader>
            <PageTitle>{title}</PageTitle>
          </PageHeader>
        </>
      ) : (
        <>
          <Logo source={logoImg} />
          <Avatar source={avatarImg} />
        </>
      )}
    </Container>
  );
}
