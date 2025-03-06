import logo from './logo.svg';
import axios from 'axios';
import { Model } from 'survey-core';
import React, { useState } from "react";
import { Card, CardBody, Collapse, Container, Nav, Navbar, NavbarBrand, NavbarToggler } from "reactstrap";
import { useSearchParams } from 'react-router-dom';
import SurveyComponent from "./components/survey";
import defaultSurveyConfig from "./config/survey";
import "./styles.css"

export interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = props => {

    const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
    const [searchParams] = useSearchParams();
    const guid = searchParams.get('pid');
    const locale = searchParams.get('locale');
    const type = searchParams.get('type');
    const survey = new Model(
        locale === 'vi' && type === 'foot' ? defaultSurveyConfig.DEFAULT_FOOT_EN_SURVEY_JSON :
        locale === 'es' && type === 'foot' ? defaultSurveyConfig.SPANISH_FOOT_SURVEY_JSON :
        locale === 'en' && type === 'foot' ? defaultSurveyConfig.DEFAULT_FOOT_EN_SURVEY_JSON :
        locale === 'vi' ? defaultSurveyConfig.VIETNAMESE_SURVEY_JSON :
        locale === 'es' ? defaultSurveyConfig.SPANISH_SURVEY_JSON :
        defaultSurveyConfig.DEFAULT_SURVEY_JSON
      );
    const apiUrl = window.env.REACT_APP_API_URL || 'https://sgs.uwdigi.org/proxy'; 

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
                                    const postAxiosQuestionnaire = async() => {
                                        await axios.post(apiUrl, sender.data)
                                        .then((res) => options.showSaveSuccess() + res.data)
                                        .catch((res) =>  options.showSaveError() + res.data)
                                    }
                                    postAxiosQuestionnaire();
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
