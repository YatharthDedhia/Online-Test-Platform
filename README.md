# File Structure
```
├── Assets
├── code_of_duty.md
├── package.json
├── package-lock.json
├── public
│   └── index.html
├── README.md
└── src
    ├── App.css
    ├── App.js
    ├── Images
    ├── index.css
    ├── index.js
    ├── pages
    │   ├── admin
    │   │   ├── Admin.jsx
    │   │   └── css
    │   │       ├── institute.css
    │   │       └── ranklist.css
    │   ├── contact
    │   │   ├── Contact.jsx
    │   │   └── css
    │   │       └── contact.css
    │   ├── dashboard
    │   │   ├── css
    │   │   │   ├── calendar.css
    │   │   │   ├── dashboard.css
    │   │   │   ├── navbar.css
    │   │   │   ├── sidebar.css
    │   │   │   └── table.css
    │   │   └── Dashboard.jsx
    │   ├── index.js
    │   ├── institute
    │   │   ├── css
    │   │   │   ├── institute.css
    │   │   │   ├── navbar.css
    │   │   │   └── ranklist.css
    │   │   └── Institute.jsx
    │   ├── landing
    │   │   ├── Components.js
    │   │   ├── css
    │   │   │   ├── features.css
    │   │   │   ├── landing.css
    │   │   │   ├── login.css
    │   │   │   ├── navbar.css
    │   │   │   └── signup.css
    │   │   └── Landing.jsx
    │   ├── ML
    │   │   ├── css
    │   │   │   └── ml.css
    │   │   ├── ml.jsx
    │   │   └── utilites.jsx
    │   ├── notes
    │   │   ├── css
    │   │   │   └── notes.css
    │   │   └── Notes.jsx
    │   ├── opening
    │   │   ├── css
    │   │   │   └── opening.css
    │   │   └── Opening.jsx
    │   ├── opening2
    │   │   ├── css
    │   │   │   └── opening2.css
    │   │   └── Opening2.jsx
    │   ├── profile
    │   │   ├── css
    │   │   │   ├── graph.css
    │   │   │   ├── line-chart.css
    │   │   │   ├── navbar.css
    │   │   │   ├── profile.css
    │   │   │   └── ranklist.css
    │   │   └── Profile.jsx
    │   ├── Speech
    │   │   └── speech.jsx
    │   └── test
    │       ├── css
    │       │   ├── test.css
    │       │   └── timer.css
    │       └── Test.jsx
    └── Protected Routes
        ├── ProtectedAdmin.js
        ├── ProtectedInstitute.js
        ├── ProtectedLanding.js
        ├── ProtectedStudent.js
        └── ProtectedTest.js
```

# Development guide
## **Step 1:** Clone the repo

    git clone https://github.com/YatharthDedhia/Online-Test-Platform.git && cd Online-Test-Platform/

## **Step 2:** Open *frontend* branch
    
    git checkout frontend

## **Step 3:** Install required **npm modules**

    npm i

## **Step 4:** Start the local server

    npm start

---
# Pages with their usage:

1. **Home / Intro** page
2. **/landing:** Login Signup Page

### Students:
3. **/dashboard**:
4. **/profile**:
5. **/notes**:
6. **/announcements**:
7. **/test**:

### Teachers:
8. **/institute**:
### Admin:
9. **/admin**: