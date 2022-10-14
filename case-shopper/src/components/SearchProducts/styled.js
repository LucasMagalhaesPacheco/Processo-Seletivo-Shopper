import styled from "styled-components"
export const FormSearch = styled.form`
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    width: 35rem;
    :active {
        border: #0FA66E;
    }`

export const InputForm = styled.input`
    width: 100%;
    height: 2.5rem;
    border-radius: 10px;
    padding: 4px 8px;
    border-width: 3px;
    border-color: #0FA66E;
    margin: 0px 0px 15px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    :hover {
        border: #0FA66E;
    }
    `