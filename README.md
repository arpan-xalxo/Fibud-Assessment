# Assesment Completed (NestJS + Prisma API)

This project is a NestJS-based REST API using Prisma as the ORM for managing experts, clients, and matches between them. It allows users to create experts, clients, and match them based on specialization and rating.

---

## 🚀 **Setup Instructions**

### **1. Clone the Repository**
```sh
git clone git@github.com:arpan-xalxo/Fibud-Assessment.git
cd Fibud-Assessment
```

### **2. Install Dependencies**
```sh
npm install
```

### **3. Set Up Environment Variables**
Create a `.env` file and configure the database connection:
```env
DATABASE_URL="mysql://root:password@127.0.0.1:3306/nestjs_prisma"
```

### **4. Initialize Prisma**
Run the following command to initialize Prisma and apply migrations:
```sh
npx prisma migrate dev --name init
```

### **5. Run the Application**
```sh
npm run start
```

---

## 📖 **API Endpoints**

### **1. Experts**
- **Create an Expert**  
  `POST /experts`
  ```json
  {
    "name": "John Doe",
    "specialization": "functional training",
    "availability": true,
    "rating": 4.5
  }
  ```

- **Get All Experts**  
  `GET /experts`

---

### **2. Clients**
- **Create a Client**  
  `POST /clients`
  ```json
  {
    "name": "Alice",
    "email": "alice@example.com"
  }
  ```

- **Get All Clients**  
  `GET /clients`

---

### **3. Matches**
- **Create a Match**  
  `POST /matches`
  ```json
  {
    "expertId": "valid-expert-uuid",
    "clientId": "valid-client-uuid"
  }
  ```

- **Get Matches (Filtered by Specialization or Rating)**  
  `GET /matches?specialization=functional training&rating=4.5`

---

## 🏗 **Design Choices**

### **1. Technology Stack**
- **NestJS**: Chosen for its modular architecture, dependency injection, and TypeScript support.
- **Prisma**: Provides an efficient and type-safe ORM for database interactions.
- **MYSQL**: Reliable relational database with strong support for complex queries.

### **2. Database Schema**
```prisma
model Expert {
  id             String   @id @default(uuid())
  name           String
  specialization String
  availability   Boolean  @default(true)
  rating         Float
  matches        Match[]
}

model Client {
  id      String   @id @default(uuid())
  name    String
  contact String
  matches Match[]
}

model Match {
  id        String   @id @default(uuid())
  expertId  String
  clientId  String
  expert    Expert   @relation(fields: [expertId], references: [id], onDelete: Cascade)
  client    Client   @relation(fields: [clientId], references: [id], onDelete: Cascade)
  createdAt DateTime @default(now())
}
```

### **3. Validation and Error Handling**
- **Validates Foreign Keys**: Ensures `expertId` and `clientId` exist before creating a match.
- **Custom Exceptions**: Uses `BadRequestException` for meaningful error messages.
- **Filtering Support**: Allows querying matches by `specialization` and `rating`.

### **4. Scalability Considerations**
- **Modular Structure**: Each resource (Expert, Client, Match) is in its own module.
- **Database Relations**: Prisma relations ensure referential integrity.
- **Efficient Queries**: Uses `connect` instead of manually handling foreign keys.

---

## 📌 **Next Steps**
- Implement authentication (JWT-based login for experts and clients).
- Add pagination support for fetching large datasets.
- Deploy to cloud platforms (e.g., AWS, Vercel, or DigitalOcean).

---

## 📞 **Support**
For any issues, feel free to create a GitHub issue or contact the project maintainers.

---

Thank you so much for this opportunity! 🚀

