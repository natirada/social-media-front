import { deviceSizes } from "style/themes/defaultTheme";
import styled, {css} from "styled-components";


export const Container = styled.div`
height: 100vh;
overflow-y: auto;
width: 100%;
background-color: ${({theme}) => theme.colors.gray};
display: grid;
grid-template-columns: repeat(7, 1fr);
grid-template-rows: 0.1fr 0.9fr;
grid-template-areas: "header header header header header header header"
           "drawer drawer main main main contact contact";

@media (max-width: ${deviceSizes.tablet}px) {
    grid-template-areas: "header header header header header header header"
           "main main main main main contact contact";
}

@media (max-width: ${deviceSizes.mobileL}px) {
    grid-template-areas: "header header header header header header header"
           "main main main main main main main";
       
}


`;

export default {
    Container
}

