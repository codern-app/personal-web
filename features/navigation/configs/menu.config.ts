import { FeaturedPlayList } from "@mui/icons-material";
import { MenuItem } from "../models/menu.model"

const skillMenuItem: MenuItem = {
    title: "Skills",
    link: "/skills",
    icon: FeaturedPlayList
}

const experienceMenuItem: MenuItem = {
    title: "Experience",
    link: "/experience",
    icon: FeaturedPlayList
}

const topMenu: MenuItem[] = [skillMenuItem, experienceMenuItem];
const sideMenu: MenuItem[] = [skillMenuItem, experienceMenuItem];

export const menuConfig = {
    topMenu,
    sideMenu,
}