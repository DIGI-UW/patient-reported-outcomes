import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";

export interface ISurveyProps {
    css: any;
    theme: any;
    model: Model;
    data: any; 
    onComplete: (survey: any) => void;
}

const SurveyComponent: React.FunctionComponent<ISurveyProps> = props => {
    const {css, theme, model, data,  onComplete} = props;
    return (
        <Survey
            css={css}
            theme={theme}
            model={model}
            data={data}
            onComplete={onComplete}
        />
    );
}

export default SurveyComponent;