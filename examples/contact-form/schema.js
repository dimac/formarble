window.schema = {
  "title": "How can we help?",
  "properties": {
    "issue": {
      "type": "string",
      "enum": [
        "tech-support",
        "feature-request",
        "bug-report"
      ],
      "display": {
        "name": "radio-list",
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
        ]
      },
      "title": "Issue",
      "path": "issue",
      "level": 1,
      "order": 1001
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
        "name": "select",
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
        ]
      },
      "title": "Priority",
      "path": "priority",
      "level": 1,
      "order": 1002
    },
    "summary": {
      "type": "string",
      "maxLength": 255,
      "display": {
        "name": "input",
        "type": "text",
        "maxlength": 255
      },
      "title": "Summary",
      "path": "summary",
      "level": 1,
      "order": 1003
    },
    "message": {
      "type": "string",
      "maxLength": 2048,
      "display": {
        "name": "textarea",
        "maxlength": 2048
      },
      "title": "Message",
      "path": "message",
      "level": 1,
      "order": 1004
    }
  },
  "display": "group",
  "level": 0,
  "order": 1000
}
