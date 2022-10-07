import styled from "styled-components";

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

export const  MainCartSection = styled.main`
display: flex;
flex-direction: column;
align-items: center;`


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




export const FormPurchase = styled.form`
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    align-items: center;`

export const InputForm = styled.input`
    width: 100%;
    height: 30px;
    border-radius: 10px;
    padding: 0.25rem 0.5rem;
    border-width: 1px;
    border-color: gray;
    margin: 0px 0px 15px;
    width: 43.75rem;
    margin-left: 4.5rem;
    `

export const ButtonPurchase = styled.button`
display: flex;
justify-content: space-around;
width: 100%;
margin-left: 3rem;
margin-top: 0.625rem;
margin-bottom: 0.625rem;
border-radius: 20px;
 font-weight: bold;
 font-size: 15px;
 line-height: 18px;
 text-align: center;
 padding: 0.75rem;
 border: solid 1px transparent;
 align-items: center;
 :hover {
    font-size: 15px;
  line-height: 18px;
  text-align: center;
  padding: 0.75rem;
  border: solid 1px transparent;
  align-items: center;
  background-color:#0FA66E;
  border-radius:0.625rem;
  font-style: normal;
  color: white;
 }`  

export const SelectForm = styled.input`
    width: 100%;
    height: 1.875rem;
    border-radius: 10px;
    padding: 4px 8px;
    border-width: 1px;
    border-color: gray;
    margin: 0px 0px 15px;
    margin-left: 5rem;`

export const H1 = styled.h1`
text-align:center;
color:#0FA66E;
margin-bottom: 0.5rem;`

export const totalPriceH1 = styled.h1`
margin-top: 3rem;
margin-bottom: 5rem;
font-size: 25px;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
color: black;`