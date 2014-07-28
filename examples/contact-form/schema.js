window.schema = {
   "title": "How can we help?",
   "required": [
      "issue",
      "priority",
      "summary",
      "message"
   ],
   "focus": "summary",
   "mapping": {},
   "virtual": {},
   "properties": {
      "issue": {
         "type": "string",
         "enum": [
            "tech-support",
            "feature-request",
            "bug-report"
         ],
         "display": {
            "name": "fm-radio-list",
            "options": [
               {
                  "id": "tech-support",
                  "title": "Tech support"
               },
               {
                  "id": "feature-request",
                  "title": "Feature request"
               },
               {
                  "id": "bug-report",
                  "title": "Bug report"
               }
            ],
            "inline": true,
            "required": true
         },
         "_id": "issue",
         "_path": "issue",
         "path": "issue",
         "title": "Issue",
         "_order": 1001,
         "level": 1
      },
      "priority": {
         "type": "string",
         "enum": [
            "low",
            "normal",
            "high",
            "urgent"
         ],
         "display": {
            "name": "fm-radio-list",
            "options": [
               {
                  "id": "low",
                  "title": "Low"
               },
               {
                  "id": "normal",
                  "title": "Normal"
               },
               {
                  "id": "high",
                  "title": "High"
               },
               {
                  "id": "urgent",
                  "title": "Urgent"
               }
            ],
            "required": true
         },
         "_id": "priority",
         "_path": "priority",
         "path": "priority",
         "title": "Priority",
         "_order": 1002,
         "level": 1
      },
      "summary": {
         "type": "string",
         "maxLength": 100,
         "_id": "summary",
         "_path": "summary",
         "path": "summary",
         "display": {
            "name": "fm-input",
            "type": "text",
            "maxlength": 100,
            "required": true,
            "autofocus": true
         },
         "title": "Summary",
         "_order": 1003,
         "level": 1
      },
      "message": {
         "type": "string",
         "maxLength": 2048,
         "display": {
            "name": "fm-textarea",
            "type": "text",
            "maxlength": 2048,
            "required": true
         },
         "_id": "message",
         "_path": "message",
         "path": "message",
         "title": "Message",
         "_order": 1004,
         "level": 1
      }
   },
   "display": {
      "name": "fm-input-group"
   },
   "_order": 1000,
   "level": 0
}
