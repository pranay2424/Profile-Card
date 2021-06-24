import styled from "styled-components";

const CardStyle = styled.div`
  @media only screen and (max-width: 375px) {
    position: absolute;
  background-color: white;
  left: 50%;
  transform:translate(-50%);
  top: 280px;
  margin: 0px;
  display: flex;
  flex-direction: column;
  box-shadow: 10px 10px 50px grey;
  height: 400px;
  width: 90%;
  max-width:100%;
  border-radius: 10px;
  }

  position: relative;
  background-color: white;
  left: 50%;
  transform:translate(-50%);
  top: 280px;
  margin: 0px;
  display: flex;
  flex-direction: column;
  box-shadow: 10px 10px 50px grey;
  height: 400px;
  width: 400px;
  max-width:100%;
  border-radius: 10px;
`;

export default CardStyle;
