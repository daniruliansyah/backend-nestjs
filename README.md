# Backend Engineer Challenge - NestJS API

## 📋 Description
This project is a RESTful API built with **NestJS**, designed to manage Divisions and Employees (Karyawan). It demonstrates the implementation of **Modular Architecture**, **TypeORM Relationships**, **JWT Authentication**, and **E2E Testing**.

## 🚀 Tech Stack
- **Framework:** NestJS (Node.js)
- **Database:** MySQL (via TypeORM)
- **Authentication:** Passport-JWT & Bcrypt
- **Testing:** Jest & Supertest
- **Language:** TypeScript

## 🏛️ Architecture Pattern
This project follows the **Standard Modular Architecture (NestJS Convention)** to ensure Clean Architecture principles:

1.  **Modules**: Separate concerns (Auth, Divisi, Karyawan) into distinct bundles.
2.  **Controllers**: Handle HTTP requests and validate inputs (DTOs).
3.  **Services**: Contain business logic (e.g., password hashing, relation checking).
4.  **Repositories (TypeORM)**: Handle direct database interactions.

**Why this pattern?**
Saya memilih Standard Modular Architecture bawaan NestJS. Alasannya karena struktur ini menerapkan prinsip Convention over Configuration yang kuat. Sebagai developer yang memiliki latar belakang Laravel, saya merasa struktur ini sangat intuitif karena memisahkan logic (Service), handling (Controller), dan data (Repository/Entity) dengan rapi. Hal ini mempercepat proses development dan menjaga kode tetap bersih (Clean Code).

## 🛠️ Installation & Setup

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/username-anda/repo-name.git](https://github.com/daniruliansyah/backend-nestjs.git)
    cd backend-nestjs
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Environment Configuration**
    Create a `.env` file in the root directory based on `.env.example` (or use your own):
    ```env
    DB_HOST=localhost
    DB_PORT=3306
    DB_USERNAME=root
    DB_PASSWORD=
    DB_DATABASE=karyawan_nest
    JWT_SECRET=rahasia_negara_123
    ```

4.  **Run the Application**
    ```bash
    # Development mode
    npm run start:dev
    ```
    The API will run at `http://localhost:3000`

## ✅ Running Tests (E2E)
To ensure the Authentication system works correctly (Point D of the challenge):

```bash
npm run test:e2e