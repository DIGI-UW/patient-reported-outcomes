import React from "react";
import { Survey } from "survey-react-ui";

export interface ISurveyProps {
    css: any;
    json: any; 
    theme: any;
    data: any; 
    onComplete: (survey: any) => void;
}

const SurveyComponent: React.FunctionComponent<ISurveyProps> = props => {
    const {css, json, theme, data,  onComplete} = props;
    return (
        <Survey
            css={css}
            json={json}
            theme={theme}
            data={data}
            onComplete={onComplete}
        />
    );
}

export default SurveyComponent;