import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} width={"60px"} />
    </HStack>
  );
};

export default NavBar;
