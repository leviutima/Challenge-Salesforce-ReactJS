import React from "react";
import { HeaderElement, HeaderWrapperElement, LogoElement } from "./Header.style";
import Logo from "../../assets/logo-salesforce.svg";
import { MainMenu } from "../MainMenu/MainMenu";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";
import Product from "../../pages/Products/Products";
import ClickerColector from "../ClickRegister/NavigationTracker";



export function Header() {

    return (
        <>
            <HeaderElement>
                <ClickerColector>
                <HeaderWrapperElement>
                    <LogoElement to="/">
                        <img src={Logo} alt="Logo Salesforce, uma nuvem azul com Salesforce escrito em branco" />
                    </LogoElement>
                    <Button>Teste nosso sistema de CRM e vendas grátis</Button>
                    <MainMenu />
                </HeaderWrapperElement>
                </ClickerColector>
            </HeaderElement>
        </>
    )
}

export default Header
