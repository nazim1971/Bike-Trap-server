
# 🏍️ Bike Trap

A fully-featured backend API for managing bike servicing workflows, including customer registrations, bike records, and detailed service histories — all with robust CRUD capabilities and RESTful endpoints.

![Bike Servicing](https://img.shields.io/badge/Bike-Servicing-orange)
![REST API](https://img.shields.io/badge/API-REST-green)
![Version](https://img.shields.io/badge/Version-1.0.0-blue)

---

## 🚀 Live Server

🔗 **Backend API:** [https://bike-trap-server.vercel.app](https://bike-trap-server.vercel.app)

---

## ⚙️ Technology Stack

- **Backend:** Express.js + TypeScript
- **Database:** PostgreSQL
- **ORM Tool:** Prisma
- **Deployment Platform:** Render

---

## ✨ Core Features

- 🚦 **Customer Profiles:** Create and manage customer accounts
- 🛵 **Bike Registration:** Track bikes and their assigned owners
- 🧰 **Service Logs:** Maintain service history with current status
- ✅ **Service Completion:** Mark services with timestamps
- ⏰ **Overdue Alerts:** Automatically detect services pending for more than 7 days

---

## 🔗 API Routes Overview

### 🧑 Customer APIs

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/customers` | Add a new customer |
| `GET` | `/api/customers` | Get all customers |
| `GET` | `/api/customers/:id` | Get a single customer |
| `PUT` | `/api/customers/:id` | Update customer information |
| `DELETE` | `/api/customers/:id` | Remove a customer |

### 🛵 Bike APIs

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/bikes` | Register a bike |
| `GET` | `/api/bikes` | List all bikes |
| `GET` | `/api/bikes/:id` | Get a bike by ID |

### 🔧 Service APIs

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/services` | Create a service record |
| `GET` | `/api/services` | Retrieve all service records |
| `GET` | `/api/services/:id` | View a specific service record |
| `PUT` | `/api/services/:id/complete` | Complete a service task |
| `GET` | `/api/services/status` | Get overdue or pending services |

---

## ⚡ Quick Start

### 🧱 Requirements

- Node.js v16+
- PostgreSQL
- Yarn, npm, pnpm, or Bun package manager

### 🚀 Setup Instructions

1. **Clone the Repo**
   ```bash
   git clone https://github.com/nazim1971/Bike-Trap-server.git
   cd Bike-Trap-server
   ```

2. **Install Dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure Environment**
   Create a `.env` file with the following:

   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/bike-trap"
   PORT=5000
   NODE_ENV=development
   ```

4. **Migrate Database with Prisma**
   ```bash
   npx prisma migrate dev --name init
   ```

5. **Run the App**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Build for Production**
   ```bash
   npm run build
   ```

---

## 📬 API Request Examples

### ➕ Add a New Customer

```bash
curl -X POST http://localhost:5000/api/customers \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Alice",
    "email": "alice@example.com",
    "phone": "01700000000"
  }'
```

### 🛵 Register a Bike

```bash
curl -X POST http://localhost:5000/api/bikes \
  -H "Content-Type: application/json" \
  -d '{
    "brand": "Suzuki",
    "model": "Gixxer",
    "year": 2023,
    "customerId": "your-customer-uuid"
  }'
```

### 🛠️ Create a Service Entry

```bash
curl -X POST http://localhost:5000/api/services \
  -H "Content-Type: application/json" \
  -d '{
    "bikeId": "your-bike-uuid",
    "serviceDate": "2025-04-11T10:00:00.000Z",
    "description": "Engine tuning",
    "status": "pending"
  }'
```

---

## 🗃️ Database Schema

### 👤 Customers

| Field | Type | Description |
|-------|------|-------------|
| `customerId` | UUID | Unique customer ID |
| `name` | String | Customer’s full name |
| `email` | String | Unique email |
| `phone` | String | Contact number |
| `createdAt` | DateTime | Timestamp |

### 🛵 Bikes

| Field | Type | Description |
|-------|------|-------------|
| `bikeId` | UUID | Unique bike ID |
| `brand` | String | Manufacturer name |
| `model` | String | Model of the bike |
| `year` | Int | Year of manufacture |
| `customerId` | UUID | FK to customer |

### 🔧 ServiceRecords

| Field | Type | Description |
|-------|------|-------------|
| `serviceId` | UUID | Unique service record ID |
| `bikeId` | UUID | FK to bike |
| `serviceDate` | DateTime | Service start date |
| `completionDate` | DateTime | Nullable completion date |
| `description` | String | Task details |
| `status` | String | `pending` | `in_progress` | `done` |

---

## ❌ Error Response Format

```json
{
  "success": false,
  "status": 404,
  "message": "Bike not found",
  "stack": "Only shown in development"
}
```

---

## ✅ Running Tests

```bash
npm test
# or
yarn test
```

---

## 👤 Author

- **Md. Nazim Uddin**
- 🔗 [GitHub Profile](https://github.com/nazim1971)
- 📧 Email: nazimmuddin10@gmail.com

---

## 🙌 Credits

- Prisma Docs
- Express.js Docs
- PostgreSQL Community
```

---

