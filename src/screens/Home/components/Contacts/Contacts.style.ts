import { deviceSizes } from "style/themes/defaultTheme";
import styled from "styled-components";

export const Container = styled.div`
height: 100%;
min-width: 100%;
grid-area: contact;
@media (max-width: ${deviceSizes.mobileL}px) {
  display: none;
       
}
`