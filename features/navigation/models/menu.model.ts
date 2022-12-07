import { JSXElementConstructor } from "react";

export type MenuItem = {
    title: string;
    link: string;
    icon: JSXElementConstructor<any>;
}