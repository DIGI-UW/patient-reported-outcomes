import logo from './logo.svg';
import React, { useState } from "react";
import { Card, CardBody, Collapse, Container, Nav, Navbar, NavbarBrand, NavbarToggler } from "reactstrap";
import SurveyComponent from "./components/survey";
import defaultSurveyConfig from "./config/survey";
import "./styles.css"

export interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = props => {
    const [navbarOpen, setNavbarOpen] = useState<boolean>(false);

    return (
        <>
            <Navbar className="bg-green" dark expand="md">
                <Container>
                    <NavbarBrand href="/">
                        <img
                            alt="logo"
                            src={logo}
                            className="logo"
                        />
                    </NavbarBrand>
                    <NavbarToggler onClick={() => setNavbarOpen(!navbarOpen)}/>
                    <Collapse isOpen={navbarOpen} navbar>
                        <Nav className="me-auto" navbar></Nav>
                    </Collapse>
                </Container>
            </Navbar>
            <Container>
                <Card className="mt-2">
                    <CardBody>
                        <SurveyComponent 
                            css={defaultSurveyConfig.DEFAULT_SURVEY_CSS} 
                            json={defaultSurveyConfig.DEFAULT_SURVEY_JSON} 
                            theme={defaultSurveyConfig.DEFAULT_SURVEY_THEME} 
                            data={defaultSurveyConfig.DEFAULT_SURVEY_DATA}
                            onComplete={(survey: any) => {
                                console.log(survey.data)
                            }}
                        />
                    </CardBody>
                </Card>
            </Container>
        </>
    );
}

export default Application;

