import { deviceSizes } from "style/themes/defaultTheme";
import styled, {css} from "styled-components";


export const Container = styled.div`
height: 100vh;
width: 100%;
background-color: ${({theme}) => theme.colors.gray};
display: grid;
grid-template-columns: repeat(7, 1fr);
grid-template-rows: 1fr 0.8fr;
grid-template-areas: "header header header header header header header"
           "contact contact main main main menu menu";

@media (max-width: ${deviceSizes.tablet}px) {
    grid-template-areas: "header header header header header header header"
           "contact contact main main main main main";
}

@media (max-width: ${deviceSizes.mobileL}px) {
    grid-template-areas: "header header header header header header header"
           "main main main main main main main";
       
}


`;

export default {
    Container
}

