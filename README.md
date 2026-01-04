# 💰 Expense Tracker

A full-stack MERN (MongoDB, Express.js, React, Node.js) application for tracking personal expenses and income with beautiful data visualizations and analytics.

## 📋 Features

- **User Authentication**: Secure signup/login system with JWT tokens
- **Expense Management**: Add, view, edit, and delete expense records
- **Income Tracking**: Track multiple income sources
- **Dashboard Analytics**: 
  - Visual charts (Pie, Bar, Line charts) for expense/income analysis
  - Recent transactions overview
  - Last 30 days expense trends
  - Category-wise breakdowns
- **Profile Management**: Customizable user profiles with photo upload
- **Excel Import**: Upload expenses/income via Excel files
- **Responsive Design**: Mobile-friendly interface built with TailwindCSS

## 🛠️ Tech Stack

### Frontend
- **React** - UI library
- **Vite** - Build tool and dev server
- **TailwindCSS** - Utility-first CSS framework
- **Recharts** - Chart library for data visualization
- **Axios** - HTTP client
- **React Router DOM** - Client-side routing
- **React Hot Toast** - Toast notifications
- **Emoji Picker React** - Emoji selection

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing
- **Multer** - File upload handling
- **XLSX** - Excel file processing

## 📁 Project Structure

```
expense-tracker/
├── backend/
│   ├── config/
│   │   └── db.js                 # Database configuration
│   ├── controllers/
│   │   ├── authController.js     # Authentication logic
│   │   ├── expenseController.js  # Expense operations
│   │   ├── incomeController.js   # Income operations
│   │   └── dashboardController.js # Dashboard data
│   ├── middleware/
│   │   ├── authMiddleware.js     # JWT verification
│   │   └── uploadMiddleware.js   # File upload handling
│   ├── models/
│   │   ├── User.js               # User schema
│   │   ├── Expense.js            # Expense schema
│   │   └── Income.js             # Income schema
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── expenseRoutes.js
│   │   ├── incomeRoutes.js
│   │   └── dashboardRoutes.js
│   ├── .env                      # Environment variables
│   ├── package.json
│   └── server.js                 # Entry point
│
└── frontend/
    └── expense-tracker/
        ├── src/
        │   ├── components/
        │   │   ├── Cards/           # UI card components
        │   │   ├── Charts/          # Chart components
        │   │   ├── Dashboard/       # Dashboard components
        │   │   ├── Expense/         # Expense management
        │   │   ├── Income/          # Income management
        │   │   ├── Inputs/          # Form inputs
        │   │   └── Layouts/         # Layout components
        │   ├── context/
        │   │   └── UserContext.jsx  # Global state
        │   ├── hooks/
        │   │   └── useUserAuth.js   # Custom auth hook
        │   ├── pages/
        │   │   ├── Auth/            # Login/Signup pages
        │   │   └── Dashboard/       # Dashboard pages
        │   ├── utils/
        │   │   ├── apiPaths.js      # API endpoints
        │   │   ├── axiosInstance.js # Axios config
        │   │   └── helper.js        # Utility functions
        │   ├── App.jsx
        │   └── main.jsx
        ├── package.json
        └── vite.config.js

```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account (or local MongoDB)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/JayawanthRh/expense-tracker.git
   cd expense-tracker
   ```

2. **Set up Backend**
   ```bash
   cd backend
   npm install
   ```

3. **Configure Environment Variables**
   
   Create a `.env` file in the `backend` directory:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   PORT=8000
   ```

4. **Set up Frontend**
   ```bash
   cd ../frontend/expense-tracker
   npm install
   ```

### Running the Application

1. **Start Backend Server**
   ```bash
   cd backend
   npm run dev
   ```
   Backend will run on `http://localhost:8000`

2. **Start Frontend Development Server**
   ```bash
   cd frontend/expense-tracker
   npm run dev
   ```
   Frontend will run on `http://localhost:5173`

3. **Access the Application**
   
   Open your browser and navigate to `http://localhost:5173`

## 📊 API Endpoints

### Authentication
- `POST /api/v1/auth/register` - Register new user
- `POST /api/v1/auth/login` - User login

### Expenses
- `GET /api/v1/expense` - Get all expenses
- `POST /api/v1/expense` - Create new expense
- `PUT /api/v1/expense/:id` - Update expense
- `DELETE /api/v1/expense/:id` - Delete expense
- `POST /api/v1/expense/upload` - Upload expenses via Excel

### Income
- `GET /api/v1/income` - Get all income records
- `POST /api/v1/income` - Create new income
- `PUT /api/v1/income/:id` - Update income
- `DELETE /api/v1/income/:id` - Delete income
- `POST /api/v1/income/upload` - Upload income via Excel

### Dashboard
- `GET /api/v1/dashboard/stats` - Get dashboard statistics

## 🔐 Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `MONGO_URI` | MongoDB connection string | `mongodb+srv://user:pass@cluster.mongodb.net/dbname` |
| `JWT_SECRET` | Secret key for JWT tokens | `your_secure_random_string` |
| `PORT` | Backend server port | `8000` |
| `CLIENT_URL` | Frontend URL (optional) | `http://localhost:5173` |

## 🎨 Features in Detail

### Dashboard
- Real-time financial overview
- Category-wise expense breakdown
- Monthly income vs expense comparison
- Recent transaction history

### Charts & Analytics
- **Pie Chart**: Category distribution
- **Bar Chart**: Monthly comparisons
- **Line Chart**: Trend analysis over time

### File Upload
- Support for Excel (.xlsx) files
- Bulk import of expenses/income
- Automatic data validation

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Jayawanth RH**
- GitHub: [@JayawanthRh](https://github.com/JayawanthRh)

## 🙏 Acknowledgments

- React and Vite communities
- MongoDB Atlas for database hosting
- TailwindCSS for styling utilities
- Recharts for beautiful visualizations

---

**Note**: Make sure to keep your `.env` file secure and never commit it to version control. The `.gitignore` file is configured to exclude sensitive files.
