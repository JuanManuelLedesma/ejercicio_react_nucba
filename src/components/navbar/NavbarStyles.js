import styled from "styled-components";

export const NavbarContainerStyled = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    margin: 0 auto;
    padding: 20px;
    width: 90%;
    height: 50px;
`;

export const LogoStyled = styled.div`
    display: flex;
    align-items: center;

    cursor: pointer;
    & img{
        margin-top: 13px;
        width: 50px;
    }
`;

export const TitleStyled = styled.h2`
    font-weight: 700;
    font-size: 24px;
    line-height: 40px;
    margin-left: 20px;

    color: white;
`;

export const LinkContainerStyled = styled.div`
    display: flex;
    color: white;
    gap: 45px;
`

