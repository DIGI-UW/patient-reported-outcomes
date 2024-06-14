import logo from './logo.svg';
import { Model } from 'survey-core';
import React, { useState } from "react";
import { Card, CardBody, Collapse, Container, Nav, Navbar, NavbarBrand, NavbarToggler } from "reactstrap";
import { useSearchParams } from 'react-router-dom';
import SurveyComponent from "./components/survey";
import defaultSurveyConfig from "./config/survey";
import "./styles.css"

const survey = new Model(defaultSurveyConfig.DEFAULT_SURVEY_JSON);

export interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = props => {
    const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
    const [searchParams] = useSearchParams();
    const guid = searchParams.get('pid');
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
                            theme={defaultSurveyConfig.DEFAULT_SURVEY_THEME}
                            model={survey} 
                            data={defaultSurveyConfig.DEFAULT_SURVEY_DATA}
                            onComplete={(survey: any) => {
                                survey.onComplete.add(function (sender: { data: any; }, options: { showSaveInProgress: () => void; showSaveSuccess: () => void; showSaveError: () => void; }) {
                                    survey.setValue("guid", guid);
                                    options.showSaveInProgress();
                                    const xhr = new XMLHttpRequest();
                                    const url = "http://sgs.uwdigi.org/openmrs/ws/rest/v1/outcomes/questionnaire";
                                    xhr.open("POST", url);
                                    xhr.withCredentials = true;
                                    xhr.setRequestHeader("Authorization", "Basic " + btoa("admin:Admin123"));
                                    xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
                                    xhr.setRequestHeader("Accept", "application/json");
                                    xhr.onload = xhr.onerror = function () {
                                        if (xhr.status === 201) {
                                            options.showSaveSuccess();
                                        } else {
                                            options.showSaveError();
                                        }
                                    };
                                    console.log(sender.data);
                                    xhr.send(JSON.stringify(sender.data));
                                });
                            }}
                        />
                    </CardBody>
                </Card>
            </Container>
        </>
    );
}

export default Application;

