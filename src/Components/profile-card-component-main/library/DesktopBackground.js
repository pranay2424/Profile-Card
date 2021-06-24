import styled from "styled-components";

const DesktopBackground = styled.div`
  @media only screen and (max-width: 555px) {
    background-color: hsl(185, 75%, 39%);
    height: auto!important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    width: auto !important;
  }
  background-color: hsl(185, 75%, 39%);
  height: 100vh;
  width: 100vw;
  font-family: "Kumbh Sans", sans-serif;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

export default DesktopBackground;
