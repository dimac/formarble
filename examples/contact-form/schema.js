window.schema = {
  "title": "How can we help?",
  "properties": {
    "options": {
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
            "inline": true,
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
          "path": "options.issue",
          "level": 2,
          "order": 1002
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
            "name": "radio-list",
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
          "path": "options.priority",
          "level": 2,
          "order": 1003
        }
      },
      "display": {
        "name": "group"
      },
      "path": "options",
      "level": 1,
      "order": 1001
    },
    "summary": {
      "type": "string",
      "maxLength": 100,
      "display": {
        "name": "input",
        "type": "text",
        "required": true,
        "maxlength": 100
      },
      "title": "Summary",
      "path": "summary",
      "level": 1,
      "order": 1004
    },
    "message": {
      "type": "string",
      "maxLength": 2048,
      "display": {
        "name": "textarea",
        "required": true,
        "maxlength": 2048
      },
      "title": "Message",
      "path": "message",
      "level": 1,
      "order": 1005
    }
  },
  "required": [
    "summary",
    "message"
  ],
  "display": {
    "name": "group"
  },
  "level": 0,
  "order": 1000
}
