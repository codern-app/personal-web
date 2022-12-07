import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import { ReactNode, useState } from "react";
import { SideMenuComponent } from "./side-menu.component";
import { HeaderComponent } from "./header.component";

type Props = {
  children: ReactNode;
};

export const WrapperComponent: React.FC<Props> = ({ children }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <HeaderComponent setIsSideBarOpen={setIsSideBarOpen} />
      <Container>{children}</Container>
      <SideMenuComponent isSideBarOpen={isSideBarOpen} setIsSideBarOpen={setIsSideBarOpen} />
    </Box>
  );
};
