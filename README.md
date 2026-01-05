# Expense Tracker

A simple yet powerful web app to help you track your daily expenses and income. Built with the MERN stack, it gives you a clear picture of where your money goes with easy-to-understand charts and reports.

## What Can You Do?

- Create an account and securely log in
- Add and manage your expenses - categorize them however you like
- Track your income from different sources
- See your spending patterns with visual charts
- Get a quick overview of your finances on the dashboard
- View your recent transactions at a glance
- Upload your profile photo
- Import expenses in bulk using Excel files
- Access everything on your phone - it's fully responsive

## Built With

**Frontend:**
- React for the user interface
- Vite for lightning-fast development
- TailwindCSS for styling
- Recharts for beautiful charts
- React Router for navigation

**Backend:**
- Node.js and Express for the server
- MongoDB for storing data
- JWT for secure authentication
- Multer for handling file uploads

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

## Getting Started

### What You'll Need

- Node.js installed on your computer
- A MongoDB Atlas account (free tier works fine)
- Your favorite code editor

### Setup Instructions

**1. Clone this repo**
```bash
git clone https://github.com/JayawanthRh/expense-tracker.git
cd expense-tracker
```

**2. Set up the backend**
```bash
cd backend
npm install
```

Create a `.env` file in the backend folder and add:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=any_random_secret_string
PORT=8000
```

**3. Set up the frontend**
```bash
cd ../frontend/expense-tracker
npm install
```

### Running the App

You'll need two terminal windows:

**Terminal 1 - Start the backend:**
```bash
cd backend
npm run dev
```
Server runs at http://localhost:8000

**Terminal 2 - Start the frontend:**
```bash
cd frontend/expense-tracker
npm run dev
```
App runs at http://localhost:5173

That's it! Open your browser and go to http://localhost:5173

## API Routes

If you're curious about the backend structure:

**Auth routes:** `/api/v1/auth`
- Register and login

**Expense routes:** `/api/v1/expense`
- Create, read, update, delete expenses
- Bulk upload via Excel

**Income routes:** `/api/v1/income`
- Manage income records
- Bulk upload support

**Dashboard:** `/api/v1/dashboard`
- Get your financial stats

## Configuration

Make sure your `.env` file has these:

- **MONGO_URI**: Your MongoDB connection string from Atlas
- **JWT_SECRET**: Any random string (keep it secret!)
- **PORT**: 8000 (or whatever you prefer)

## How It Works

**Dashboard:** When you log in, you'll see your financial summary right away. The dashboard shows your total income, expenses, and what's left. You can see recent transactions and check out different time periods.

**Charts:** Visual representations help you understand your spending habits better. Pie charts show where your money goes by category, bar charts compare months, and line charts show trends over time.

**Excel Import:** Got a spreadsheet of expenses? No problem. Just upload your Excel file and the app will import everything for you.

## Contributing

Found a bug or have an idea? Feel free to open an issue or submit a pull request. All contributions are welcome!

## Author

Built by Jayawanth RH  
GitHub: [@JayawanthRh](https://github.com/JayawanthRh)

## A Few Notes

- Never share your `.env` file or push it to GitHub - it contains sensitive credentials
- The `.gitignore` file is already set up to protect your secrets
- If you're deploying this, remember to set up your environment variables on your hosting platform

## License

Free to use under the MIT License. Build something awesome with it!
