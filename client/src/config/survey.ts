
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
    SPANISH_SURVEY_JSON,
    VIETNAMESE_SURVEY_JSON,
    DEFAULT_SURVEY_THEME,
    DEFAULT_SURVEY_DATA
}

export default defaultSurveyConfig;