import styled from "styled-components"

export const ProductCartSection = styled.section`
display: flex;
flex-direction: row;
flex-wrap: wrap;
padding: 0.5rem;
padding-left: 1rem;
gap: 3.125rem;
margin-left: 3rem;
margin-bottom: 3rem;
`


export const ProductCart = styled.section`
display: flex;
flex-direction: column;
justify-content: space-between;
border: 1px solid;
padding: 0.625rem;
box-shadow: 5px 10px 18px #888888;
width: 10rem;
padding: 1.875rem;
color: #29bd0b;
p {
    color: black;
    font-size: 20px;
    align-items: center;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
 }
 h5 {
   font-size: 21px;
   margin-bottom: 5px;
    color: #0FA66E;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
 }`

export const ProductCartListQuantityAndPrice = styled.section`
margin-top: 0.3125rem;`

export const ButtonAmount = styled.button`
background-color: #C0C0C0;
border-radius: 2px;
font-size: 20px;
color: #0FA66E;
width: 100%;
align-items: center;
text-align: center;
border: 1 solid;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

 :hover {
  background-color: #127a29 ;
  color: white;
 }

`

export const ButtonDeleteCart = styled.button`
background-color: #C0C0C0;
border-radius: 2px;
margin-bottom: 0.3125rem;;
font-size: 20px;
color: #0FA66E;
width: 100%;
align-items: center;
text-align: center;
border: 1 solid;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

 :hover {
  background-color: #E10000 ;
  color: white;
 }

`

export const ProductPriceCart = styled.section`
 color: black;
 font-size: 18px;
 align-items: center;
 margin-left: 1.2rem;
 margin-top: 0.1875rem ;
 margin-bottom: 0.1875rem;
 display: flex;
 flex-direction: row;
 font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
 `