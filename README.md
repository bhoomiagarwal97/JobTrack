\# JobTrack



A full-stack job application tracking system built with \*\*Spring Boot, React, and MySQL\*\*.



\## 🚀 Features



\* Add new job applications

\* View all job applications

\* Search applications by company or job role

\* Filter applications by status

\* Sort applications by date, company, or status

\* View application details

\* Edit existing applications

\* Delete applications

\* Dashboard with application statistics

\* REST APIs using Spring Boot

\* MySQL database integration

\* React-based responsive frontend



\## 🛠️ Tech Stack



\### Frontend



\* React.js

\* JavaScript

\* React Router

\* Axios

\* Vite

\* CSS



\### Backend



\* Java

\* Spring Boot

\* Spring Data JPA

\* REST API

\* Maven



\### Database



\* MySQL



\### Tools



\* Git

\* GitHub

\* VS Code

\* IntelliJ IDEA



\## 📂 Project Structure



```text

JobTrack/

│

├── backend/

│   ├── src/

│   │   └── main/

│   │       ├── java/

│   │       │   └── com/jobtracker/jobtracker/

│   │       │       ├── controller/

│   │       │       ├── entity/

│   │       │       ├── repository/

│   │       │       └── service/

│   │       └── resources/

│   │           └── application.properties

│   │

│   ├── pom.xml

│   └── mvnw

│

├── frontend/

│   ├── src/

│   │   ├── components/

│   │   ├── pages/

│   │   ├── services/

│   │   ├── App.jsx

│   │   └── main.jsx

│   │

│   ├── package.json

│   └── vite.config.js

│

├── .gitignore

└── README.md

```



\## 🔗 API Endpoints



| Method | Endpoint                 | Description           |

| ------ | ------------------------ | --------------------- |

| GET    | `/api/applications`      | Get all applications  |

| GET    | `/api/applications/{id}` | Get application by ID |

| POST   | `/api/applications`      | Add a new application |

| PUT    | `/api/applications/{id}` | Update an application |

| DELETE | `/api/applications/{id}` | Delete an application |



\## ⚙️ Setup



\### 1. Clone the repository



```bash

git clone https://github.com/bhoomiagarwal97/JobTrack.git

cd JobTrack

```



\### 2. Backend Setup



Navigate to the backend:



```bash

cd backend

```



Configure MySQL and create the database:



```sql

CREATE DATABASE jobtrack;

```



Set the database password using the `DB\_PASSWORD` environment variable.



Then run:



```bash

./mvnw spring-boot:run

```



The backend will run on:



```text

http://localhost:8080

```



\### 3. Frontend Setup



Open another terminal:



```bash

cd frontend

npm install

npm run dev

```



The frontend will run on:



```text

http://localhost:5173

```



\## 📊 Dashboard



The dashboard provides an overview of:



\* Total applications

\* Applied applications

\* Interviews

\* Offers



\## 🔍 Application Management



Users can:



\* Search applications

\* Filter by application status

\* Sort applications

\* Open application details

\* Edit application information

\* Delete applications



\## 🔮 Future Improvements



\* User authentication

\* Pagination

\* Application reminders

\* Email notifications

\* Resume upload

\* Interview scheduling

\* Analytics and charts

\* Deployment to cloud platforms



\## 👩‍💻 Author



\*\*Bhoomi Agarwal\*\*



B.Tech Computer Science Engineering

GLA University



\---



⭐ If you find this project useful, feel free to explore the repository.



