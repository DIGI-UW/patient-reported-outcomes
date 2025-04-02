
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
     "type": "number",
     "visible": false,
     "name": "guid",
     "title": "GUID"
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
    },
    {
     "type": "file",
     "name": "photo",
     "title": "Please upload a photo",
     "allowMultiple": true,
     "waitForUpload": true,
     "needConfirmRemoveFile": true,
     "sourceType": "file-camera"
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

const DEFAULT_FOOT_EN_SURVEY_JSON = 
{
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
      "type": "number",
      "visible": false,
      "name": "guid",
      "title": "GUID"
     },
     {
      "type": "dropdown",
      "name": "vasPainScale",
      "title": "On a scale of 0 to 10, with 0 being no pain and 10 being the worst pain possible, how would you rate your pain?",
      "choices": [

        {
          "value": "4c9d68e1-5189-438c-a826-894c9533bb2f",
          "text": "0"
        },
        {
          "value": "bcb6ca2d-8b01-4d40-bbab-195d2da0f908",
          "text": "1"
        },
        {
          "value": "8f63b407-8fdd-4efd-94c7-e6c3f93f0403",
          "text": "2"
        },
        {
          "value": "8c6b2506-505f-4473-ac36-6a6e5995d45d",
          "text": "3"
        },
        {
          "value": "ef1f09c9-b124-4616-80cf-dadf99251de4",
          "text": "4"
        },
        {
          "value": "da9643b8-5fad-0f6e-5372-e6803c1555cf",
          "text": "5"
        },
        {
          "value": "ac526c4d-7ebc-62e4-54f3-4fda2b5a2ef7",
          "text": "6"
        },
        {
          "value": "93e44683-9e65-6391-8a9a-2028c38689e2",
          "text": "7"
        },
        {
          "value": "dcaf11f7-6dee-1e93-85e2-1817c4b0114a",
          "text": "8"
        },
        {
          "value": "ea136e11-a77d-9ffa-17d7-f4bfa60a2c1c",
          "text": "9"
        },
        {
          "value": "a83b430b-8339-3ad1-5760-5eca8033603f",
          "text": "10"
        }
      ]
     },
     {
      "type": "html",
      "name": "abilitytodoselectedactivities",
      "html": "<h6>Instructions: The following questions ask you what you think about your health. Your answers will tell you how you feel and how well you are able to do your usual activities. Please answer each question by checking a box. If you are not sure how to answer a question, please answer what seems most true to you.</h6>\n"
     },
     {
      "type": "dropdown",
      "name": "generalHealth",
      "title": "In general, would you say your health is",
      "choices": [

        {
          "value": "0838c3de-0815-5339-2465-84b667508e21",
          "text": "Excellent"
        },
        {
          "value": "b87a9c81-8900-9ef6-104a-d980347303c5",
          "text": "Very Good"
        },
        {
          "value": "57cc5b02-93ee-4101-bf64-af2a3527fe24",
          "text": "Good"
        },

        {
          "value": "9e159aaa-621c-38c7-3ec5-e4295b547166",
          "text": "Fair"
        },
        {
          "value": "8ab9dba0-5a77-a63f-72dd-e4e9bb848b16",
          "text": "Poor"
        }

      ]
     },
     {
      "type": "html",
      "name": "dailyActivities",
      "html": "<h6>The following questions ask about activities or things that you could do on a normal day. Does your current health limit you from doing those activities or things? If so, how much?</h6>"
     },
     {
      "type": "dropdown",
      "name": "moderateEfforts",
      "title": "Moderate efforts, such as moving a table, vacuuming, bowling, or walking for more than 1 hour",
      "choices": [
        {
          "value": "9157ecdf-a297-a09f-0dce-6d2dc3c7089e",
          "text": "Yes, Limited A Lot"
        },
        {
          "value": "d2170132-9eed-783b-0a9d-3958ab3c3023",
          "text": "Yes, Limited A Little"
        },
        {
          "value": "21b437de-8d0e-225d-8162-74deb65e909a",
          "text": "No, Not Limited At All"
        }
      ]
     },
     {
      "type": "dropdown",
      "name": "climbFloors",
      "title": "Climb several floors by stairs",
      "choices": [
        {
          "value": "9157ecdf-a297-a09f-0dce-6d2dc3c7089e",
          "text": "Yes, Limited A Lot"
        },
        {
          "value": "d2170132-9eed-783b-0a9d-3958ab3c3023",
          "text": "Yes, Limited A Little"
        },
        {
          "value": "21b437de-8d0e-225d-8162-74deb65e909a",
          "text": "No, Not Limited At All"
        }
      ]
     },

     {
      "type": "html",
      "name": "severityofsymptoms",
      "html": "<h6>During the past 4 weeks have you had any of the following problems with your work or other regular activities as a result of your physical health?</h6>"
     },
     {
      "type": "dropdown",
      "name": "accomplishedLess",
      "title": "Did you do less than you would have liked to do?",
      "choices": [
        {
          "value": "a2065636-5326-40f5-aed6-0cc2cca81ccc",
          "text": "Yes"
        },
        {
          "value": "b497171e-0410-4d8d-bbd4-7e1a8f8b504e",
          "text": "No"
        }
      ]
     },
     {
      "type": "dropdown",
      "name": "stoppedDoingWorkDaily",
      "title": "Have you had to stop doing some tasks at work or in your daily activities?",
      "choices": [
        {
          "value": "a2065636-5326-40f5-aed6-0cc2cca81ccc",
          "text": "Yes"
        },
        {
          "value": "b497171e-0410-4d8d-bbd4-7e1a8f8b504e",
          "text": "No"
        }
      ]
     },
     {
      "type": "html",
      "name": "severityofsymptoms",
      "html": "<h6>During the past 4 weeks, have you had any of the following problems at work or in your daily activities because of an emotional problem (such as being sad, depressed, or nervous)?</h6>"
     },
     {
      "type": "dropdown",
      "name": "lessAccomplishedThanYouWouldLikeEmotion",
      "title": "Did you do less than you would have liked to do, due to some emotional problem?",
      "choices": [
        {
          "value": "a2065636-5326-40f5-aed6-0cc2cca81ccc",
          "text": "Yes"
        },
        {
          "value": "b497171e-0410-4d8d-bbd4-7e1a8f8b504e",
          "text": "No"
        }
      ]
     },     
     {
      "type": "dropdown",
      "name": "unableToDoWorkOrOtherActivitiesCarefullyAsUsual",
      "title": "Did you not perform your work or daily activities as carefully as usual because of an emotional problem?",
      "choices": [
        {
          "value": "a2065636-5326-40f5-aed6-0cc2cca81ccc",
          "text": "Yes"
        },
        {
          "value": "b497171e-0410-4d8d-bbd4-7e1a8f8b504e",
          "text": "No"
        }
      ]
     },
     {
      "type": "dropdown",
      "name": "amountOfPainUnableToDoWork",
      "title": "During the past 4 weeks, how much has pain made it difficult for you to do your regular work (including work outside the home and housework)?",
      "choices": [
        {
          "value": "f1e56bd1-83f8-419e-9d8c-9aaadf6f9790",
          "text": "Not at all"
        },
        {
          "value": "99eb9924-5384-4d5b-991a-4ca5d6ba6a48",
          "text": "A Little"
        },
        {
          "value": "20d03ba9-454a-45c2-8244-88ae1e7de2d6",
          "text": "Moderately"
        },
        {
          "value": "56a3ab79-30d2-4855-ba4a-3758b8ae309d",
          "text": "Quite a bit"
        },
        {
          "value": "606947a4-ad44-44b9-bb0f-34b6530c2c43",
          "text": "Extremely"
        }
      ]
     },
     {
      "type": "html",
      "name": "severityofsymptoms",
      "html": "<h6>The questions that follow ask how you have been feeling and how things have been going for you during the past 4 weeks. For each question, answer the question that most closely resembles how you have been feeling. During the past 4 weeks, how much time have you spent</h6>"
     },
     {
      "type": "dropdown",
      "name": "haveYouFeltCalmAndPeaceful",
      "title": "Did you feel calm and peaceful?",
      "choices": [
        {
          "value": "865c08d4-7b11-88ff-951d-5432dcde864d",
          "text": "All of the Time"
        },
        {
          "value": "9b69dde0-a76a-8eb6-5cc7-e3eb288b0224",
          "text": "Most of the Time"
        },
        {
          "value": "6c5524a5-8d3d-81e8-9e9d-c3ab1fa25ef8",
          "text": "A Good Bit of the Time"
        },
        {
          "value": "a4ab954a-812b-1889-3ec3-e056f0ae0f6c",
          "text": "Some of the Time"
        },
        {
          "value": "c58bbc23-7e5e-638c-1d5b-b4108e7260b0",
          "text": "A Little of the Time"
        },
        {
          "value": "9922b400-3a88-5bb0-0d59-c121ad5751e6",
          "text": "None of the Time"
        }
      ]
     },
     {
      "type": "dropdown",
      "name": "hadALotOfEnergy",
      "title": "Had a lot of engery ",
      "choices": [
        {
          "value": "865c08d4-7b11-88ff-951d-5432dcde864d",
          "text": "All of the Time"
        },
        {
          "value": "9b69dde0-a76a-8eb6-5cc7-e3eb288b0224",
          "text": "Most of the Time"
        },
        {
          "value": "6c5524a5-8d3d-81e8-9e9d-c3ab1fa25ef8",
          "text": "A Good Bit of the Time"
        },
        {
          "value": "a4ab954a-812b-1889-3ec3-e056f0ae0f6c",
          "text": "Some of the Time"
        },
        {
          "value": "c58bbc23-7e5e-638c-1d5b-b4108e7260b0",
          "text": "A Little of the Time"
        },
        {
          "value": "9922b400-3a88-5bb0-0d59-c121ad5751e6",
          "text": "None of the Time"
        }
      ]
     },
     {
      "type": "dropdown",
      "name": "feltDiscouragedAndSad",
      "title": "Did you feel discouraged and sad?",
      "choices": [
        {
          "value": "865c08d4-7b11-88ff-951d-5432dcde864d",
          "text": "All of the Time"
        },
        {
          "value": "9b69dde0-a76a-8eb6-5cc7-e3eb288b0224",
          "text": "Most of the Time"
        },
        {
          "value": "6c5524a5-8d3d-81e8-9e9d-c3ab1fa25ef8",
          "text": "A Good Bit of the Time"
        },
        {
          "value": "a4ab954a-812b-1889-3ec3-e056f0ae0f6c",
          "text": "Some of the Time"
        },
        {
          "value": "c58bbc23-7e5e-638c-1d5b-b4108e7260b0",
          "text": "A Little of the Time"
        },
        {
          "value": "9922b400-3a88-5bb0-0d59-c121ad5751e6",
          "text": "None of the Time"
        }
      ]
     },
     {
      "type": "dropdown",
      "name": "interferenceWithSocialActivities",
      "title": "During the past week, to what extent has your arm, shoulder or hand problem interfered with your normal social activities with family, friends, neighbors or groups?",
      "choices": [
        {
          "value": "606947a4-ad44-44b9-bb0f-34b6530c2c43",
          "text": "Always"
         },
         {
          "value": "56a3ab79-30d2-4855-ba4a-3758b8ae309d",
          "text": "Almost Always"
         },
         {
          "value": "5303e964-6ada-4415-baf2-945d34f5fccf",
          "text": "Sometimes"
         },
         {
          "value": "88a1e0e3-972e-4293-98c7-cd7ae5937cb1",
          "text": "Only Sometimes"
         },
       {
        "value": "f1e56bd1-83f8-419e-9d8c-9aaadf6f9790",
        "text": "Never"
       }
      ]
     },
    
     {
      "type": "file",
      "name": "photo",
      "title": "Please upload a photo",
      "allowMultiple": true,
      "waitForUpload": true,
      "needConfirmRemoveFile": true,
      "sourceType": "file-camera"
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

 const SPANISH_FOOT_SURVEY_JSON = 
{
  "title": "Resultados Reportados por el Paciente (PRO)",
  "description": "Resultados de salud reportados directamente por el paciente que los experimentó.",
  "logoPosition": "derecha",
  "pages": [
   {
    "name": "Página 1",
    "elements": [
     {
      "type": "html",
      "name": "abilitytodoselectedactivities",
      "html": "<h6>Por favor califique su capacidad para realizar las siguientes actividades en la última semana seleccionando el número debajo de la respuesta apropiada.</h6>\n"
     },
     {
      "type": "number",
      "visible": false,
      "name": "guid",
      "title": "GUID"
     },
     {
      "type": "dropdown",
      "name": "vasPainScale",
      "title": "En una escala de 0 a 10, 0 es sin dolor y 10 siendo el peor dolor posible, ¿cómo calificaría su dolor?",
      "choices": [

        {
          "value": "4c9d68e1-5189-438c-a826-894c9533bb2f",
          "text": "0"
        },
        {
          "value": "bcb6ca2d-8b01-4d40-bbab-195d2da0f908",
          "text": "1"
        },
        {
          "value": "8f63b407-8fdd-4efd-94c7-e6c3f93f0403",
          "text": "2"
        },
        {
          "value": "8c6b2506-505f-4473-ac36-6a6e5995d45d",
          "text": "3"
        },
        {
          "value": "ef1f09c9-b124-4616-80cf-dadf99251de4",
          "text": "4"
        },
        {
          "value": "da9643b8-5fad-0f6e-5372-e6803c1555cf",
          "text": "5"
        },
        {
          "value": "ac526c4d-7ebc-62e4-54f3-4fda2b5a2ef7",
          "text": "6"
        },
        {
          "value": "93e44683-9e65-6391-8a9a-2028c38689e2",
          "text": "7"
        },
        {
          "value": "dcaf11f7-6dee-1e93-85e2-1817c4b0114a",
          "text": "8"
        },
        {
          "value": "ea136e11-a77d-9ffa-17d7-f4bfa60a2c1c",
          "text": "9"
        },
        {
          "value": "a83b430b-8339-3ad1-5760-5eca8033603f",
          "text": "10"
        }
      ]
     },
     {
      "type": "html",
      "name": "abilitytodoselectedactivities",
      "html": "<h6>INSTRUCCIONES: Las preguntas que siguen se refieren a lo que usted piensa sobre su salud. Sus respuestas permitirán saber cómo se encuentra usted y hasta qué punto es capaz de hacer sus actividades habituales. Por favor, conteste cada pregunta marcando una casilla. Si no está seguro/a de cómo responder a una pregunta, por favor conteste lo que le parezca más cierto. </h6>\n"
     },
     {
      "type": "dropdown",
      "name": "generalHealth",
      "title": "En general, usted diría que su salud es:",
      "choices": [

        {
          "value": "0838c3de-0815-5339-2465-84b667508e21",
          "text": "Excelente"
        },
        {
          "value": "b87a9c81-8900-9ef6-104a-d980347303c5",
          "text": "Muy buena"
        },
        {
          "value": "57cc5b02-93ee-4101-bf64-af2a3527fe24",
          "text": "Buena"
        },

        {
          "value": "9e159aaa-621c-38c7-3ec5-e4295b547166",
          "text": "Regular"
        },
        {
          "value": "8ab9dba0-5a77-a63f-72dd-e4e9bb848b16",
          "text": "Mala"
        }

      ]
     },
     {
      "type": "html",
      "name": "dailyActivities",
      "html": "<h6>Las siguientes preguntas se refieren a actividades o cosas que usted podría hacer en un día normal. Su salud actual, ¿le limita para hacer esas actividades o cosas? Si es así, ¿cuánto?</h6>"
     },
     {
      "type": "dropdown",
      "name": "moderateEfforts",
      "title": "Esfuerzos moderados, como mover una mesa, para la aspiradora, jugar a los bolos o caminar más de 1 hora",
      "choices": [
        {
          "value": "9157ecdf-a297-a09f-0dce-6d2dc3c7089e",
          "text": "Sí, me limita mucho"
        },
        {
          "value": "d2170132-9eed-783b-0a9d-3958ab3c3023",
          "text": "Sí, me limita un poco"
        },
        {
          "value": "21b437de-8d0e-225d-8162-74deb65e909a",
          "text": "No, no me limita mucho"
        }
      ]
     },
     {
      "type": "dropdown",
      "name": "climbFloors",
      "title": "Subir varios pisos por la escalera ",
      "choices": [
        {
          "value": "9157ecdf-a297-a09f-0dce-6d2dc3c7089e",
          "text": "Sí, me limita mucho"
        },
        {
          "value": "d2170132-9eed-783b-0a9d-3958ab3c3023",
          "text": "Sí, me limita un poco"
        },
        {
          "value": "21b437de-8d0e-225d-8162-74deb65e909a",
          "text": "No, no me limita mucho"
        }
      ]
     },

     {
      "type": "html",
      "name": "severityofsymptoms",
      "html": "<h6>Durante las 4 últimas semanas, ¿ha tenido alguno de los siguientes problemas en su trabajo o en sus actividades cotidianas, a causa de su salud física?</h6>"
     },
     {
      "type": "dropdown",
      "name": "accomplishedLess",
      "title": "¿Hizo menos de lo que hubiera querido hacer?",
      "choices": [
        {
          "value": "a2065636-5326-40f5-aed6-0cc2cca81ccc",
          "text": "Sí"
        },
        {
          "value": "b497171e-0410-4d8d-bbd4-7e1a8f8b504e",
          "text": "No"
        }
      ]
     },
     {
      "type": "dropdown",
      "name": "stoppedDoingWorkDaily",
      "title": "¿Tuvo que dejar de hacer algunas tareas en su trabajo o en sus actividades cotidianas?",
      "choices": [
        {
          "value": "a2065636-5326-40f5-aed6-0cc2cca81ccc",
          "text": "Sí"
        },
        {
          "value": "b497171e-0410-4d8d-bbd4-7e1a8f8b504e",
          "text": "No"
        }
      ]
     },
     {
      "type": "html",
      "name": "severityofsymptoms",
      "html": "<h6>Durante las 4 últimas semanas, ¿ha tenido alguno de los siguientes problemas en su trabajo o en sus actividades cotidianas, a causa de algún problema emocional (como estar triste, deprimido, o nervioso)?</h6>"
     },
     {
      "type": "dropdown",
      "name": "lessAccomplishedThanYouWouldLikeEmotion",
      "title": "¿Hizo menos de lo que hubiera querido hacer, por algún problema emocional?",
      "choices": [
        {
          "value": "a2065636-5326-40f5-aed6-0cc2cca81ccc",
          "text": "Sí"
        },
        {
          "value": "b497171e-0410-4d8d-bbd4-7e1a8f8b504e",
          "text": "No"
        }
      ]
     },     
     {
      "type": "dropdown",
      "name": "unableToDoWorkOrOtherActivitiesCarefullyAsUsual",
      "title": "¿No hizo su trabajo o sus actividades cotidianas tan cuidadosamente como de costumbre, por algún problema emocional?",
      "choices": [
        {
          "value": "a2065636-5326-40f5-aed6-0cc2cca81ccc",
          "text": "Sí"
        },
        {
          "value": "b497171e-0410-4d8d-bbd4-7e1a8f8b504e",
          "text": "No"
        }
      ]
     },
     {
      "type": "dropdown",
      "name": "amountOfPainUnableToDoWork",
      "title": "Durante las 4 últimas semanas, ¿hasta qué punto el dolor la ha dificultado su trabajo habitual (incluido el trabajo fuera de casa y las tareas domésticas)?",
      "choices": [
        {
          "value": "f1e56bd1-83f8-419e-9d8c-9aaadf6f9790",
          "text": "Nada"
        },
        {
          "value": "99eb9924-5384-4d5b-991a-4ca5d6ba6a48",
          "text": "Un poco"
        },
        {
          "value": "20d03ba9-454a-45c2-8244-88ae1e7de2d6",
          "text": "Regular"
        },
        {
          "value": "56a3ab79-30d2-4855-ba4a-3758b8ae309d",
          "text": "Bastante"
        },
        {
          "value": "606947a4-ad44-44b9-bb0f-34b6530c2c43",
          "text": "Mucho"
        }
      ]
     },
     {
      "type": "html",
      "name": "severityofsymptoms",
      "html": "<h6>Las preguntas que siguen se refieren a cómo se ha sentido y cómo le han ido las cosas durante las 4 últimas semanas. En cada pregunta responda lo que se parezca más a cómo se ha sentido usted. Durante las últimas 4 semanas, cuánto tiempo</h6>"
     },
     {
      "type": "dropdown",
      "name": "haveYouFeltCalmAndPeaceful",
      "title": "¿Se sintió calmado y tranquilo?",
      "choices": [
        {
          "value": "865c08d4-7b11-88ff-951d-5432dcde864d",
          "text": "Siempre"
        },
        {
          "value": "9b69dde0-a76a-8eb6-5cc7-e3eb288b0224",
          "text": "Casi siempre"
        },
        {
          "value": "6c5524a5-8d3d-81e8-9e9d-c3ab1fa25ef8",
          "text": "Muchas veces"
        },
        {
          "value": "a4ab954a-812b-1889-3ec3-e056f0ae0f6c",
          "text": "Algunas veces"
        },
        {
          "value": "c58bbc23-7e5e-638c-1d5b-b4108e7260b0",
          "text": "Sólo alguna vez"
        },
        {
          "value": "9922b400-3a88-5bb0-0d59-c121ad5751e6",
          "text": "Nunca"
        }
      ]
     },
     {
      "type": "dropdown",
      "name": "hadALotOfEnergy",
      "title": "¿Tuvo mucha energía?",
      "choices": [
        {
          "value": "865c08d4-7b11-88ff-951d-5432dcde864d",
          "text": "Siempre"
        },
        {
          "value": "9b69dde0-a76a-8eb6-5cc7-e3eb288b0224",
          "text": "Casi siempre"
        },
        {
          "value": "6c5524a5-8d3d-81e8-9e9d-c3ab1fa25ef8",
          "text": "Muchas veces"
        },
        {
          "value": "a4ab954a-812b-1889-3ec3-e056f0ae0f6c",
          "text": "Algunas veces"
        },
        {
          "value": "c58bbc23-7e5e-638c-1d5b-b4108e7260b0",
          "text": "Sólo alguna vez"
        },
        {
          "value": "9922b400-3a88-5bb0-0d59-c121ad5751e6",
          "text": "Nunca"
        }
      ]
     },
     {
      "type": "dropdown",
      "name": "feltDiscouragedAndSad",
      "title": "¿Se sintió desanimado y triste? ",
      "choices": [
        {
          "value": "865c08d4-7b11-88ff-951d-5432dcde864d",
          "text": "Siempre"
        },
        {
          "value": "9b69dde0-a76a-8eb6-5cc7-e3eb288b0224",
          "text": "Casi siempre"
        },
        {
          "value": "6c5524a5-8d3d-81e8-9e9d-c3ab1fa25ef8",
          "text": "Muchas veces"
        },
        {
          "value": "a4ab954a-812b-1889-3ec3-e056f0ae0f6c",
          "text": "Algunas veces"
        },
        {
          "value": "c58bbc23-7e5e-638c-1d5b-b4108e7260b0",
          "text": "Sólo alguna vez"
        },
        {
          "value": "9922b400-3a88-5bb0-0d59-c121ad5751e6",
          "text": "Nunca"
        }
      ]
     },
     {
      "type": "dropdown",
      "name": "interferenceWithSocialActivities",
      "title": "Durante las 4 últimas semanas, ¿con qué frecuencia la salud física o los problemas emocionales le han dificultado sus actividades sociales (como visitar a los amigos o familiares)?",
      "choices": [
        {
          "value": "606947a4-ad44-44b9-bb0f-34b6530c2c43",
          "text": "Siempre"
         },
         {
          "value": "56a3ab79-30d2-4855-ba4a-3758b8ae309d",
          "text": "Casi siempre"
         },
         {
          "value": "5303e964-6ada-4415-baf2-945d34f5fccf",
          "text": "Algunas veces"
         },
         {
          "value": "88a1e0e3-972e-4293-98c7-cd7ae5937cb1",
          "text": "Sólo alguna vez"
         },
       {
        "value": "f1e56bd1-83f8-419e-9d8c-9aaadf6f9790",
        "text": "Nunca "
       }
      ]
     },
    
     {
      "type": "file",
      "name": "photo",
      "title": "Por favor sube una foto",
      "allowMultiple": true,
      "waitForUpload": true,
      "needConfirmRemoveFile": true,
      "sourceType": "file-camera"
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

const VIETNAMESE_SURVEY_JSON = {
    "title": "Kết quả do bệnh nhân báo cáo (PRO)",
    "description": "Kết quả sức khỏe được báo cáo trực tiếp bởi bệnh nhân đã trải qua.",
    "logoPosition": "right",
    "pages": [
      {
        "name": "Trang 1",
        "elements": [
          {
            "type": "html",
            "name": "abilitytodoselectedactivities",
            "html": "<h6>Xin hãy đánh giá khả năng của bạn trong việc thực hiện các hoạt động sau trong tuần qua bằng cách chọn số bên dưới phản hồi phù hợp.</h6>\n"
          },
          {
            "type": "number",
            "visible": false,
            "name": "guid",
            "title": "GUID"
          },
          {
            "type": "dropdown",
            "name": "openTightJar",
            "title": "Mở một lọ chặt hoặc mới",
            "choices": [
              {
                "value": "08885dbb-8f8b-47de-b9d9-814a686bf0ae",
                "text": "1. Không khó khăn"
              },
              {
                "value": "daefb4bb-647f-4768-8d0d-76b515f727b7",
                "text": "2. Khó khăn nhẹ"
              },
              {
                "value": "d3893aa5-cd39-4af8-97ac-b2ee74f4daf8",
                "text": "3. Khó khăn vừa phải"
              },
              {
                "value": "16108c8c-5572-416f-809d-0f8f412b2125",
                "text": "4. Khó khăn nghiêm trọng"
              },
              {
                "value": "5a893ee6-500c-4128-bab7-17737849729b",
                "text": "5. Không thể"
              }
            ],
            "choicesOrder": "asc"
          },
          {
            "type": "dropdown",
            "name": "heavyHouseholdChores",
            "title": "Làm các công việc nhà nặng (ví dụ: rửa tường, sàn)",
            "choices": [
              {
                "value": "08885dbb-8f8b-47de-b9d9-814a686bf0ae",
                "text": "1. Không khó khăn"
              },
              {
                "value": "daefb4bb-647f-4768-8d0d-76b515f727b7",
                "text": "2. Khó khăn nhẹ"
              },
              {
                "value": "d3893aa5-cd39-4af8-97ac-b2ee74f4daf8",
                "text": "3. Khó khăn vừa phải"
              },
              {
                "value": "16108c8c-5572-416f-809d-0f8f412b2125",
                "text": "4. Khó khăn nghiêm trọng"
              },
              {
                "value": "5a893ee6-500c-4128-bab7-17737849729b",
                "text": "5. Không thể"
              }
            ],
            "choicesOrder": "asc"
          },
          {
            "type": "dropdown",
            "name": "carryShoppingBag",
            "title": "Mang một túi mua sắm hoặc cặp",
            "choices": [
              {
                "value": "08885dbb-8f8b-47de-b9d9-814a686bf0ae",
                "text": "1. Không khó khăn"
              },
              {
                "value": "daefb4bb-647f-4768-8d0d-76b515f727b7",
                "text": "2. Khó khăn nhẹ"
              },
              {
                "value": "d3893aa5-cd39-4af8-97ac-b2ee74f4daf8",
                "text": "3. Khó khăn vừa phải"
              },
              {
                "value": "16108c8c-5572-416f-809d-0f8f412b2125",
                "text": "4. Khó khăn nghiêm trọng"
              },
              {
                "value": "5a893ee6-500c-4128-bab7-17737849729b",
                "text": "5. Không thể"
              }
            ],
            "choicesOrder": "asc"
          },
          {
            "type": "dropdown",
            "name": "washYourBack",
            "title": "Rửa lưng của bạn",
            "choices": [
              {
                "value": "08885dbb-8f8b-47de-b9d9-814a686bf0ae",
                "text": "1. Không khó khăn"
              },
              {
                "value": "daefb4bb-647f-4768-8d0d-76b515f727b7",
                "text": "2. Khó khăn nhẹ"
              },
              {
                "value": "d3893aa5-cd39-4af8-97ac-b2ee74f4daf8",
                "text": "3. Khó khăn vừa phải"
              },
              {
                "value": "16108c8c-5572-416f-809d-0f8f412b2125",
                "text": "4. Khó khăn nghiêm trọng"
              },
              {
                "value": "5a893ee6-500c-4128-bab7-17737849729b",
                "text": "5. Không thể"
              }
            ],
            "choicesOrder": "asc"
          },
          {
            "type": "dropdown",
            "name": "useKnifeToCutFood",
            "title": "Sử dụng dao để cắt thực phẩm",
            "choices": [
              {
                "value": "08885dbb-8f8b-47de-b9d9-814a686bf0ae",
                "text": "1. Không khó khăn"
              },
              {
                "value": "daefb4bb-647f-4768-8d0d-76b515f727b7",
                "text": "2. Khó khăn nhẹ"
              },
              {
                "value": "d3893aa5-cd39-4af8-97ac-b2ee74f4daf8",
                "text": "3. Khó khăn vừa phải"
              },
              {
                "value": "16108c8c-5572-416f-809d-0f8f412b2125",
                "text": "4. Khó khăn nghiêm trọng"
              },
              {
                "value": "5a893ee6-500c-4128-bab7-17737849729b",
                "text": "5. Không thể"
              }
            ],
            "choicesOrder": "asc"
          },
          {
            "type": "dropdown",
            "name": "impactfulRecreationalActivities",
            "title": "Các hoạt động giải trí mà bạn chịu một lực tác động qua tay, vai hoặc tay (ví dụ: chơi golf, đóng đinh, tennis, v.v.)",
            "choices": [
              {
                "value": "08885dbb-8f8b-47de-b9d9-814a686bf0ae",
                "text": "1. Không khó khăn"
              },
              {
                "value": "daefb4bb-647f-4768-8d0d-76b515f727b7",
                "text": "2. Khó khăn nhẹ"
              },
              {
                "value": "d3893aa5-cd39-4af8-97ac-b2ee74f4daf8",
                "text": "3. Khó khăn vừa phải"
              },
              {
                "value": "16108c8c-5572-416f-809d-0f8f412b2125",
                "text": "4. Khó khăn nghiêm trọng"
              },
              {
                "value": "5a893ee6-500c-4128-bab7-17737849729b",
                "text": "5. Không thể"
              }
            ],
            "choicesOrder": "asc"
          },
          {
            "type": "dropdown",
            "name": "interferenceWithSocialActivities",
            "title": "Trong tuần qua, vấn đề về tay, vai hoặc tay của bạn đã ảnh hưởng đến các hoạt động xã hội bình thường với gia đình, bạn bè, hàng xóm hoặc nhóm như thế nào?",
            "choices": [
              {
                "value": "f1e56bd1-83f8-419e-9d8c-9aaadf6f9790",
                "text": "1. Không chút nào"
              },
              {
                "value": "88a1e0e3-972e-4293-98c7-cd7ae5937cb1",
                "text": "2. Hơi"
              },
              {
                "value": "5303e964-6ada-4415-baf2-945d34f5fccf",
                "text": "3. Vừa phải"
              },
              {
                "value": "56a3ab79-30d2-4855-ba4a-3758b8ae309d",
                "text": "4. Khá nhiều"
              },
              {
                "value": "606947a4-ad44-44b9-bb0f-34b6530c2c43",
                "text": "5. Cực kỳ"
              }
            ],
            "choicesOrder": "asc"
          },
          {
            "type": "dropdown",
            "name": "limitationsInWorkActivities",
            "title": "Trong tuần qua, bạn có bị hạn chế trong công việc hoặc các hoạt động hàng ngày khác do vấn đề về tay, vai hoặc tay không?",
            "choices": [
              {
                "value": "45a81810-25b4-441d-a846-0b0c0acdb377",
                "text": "1. Không bị hạn chế chút nào"
              },
              {
                "value": "a9af73a8-564f-45c1-a85d-e81c2a616ccd",
                "text": "2. Hơi bị hạn chế"
              },
              {
                "value": "5303e964-6ada-4415-baf2-945d34f5fccf",
                "text": "3. Bị hạn chế vừa phải"
              },
              {
                "value": "adf9af6e-a1c3-462d-bd58-702a2b7bdc9b",
                "text": "4. Bị hạn chế nhiều"
              },
              {
                "value": "5a893ee6-500c-4128-bab7-17737849729b",
                "text": "5. Không thể"
              }
            ],
            "choicesOrder": "asc"
          },
          {
            "type": "html",
            "name": "severityofsymptoms",
            "html": "<h6>Xin hãy đánh giá mức độ nghiêm trọng của các triệu chứng sau trong tuần qua</h6>"
          },
          {
            "type": "dropdown",
            "name": "armShoulderHandPain",
            "title": "Đau tay, vai hoặc tay",
            "choices": [
              {
                "value": "75f3c572-74dc-4c71-aa9a-3278dbcd2fb6",
                "text": "1. Không có"
              },
              {
                "value": "8db1770d-fa3d-419f-a794-f6c3e3d04d6f",
                "text": "2. Nhẹ"
              },
              {
                "value": "54798d14-ae3b-4666-8667-a9be973f9996",
                "text": "3. Vừa phải"
              },
              {
                "value": "258d897f-da46-4d35-ae1f-f6517117bd01",
                "text": "4. Nghiêm trọng"
              },
              {
                "value": "90192048-9a12-45fa-94c8-faea53e7378a",
                "text": "5. Cực kỳ"
              }
            ]
          },
          {
            "type": "dropdown",
            "name": "tinglingPinsAndNeedles",
            "title": "Cảm giác tê (kim châm) ở tay, vai hoặc tay",
            "choices": [
              {
                "value": "75f3c572-74dc-4c71-aa9a-3278dbcd2fb6",
                "text": "1. Không có"
              },
              {
                "value": "8db1770d-fa3d-419f-a794-f6c3e3d04d6f",
                "text": "2. Nhẹ"
              },
              {
                "value": "54798d14-ae3b-4666-8667-a9be973f9996",
                "text": "3. Vừa phải"
              },
              {
                "value": "258d897f-da46-4d35-ae1f-f6517117bd01",
                "text": "4. Nghiêm trọng"
              },
              {
                "value": "90192048-9a12-45fa-94c8-faea53e7378a",
                "text": "5. Cực kỳ"
              }
            ]
          },
          {
            "type": "dropdown",
            "name": "difficultySleeping",
            "title": "Trong tuần qua, bạn đã gặp bao nhiêu khó khăn trong việc ngủ vì đau ở tay, vai hoặc tay?",
            "choices": [
              {
                "value": "08885dbb-8f8b-47de-b9d9-814a686bf0ae",
                "text": "1. Không khó khăn"
              },
              {
                "value": "daefb4bb-647f-4768-8d0d-76b515f727b7",
                "text": "2. Khó khăn nhẹ"
              },
              {
                "value": "d3893aa5-cd39-4af8-97ac-b2ee74f4daf8",
                "text": "3. Khó khăn vừa phải"
              },
              {
                "value": "16108c8c-5572-416f-809d-0f8f412b2125",
                "text": "4. Khó khăn nghiêm trọng"
              },
              {
                "value": "50e850eb-1c85-4779-9598-aec6a91e4895",
                "text": "5. Khó khăn đến mức tôi không thể ngủ"
              }
            ]
          },
          {
            "type": "file",
            "name": "photo",
            "title": "Xin vui lòng tải lên một bức ảnh",
            "allowMultiple": true,
            "waitForUpload": true,
            "needConfirmRemoveFile": true,
            "sourceType": "file-camera"
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
    "startSurveyText": "Tiếp theo",
    "pagePrevText": "Quay lại",
    "completeText": "Lưu",
    "showPreviewBeforeComplete": "showAnsweredQuestions",
    "widthMode": "responsive"
  }
  

const SPANISH_SURVEY_JSON = {
    "title": "Resultados Reportados por el Paciente (PRO)",
    "description": "Resultados de salud reportados directamente por el paciente que los experimentó.",
    "logoPosition": "derecha",
    "pages": [
     {
      "name": "Página 1",
      "elements": [
       {
        "type": "html",
        "name": "abilitytodoselectedactivities",
        "html": "<h6>Por favor califique su capacidad para realizar las siguientes actividades en la última semana seleccionando el número debajo de la respuesta apropiada.</h6>\n"
       },
       {
        "type": "number",
        "visible": false,
        "name": "guid",
        "title": "GUID"
       },
       {
        "type": "dropdown",
        "name": "openTightJar",
        "title": "Abrir un frasco apretado o nuevo",
        "choices": [
         {
          "value": "08885dbb-8f8b-47de-b9d9-814a686bf0ae",
          "text": "1. Sin dificultad"
         },
         {
          "value": "daefb4bb-647f-4768-8d0d-76b515f727b7",
          "text": "2. Dificultad leve"
         },
         {
          "value": "d3893aa5-cd39-4af8-97ac-b2ee74f4daf8",
          "text": "3. Dificultad moderada"
         },
         {
          "value": "16108c8c-5572-416f-809d-0f8f412b2125",
          "text": "4. Dificultad severa"
         },
         {
          "value": "5a893ee6-500c-4128-bab7-17737849729b",
          "text": "5. Incapaz"
         }
        ],
        "choicesOrder": "asc"
       },
       {
        "type": "dropdown",
        "name": "heavyHouseholdChores",
        "title": "Realizar tareas domésticas pesadas (p. ej., lavar paredes, pisos)",
        "choices": [
         {
          "value": "08885dbb-8f8b-47de-b9d9-814a686bf0ae",
          "text": "1. Sin dificultad"
         },
         {
          "value": "daefb4bb-647f-4768-8d0d-76b515f727b7",
          "text": "2. Dificultad leve"
         },
         {
          "value": "d3893aa5-cd39-4af8-97ac-b2ee74f4daf8",
          "text": "3. Dificultad moderada"
         },
         {
          "value": "16108c8c-5572-416f-809d-0f8f412b2125",
          "text": "4. Dificultad severa"
         },
         {
          "value": "5a893ee6-500c-4128-bab7-17737849729b",
          "text": "5. Incapaz"
         }
        ],
        "choicesOrder": "asc"
       },
       {
        "type": "dropdown",
        "name": "carryShoppingBag",
        "title": "Llevar una bolsa de compras o un maletín",
        "choices": [
         {
          "value": "08885dbb-8f8b-47de-b9d9-814a686bf0ae",
          "text": "1. Sin dificultad"
         },
         {
          "value": "daefb4bb-647f-4768-8d0d-76b515f727b7",
          "text": "2. Dificultad leve"
         },
         {
          "value": "d3893aa5-cd39-4af8-97ac-b2ee74f4daf8",
          "text": "3. Dificultad moderada"
         },
         {
          "value": "16108c8c-5572-416f-809d-0f8f412b2125",
          "text": "4. Dificultad severa"
         },
         {
          "value": "5a893ee6-500c-4128-bab7-17737849729b",
          "text": "5. Incapaz"
         }
        ],
        "choicesOrder": "asc"
       },
       {
        "type": "dropdown",
        "name": "washYourBack",
        "title": "Lavarse la espalda",
        "choices": [
         {
          "value": "08885dbb-8f8b-47de-b9d9-814a686bf0ae",
          "text": "1. Sin dificultad"
         },
         {
          "value": "daefb4bb-647f-4768-8d0d-76b515f727b7",
          "text": "2. Dificultad leve"
         },
         {
          "value": "d3893aa5-cd39-4af8-97ac-b2ee74f4daf8",
          "text": "3. Dificultad moderada"
         },
         {
          "value": "16108c8c-5572-416f-809d-0f8f412b2125",
          "text": "4. Dificultad severa"
         },
         {
          "value": "5a893ee6-500c-4128-bab7-17737849729b",
          "text": "5. Incapaz"
         }
        ],
        "choicesOrder": "asc"
       },
       {
        "type": "dropdown",
        "name": "useKnifeToCutFood",
        "title": "Usar un cuchillo para cortar comida",
        "choices": [
         {
          "value": "08885dbb-8f8b-47de-b9d9-814a686bf0ae",
          "text": "1. Sin dificultad"
         },
         {
          "value": "daefb4bb-647f-4768-8d0d-76b515f727b7",
          "text": "2. Dificultad leve"
         },
         {
          "value": "d3893aa5-cd39-4af8-97ac-b2ee74f4daf8",
          "text": "3. Dificultad moderada"
         },
         {
          "value": "16108c8c-5572-416f-809d-0f8f412b2125",
          "text": "4. Dificultad severa"
         },
         {
          "value": "5a893ee6-500c-4128-bab7-17737849729b",
          "text": "5. Incapaz"
         }
        ],
        "choicesOrder": "asc"
       },
       {
        "type": "dropdown",
        "name": "impactfulRecreationalActivities",
        "title": "Actividades recreativas en las que aplicas alguna fuerza o impacto a través de tu brazo, hombro o mano (p. ej., golf, martilleo, tenis, etc.)",
        "choices": [
         {
          "value": "08885dbb-8f8b-47de-b9d9-814a686bf0ae",
          "text": "1. Sin dificultad"
         },
         {
          "value": "daefb4bb-647f-4768-8d0d-76b515f727b7",
          "text": "2. Dificultad leve"
         },
         {
          "value": "d3893aa5-cd39-4af8-97ac-b2ee74f4daf8",
          "text": "3. Dificultad moderada"
         },
         {
          "value": "16108c8c-5572-416f-809d-0f8f412b2125",
          "text": "4. Dificultad severa"
         },
         {
          "value": "5a893ee6-500c-4128-bab7-17737849729b",
          "text": "5. Incapaz"
         }
        ],
        "choicesOrder": "asc"
       },
       {
        "type": "dropdown",
        "name": "interferenceWithSocialActivities",
        "title": "Durante la última semana, ¿en qué medida ha interferido tu problema de brazo, hombro o mano en tus actividades sociales normales con familiares, amigos, vecinos o grupos?",
        "choices": [
         {
          "value": "f1e56bd1-83f8-419e-9d8c-9aaadf6f9790",
          "text": "1. Para nada"
         },
         {
          "value": "88a1e0e3-972e-4293-98c7-cd7ae5937cb1",
          "text": "2. Ligeramente"
         },
         {
          "value": "5303e964-6ada-4415-baf2-945d34f5fccf",
          "text": "3. Moderadamente"
         },
         {
          "value": "56a3ab79-30d2-4855-ba4a-3758b8ae309d",
          "text": "4. Bastante"
         },
         {
          "value": "606947a4-ad44-44b9-bb0f-34b6530c2c43",
          "text": "5. Extremadamente"
         }
        ],
        "choicesOrder": "asc"
       },
       {
        "type": "dropdown",
        "name": "limitationsInWorkActivities",
        "title": "Durante la última semana, ¿te sentiste limitado en tu trabajo u otras actividades diarias regulares como resultado de tu problema de brazo, hombro o mano?",
        "choices": [
         {
          "value": "45a81810-25b4-441d-a846-0b0c0acdb377",
          "text": "1. No limitado en absoluto"
         },
         {
          "value": "a9af73a8-564f-45c1-a85d-e81c2a616ccd",
          "text": "2. Ligeramente limitado"
         },
         {
          "value": "5303e964-6ada-4415-baf2-945d34f5fccf",
          "text": "3. Moderadamente limitado"
         },
         {
          "value": "adf9af6e-a1c3-462d-bd58-702a2b7bdc9b",
          "text": "4. Muy limitado"
         },
         {
          "value": "5a893ee6-500c-4128-bab7-17737849729b",
          "text": "5. Incapaz"
         }
        ],
        "choicesOrder": "asc"
       },
       {
        "type": "html",
        "name": "severityofsymptoms",
        "html": "<h6>Por favor califique la gravedad de los siguientes síntomas en la última semana</h6>"
       },
       {
        "type": "dropdown",
        "name": "armShoulderHandPain",
        "title": "Dolor en el brazo, hombro o mano",
        "choices": [
         {
          "value": "75f3c572-74dc-4c71-aa9a-3278dbcd2fb6",
          "text": "1. Ninguno"
         },
         {
          "value": "8db1770d-fa3d-419f-a794-f6c3e3d04d6f",
          "text": "2. Leve"
         },
         {
          "value": "54798d14-ae3b-4666-8667-a9be973f9996",
          "text": "3. Moderado"
         },
         {
          "value": "258d897f-da46-4d35-ae1f-f6517117bd01",
          "text": "4. Severo"
         },
         {
          "value": "90192048-9a12-45fa-94c8-faea53e7378a",
          "text": "5. Extremo"
         }
        ]
       },
       {
        "type": "dropdown",
        "name": "tinglingPinsAndNeedles",
        "title": "Hormigueo (alfileres y agujas) en tu brazo, hombro o mano",
        "choices": [
         {
          "value": "75f3c572-74dc-4c71-aa9a-3278dbcd2fb6",
          "text": "1. Ninguno"
         },
         {
          "value": "8db1770d-fa3d-419f-a794-f6c3e3d04d6f",
          "text": "2. Leve"
         },
         {
          "value": "54798d14-ae3b-4666-8667-a9be973f9996",
          "text": "3. Moderado"
         },
         {
          "value": "258d897f-da46-4d35-ae1f-f6517117bd01",
          "text": "4. Severo"
         },
         {
          "value": "90192048-9a12-45fa-94c8-faea53e7378a",
          "text": "5. Extremo"
         }
        ]
       },
       {
        "type": "dropdown",
        "name": "difficultySleeping",
        "title": "Durante la última semana, ¿cuánta dificultad has tenido para dormir debido al dolor en tu brazo, hombro o mano?",
        "choices": [
         {
          "value": "08885dbb-8f8b-47de-b9d9-814a686bf0ae",
          "text": "1. Sin dificultad"
         },
         {
          "value": "daefb4bb-647f-4768-8d0d-76b515f727b7",
          "text": "2. Dificultad leve"
         },
         {
          "value": "d3893aa5-cd39-4af8-97ac-b2ee74f4daf8",
          "text": "3. Dificultad moderada"
         },
         {
          "value": "16108c8c-5572-416f-809d-0f8f412b2125",
          "text": "4. Dificultad severa"
         },
         {
          "value": "50e850eb-1c85-4779-9598-aec6a91e4895",
          "text": "5. Dificultad tan grande que no puedo dormir"
         }
        ]
       },
       {
        "type": "file",
        "name": "photo",
        "title": "Por favor sube una foto",
        "allowMultiple": true,
        "waitForUpload": true,
        "needConfirmRemoveFile": true,
        "sourceType": "file-camera"
       }
      ],
      "navigationButtonsVisibility": "mostrar"
     }
    ],
    "showProgressBar": "debajo del encabezado",
    "progressBarType": "preguntas",
    "progressBarShowPageNumbers": true,
    "goNextPageAutomatic": true,
    "allowCompleteSurveyAutomatic": false,
    "startSurveyText": "Siguiente",
    "pagePrevText": "Atrás",
    "completeText": "Guardar",
    "showPreviewBeforeComplete": "mostrar preguntas respondidas",
    "widthMode": "responsivo"
   }
   

const  DEFAULT_SURVEY_THEME = new Model(DEFAULT_SURVEY_JSON).applyTheme(SurveyTheme.FlatLightPanelless);

const DEFAULT_SURVEY_DATA = {}

const defaultSurveyConfig = {
    DEFAULT_SURVEY_CSS,
    DEFAULT_SURVEY_JSON,
    SPANISH_FOOT_SURVEY_JSON,
    DEFAULT_FOOT_EN_SURVEY_JSON,
    SPANISH_SURVEY_JSON,
    VIETNAMESE_SURVEY_JSON,
    DEFAULT_SURVEY_THEME,
    DEFAULT_SURVEY_DATA
}

export default defaultSurveyConfig;