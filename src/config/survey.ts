
import { Model } from "survey-core";
import * as SurveyTheme from "survey-core/themes";
import "survey-core/defaultV2.min.css";
 
const DEFAULT_SURVEY_CSS  = {}
const DEFAULT_SURVEY_JSON = {
 "title": "Patient Reported Outcomes (PRO)",
 "description": "Health outcomes directly reported by the patient who experienced them.",
 "logoPosition": "right",
 "pages": [
  {
   "name": "Page 1",
   "elements": [
    {
     "type": "html",
     "name": "abilitytodoselectedactivities",
     "html": "<h6>Please rate your ability to do the following activities in the last week by selecting the number below the appropriate response.</h6>\n"
    },
    {
     "type": "dropdown",
     "name": "openTightJar",
     "title": "Open a tight or new jar",
     "choices": [
      {
       "value": "08885dbb-8f8b-47de-b9d9-814a686bf0ae",
       "text": "1. No difficulty"
      },
      {
       "value": "daefb4bb-647f-4768-8d0d-76b515f727b7",
       "text": "2. Mild difficulty"
      },
      {
       "value": "d3893aa5-cd39-4af8-97ac-b2ee74f4daf8",
       "text": "3. Moderate difficulty"
      },
      {
       "value": "16108c8c-5572-416f-809d-0f8f412b2125",
       "text": "4. Severe difficulty"
      },
      {
       "value": "5a893ee6-500c-4128-bab7-17737849729b",
       "text": "5. Unable"
      }
     ],
     "choicesOrder": "asc"
    },
    {
     "type": "dropdown",
     "name": "heavyHouseholdChores",
     "title": "Do heavy household chores (e.g., wash walls, floors)",
     "choices": [
      {
       "value": "08885dbb-8f8b-47de-b9d9-814a686bf0ae",
       "text": "1. No difficulty"
      },
      {
       "value": "daefb4bb-647f-4768-8d0d-76b515f727b7",
       "text": "2. Mild difficulty"
      },
      {
       "value": "d3893aa5-cd39-4af8-97ac-b2ee74f4daf8",
       "text": "3. Moderate difficulty"
      },
      {
       "value": "16108c8c-5572-416f-809d-0f8f412b2125",
       "text": "4. Severe difficulty"
      },
      {
       "value": "5a893ee6-500c-4128-bab7-17737849729b",
       "text": "5. Unable"
      }
     ],
     "choicesOrder": "asc"
    },
    {
     "type": "dropdown",
     "name": "carryShoppingBag",
     "title": "Carry a shopping bag or briefcase",
     "choices": [
      {
       "value": "08885dbb-8f8b-47de-b9d9-814a686bf0ae",
       "text": "1. No difficulty"
      },
      {
       "value": "daefb4bb-647f-4768-8d0d-76b515f727b7",
       "text": "2. Mild difficulty"
      },
      {
       "value": "d3893aa5-cd39-4af8-97ac-b2ee74f4daf8",
       "text": "3. Moderate difficulty"
      },
      {
       "value": "16108c8c-5572-416f-809d-0f8f412b2125",
       "text": "4. Severe difficulty"
      },
      {
       "value": "5a893ee6-500c-4128-bab7-17737849729b",
       "text": "5. Unable"
      }
     ],
     "choicesOrder": "asc"
    },
    {
     "type": "dropdown",
     "name": "washYourBack",
     "title": "Wash your back",
     "choices": [
      {
       "value": "08885dbb-8f8b-47de-b9d9-814a686bf0ae",
       "text": "1. No difficulty"
      },
      {
       "value": "daefb4bb-647f-4768-8d0d-76b515f727b7",
       "text": "2. Mild difficulty"
      },
      {
       "value": "d3893aa5-cd39-4af8-97ac-b2ee74f4daf8",
       "text": "3. Moderate difficulty"
      },
      {
       "value": "16108c8c-5572-416f-809d-0f8f412b2125",
       "text": "4. Severe difficulty"
      },
      {
       "value": "5a893ee6-500c-4128-bab7-17737849729b",
       "text": "5. Unable"
      }
     ],
     "choicesOrder": "asc"
    },
    {
     "type": "dropdown",
     "name": "useKnifeToCutFood",
     "title": "Use a knife to cut food",
     "choices": [
      {
       "value": "08885dbb-8f8b-47de-b9d9-814a686bf0ae",
       "text": "1. No difficulty"
      },
      {
       "value": "daefb4bb-647f-4768-8d0d-76b515f727b7",
       "text": "2. Mild difficulty"
      },
      {
       "value": "d3893aa5-cd39-4af8-97ac-b2ee74f4daf8",
       "text": "3. Moderate difficulty"
      },
      {
       "value": "16108c8c-5572-416f-809d-0f8f412b2125",
       "text": "4. Severe difficulty"
      },
      {
       "value": "5a893ee6-500c-4128-bab7-17737849729b",
       "text": "5. Unable"
      }
     ],
     "choicesOrder": "asc"
    },
    {
     "type": "dropdown",
     "name": "impactfulRecreationalActivities",
     "title": "Recreational activities in which you take some force or impact through your arm, shoulder or hand (e.g., golf, hammering, tennis, etc.)",
     "choices": [
      {
       "value": "08885dbb-8f8b-47de-b9d9-814a686bf0ae",
       "text": "1. No difficulty"
      },
      {
       "value": "daefb4bb-647f-4768-8d0d-76b515f727b7",
       "text": "2. Mild difficulty"
      },
      {
       "value": "d3893aa5-cd39-4af8-97ac-b2ee74f4daf8",
       "text": "3. Moderate difficulty"
      },
      {
       "value": "16108c8c-5572-416f-809d-0f8f412b2125",
       "text": "4. Severe difficulty"
      },
      {
       "value": "5a893ee6-500c-4128-bab7-17737849729b",
       "text": "5. Unable"
      }
     ],
     "choicesOrder": "asc"
    },
    {
     "type": "dropdown",
     "name": "interferenceWithSocialActivities",
     "title": "During the past week, to what extent has your arm, shoulder or hand problem interfered with your normal social activities with family, friends, neighbors or groups?",
     "choices": [
      {
       "value": "f1e56bd1-83f8-419e-9d8c-9aaadf6f9790",
       "text": "1. Not at all"
      },
      {
       "value": "88a1e0e3-972e-4293-98c7-cd7ae5937cb1",
       "text": "2. Slightly"
      },
      {
       "value": "5303e964-6ada-4415-baf2-945d34f5fccf",
       "text": "3. Moderately"
      },
      {
       "value": "56a3ab79-30d2-4855-ba4a-3758b8ae309d",
       "text": "4. Quite a bit"
      },
      {
       "value": "606947a4-ad44-44b9-bb0f-34b6530c2c43",
       "text": "5. Extremely"
      }
     ],
     "choicesOrder": "asc"
    },
    {
     "type": "dropdown",
     "name": "limitationsInWorkActivities",
     "title": "During the past week, were you limited in your work or other regular daily activities as a result of your arm, shoulder or hand problem?",
     "choices": [
      {
       "value": "45a81810-25b4-441d-a846-0b0c0acdb377",
       "text": "1. Not limited at all"
      },
      {
       "value": "a9af73a8-564f-45c1-a85d-e81c2a616ccd",
       "text": "2. Slightly limited"
      },
      {
       "value": "5303e964-6ada-4415-baf2-945d34f5fccf",
       "text": "3. Moderately limited"
      },
      {
       "value": "adf9af6e-a1c3-462d-bd58-702a2b7bdc9b",
       "text": "4. Very limited"
      },
      {
       "value": "5a893ee6-500c-4128-bab7-17737849729b",
       "text": "5. Unable"
      }
     ],
     "choicesOrder": "asc"
    },
    {
     "type": "html",
     "name": "severityofsymptoms",
     "html": "<h6>Please rate the severity of the following symptoms in the last week</h6>"
    },
    {
     "type": "dropdown",
     "name": "armShoulderHandPain",
     "title": "Arm, shoulder or hand pain",
     "choices": [
      {
       "value": "75f3c572-74dc-4c71-aa9a-3278dbcd2fb6",
       "text": "1. None"
      },
      {
       "value": "8db1770d-fa3d-419f-a794-f6c3e3d04d6f",
       "text": "2. Mild"
      },
      {
       "value": "54798d14-ae3b-4666-8667-a9be973f9996",
       "text": "3. Moderate"
      },
      {
       "value": "258d897f-da46-4d35-ae1f-f6517117bd01",
       "text": "4. Severe"
      },
      {
       "value": "90192048-9a12-45fa-94c8-faea53e7378a",
       "text": "5. Extreme"
      }
     ]
    },
    {
     "type": "dropdown",
     "name": "tinglingPinsAndNeedles",
     "title": "Tingling (pins and needles) in your arm, shoulder or hand",
     "choices": [
      {
       "value": "75f3c572-74dc-4c71-aa9a-3278dbcd2fb6",
       "text": "1. None"
      },
      {
       "value": "8db1770d-fa3d-419f-a794-f6c3e3d04d6f",
       "text": "2. Mild"
      },
      {
       "value": "54798d14-ae3b-4666-8667-a9be973f9996",
       "text": "3. Moderate"
      },
      {
       "value": "258d897f-da46-4d35-ae1f-f6517117bd01",
       "text": "4. Severe"
      },
      {
       "value": "90192048-9a12-45fa-94c8-faea53e7378a",
       "text": "5. Extreme"
      }
     ]
    },
    {
     "type": "dropdown",
     "name": "difficultySleeping",
     "title": "During the past week, how much difficulty have you had sleeping because of the pain in your arm, shoulder or hand?",
     "choices": [
      {
       "value": "08885dbb-8f8b-47de-b9d9-814a686bf0ae",
       "text": "1. No difficulty"
      },
      {
       "value": "daefb4bb-647f-4768-8d0d-76b515f727b7",
       "text": "2. Mild difficulty"
      },
      {
       "value": "d3893aa5-cd39-4af8-97ac-b2ee74f4daf8",
       "text": "3. Moderate difficulty"
      },
      {
       "value": "16108c8c-5572-416f-809d-0f8f412b2125",
       "text": "4. Severe dificulty"
      },
      {
       "value": "50e850eb-1c85-4779-9598-aec6a91e4895",
       "text": "5. So much difficult that I can't sleep"
      }
     ]
    }
   ],
   "navigationButtonsVisibility": "show"
  }
 ],
 "showProgressBar": "belowheader",
 "progressBarType": "questions",
 "progressBarShowPageNumbers": true,
 "goNextPageAutomatic": true,
 "allowCompleteSurveyAutomatic": false,
 "startSurveyText": "Next",
 "pagePrevText": "Back",
 "completeText": "Save",
 "showPreviewBeforeComplete": "showAnsweredQuestions",
 "widthMode": "responsive"
}

const  DEFAULT_SURVEY_THEME = new Model(DEFAULT_SURVEY_JSON).applyTheme(SurveyTheme.FlatLightPanelless);

const DEFAULT_SURVEY_DATA = {}

const defaultSurveyConfig = {
    DEFAULT_SURVEY_CSS,
    DEFAULT_SURVEY_JSON,
    DEFAULT_SURVEY_THEME,
    DEFAULT_SURVEY_DATA
}

export default defaultSurveyConfig;