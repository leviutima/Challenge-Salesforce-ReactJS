import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Header from "../../components/Header/Header";
import { Card } from "../../components/Card/Card";
import { MainPageTitle, FlexSection, Section } from "../../components/Sections/Sections.style"
import { Layout } from "../../components/Layout/Layout";
import ClickerColector from "../../components/ClickRegister/NavigationTracker";



function Home() {

  const title = "Relacionamento\ncom o cliente?\nÉ Salesforce."
  return (
    <>
      <Layout>
        <ClickerColector>
          <MainPageTitle>
            <h1>{title}</h1>
            <img src="src\assets\images\what-is-astro-product-family.png" alt="Imagem de demonstração produto d Sales Force" />
          </MainPageTitle>

          <FlexSection>
            <Card>
              <Link to="/salesforce">
                <h2>O que é a Salesforce?</h2>
              </Link>
              <Link to="/salesforce">
                <img src="src\assets\images\how-to-sell.jpg" alt="Imagem representando o que é a Sales Force" />
              </Link>
            </Card>

            <Card>
              <Link to="/crm">
                <h2>O que é CRM?</h2>
              </Link>
              <Link to="/crm">
                <img src="src\assets\images\php-rc-what-is-crm.jpg" alt="Imagem representando o que é Crm" />
              </Link>
            </Card>
          </FlexSection>
          <Section>
            <h3>Conheça nossos produtos</h3>
            <FlexSection>

              <Card>
                <Link to="/salescloud">
                  <h2>Sales Cloud</h2>
                </Link>
                <Link to="/salescloud">
                  <img src="src\assets\images\sales-image-mx.png" alt="Imagem do Sales Cloud" />
                </Link>
              </Card>

              <Card>
                <Link to="/einstein-gpt">
                  <h2>Einstein GPT</h2>
                </Link>
                <Link to="/einstein-gpt">
                  <img src="src\assets\images\einsteinpng.png" alt="Imagem do Einstein GPT" />
                </Link>
              </Card>
            </FlexSection>
          </Section>
        </ClickerColector>
      </Layout>

    </>
  )
}

export default Home
