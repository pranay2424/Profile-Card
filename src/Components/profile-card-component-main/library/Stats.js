import styled from "styled-components";

const Stats = styled.div`
  @media only screen and (max-width: 375px) {
    display: flex;
  margin-top: 10px;
  justify-content: space-around;
  align-items: center;
  height:60px;
 font-weight:700;
 p{
     margin: 2px;
     font-size: 12px;
    color:hsl(0, 0%, 59%) ;

 }
 nav{
     display: flex;
     flex-direction:column;
     text-align: center;
 }
  }
  display: flex;
  margin-top: 10px;
  justify-content: space-around;
  align-items: center;
  height:60px;
 font-weight:700;
 p{
     margin: 2px;
     font-size: 12px;
    color:hsl(0, 0%, 59%) ;

 }
 nav{
     display: flex;
     flex-direction:column;
     text-align: center;
 }
`;

export default Stats;
