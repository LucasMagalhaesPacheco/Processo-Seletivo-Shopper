import styled from "styled-components";



export const  MainCartSection = styled.main`
display: flex;
flex-direction: column;
align-items: center;`



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