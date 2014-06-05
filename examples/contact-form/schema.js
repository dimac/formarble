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
            "inline": true
          },
          "title": "Issue",
          "order": 1002,
          "path": "options.issue",
          "level": 2
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
          "order": 1003,
          "path": "options.priority",
          "level": 2
        }
      },
      "display": {
        "name": "group"
      },
      "order": 1001,
      "path": "options",
      "level": 1
    },
    "summary": {
      "type": "string",
      "maxLength": 100,
      "display": {
        "name": "input",
        "type": "text",
        "maxlength": 100,
        "required": true
      },
      "title": "Summary",
      "order": 1004,
      "path": "summary",
      "level": 1
    },
    "message": {
      "type": "string",
      "maxLength": 2048,
      "display": {
        "name": "input",
        "type": "text",
        "maxlength": 2048,
        "required": true
      },
      "title": "Message",
      "order": 1005,
      "path": "message",
      "level": 1
    }
  },
  "required": [
    "summary",
    "message"
  ],
  "display": {
    "name": "group"
  },
  "order": 1000,
  "level": 0
}
