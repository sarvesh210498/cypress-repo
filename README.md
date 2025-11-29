# 🧪 Cypress Automation Framework

This repository contains an end-to-end test automation framework built using **Cypress**, designed for functional UI testing, regression testing, and cross-browser validation.

---

## 📌 **Features**
- ✔ Cypress v12+ folder structure  
- ✔ Page Object Model (POM) support  
- ✔ Reusable custom commands  
- ✔ Environment variables & config separation  
- ✔ Supports both headed & headless test execution    

---

## 📁 **Project Structure**

```
cypress-repo/
├── cypress/
│   ├── e2e/                    # Test scripts (.cy.js/.spec.js)
│   ├── fixtures/               # Test data (JSON)
│   ├── support/
│   │   ├── commands.js         # Custom Cypress commands
│   │   └── e2e.js              # Support file loaded before tests
├── cypress.config.js           # Cypress configuration
├── package.json                # Project dependencies & scripts
└── README.md                   # Documentation
```