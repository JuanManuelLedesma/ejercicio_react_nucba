import styled, { css } from "styled-components"

export const ToDoListContainerStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    height: 30px;
`

export const ToDoListInputStyled = styled.input`
    padding: 17px;
    margin-right: 10px;
    width: 600px;
    font-size: 15px;
    text-align: center;
    color: black;
    background-color: white;
    border-radius: 10px;
    
`
export const ToDoListButtonStyled = styled.button`
    padding: 10px 10px;
    margin-right: 10px;
    background: linear-gradient(344deg, rgba(114,207,187,1) 19%, rgba(148,178,245,1) 82%);
    border: 3px solid white;
    border-radius: 10px;

`
export const ToDoListUlStyled = styled.ul`
    font-size: 30px;
    margin-top: 20px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`