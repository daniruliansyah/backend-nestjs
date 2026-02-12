# Backend Engineer Challenge - NestJS API

## 📋 Description
This project is a RESTful API built with **NestJS**, designed to manage Divisions and Employees. It demonstrates the implementation of **Modular Architecture**, **TypeORM Relationships**, **JWT Authentication**, and **E2E Testing**.

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
**"Saya memilih Standard Modular Architecture bawaan NestJS. Alasannya karena struktur ini menerapkan prinsip Convention over Configuration yang kuat. Sebagai developer yang memiliki latar belakang Laravel, saya merasa struktur ini sangat intuitif karena memisahkan logic (Service), handling (Controller), dan data (Repository/Entity) dengan rapi. Hal ini mempercepat proses development dan menjaga kode tetap bersih (Clean Code)."**

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
    JWT_SECRET=messigoat
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
```

## 🔌 API Documentation

**Base URL:** `http://localhost:3000`  
**Authentication:** Bearer Token (JWT)

### 1. Authentication (Auth)
Module untuk menangani proses login dan pembuatan token akses.

| Method | Endpoint | Description | Auth (Headers) |
| :--- | :--- | :--- | :--- |
| `POST` | `/auth/login` | Login user & generate JWT Token | ❌ None |

**Request Body:**
```json
{
  "email": "dani@gmail.com",
  "password": "dani123"
}
```

<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/fa80fcf7-5313-4051-9de9-1ba58ae05a45" />

---

### 2. Divisi
Module untuk kelola data divisi

| Method | Endpoint | Description | Auth (Headers) |
| :--- | :--- | :--- | :--- |
| `POST` | `/divisi` | Membuat divisi baru | 🔐 Bearer Token |
| `GET` | `/divisi` | Mengambil semua divisi | ❌ None |
| `GET` | `/divisi/id` | MEngambil satu divisi dengan id | ❌ None |

**Request Body:(POST)**
```json
{
  "nama_divisi": "Keuangan",
  "deskripsi": "Divisi kelola keuangan perusahaan"
}
```

**tanpa token**

<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/5b1c06cc-58a8-456b-8662-596f8df7c286" />

**dengan bearer token**

<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/da063326-a5d7-4108-a6b0-5da887735d2e" />

---

### 3. Karyawan
Module untuk kelola data karyawan

| Method | Endpoint | Description | Auth (Headers) |
| :--- | :--- | :--- | :--- |
| `POST` | `/divisi` | Menambahkan karyawan baru | ❌ None |
| `GET` | `/divisi` | Mengambil semua karyawan | ❌ None |
| `GET` | `/divisi/id` | MEngambil satu karyawan dengan id | ❌ None |

**Request Body:(GET)**

<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/cc03c21d-29e2-45f0-8917-e6215d9ed218" />

---

## 👤 Author
**Dani Ruliansyah**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/daniruliansyah) [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/dani-ruliansyah-1039b43aa/)
