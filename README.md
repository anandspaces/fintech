# Portfolio Analytics Dashboard

## Overview
The Portfolio Analytics Dashboard is a web application designed for fintech users to track, analyze, and manage their investment portfolios. It provides a comprehensive dashboard with dynamic charts, key metrics, and detailed reports on portfolio performance. This app also supports strategy comparison, filtering, and sorting features to enhance user experience.

### Key Features:
- Dynamic charts for investment performance (e.g., portfolio growth over time, asset allocation, and profit/loss).
- Card-based views for key metrics (e.g., total portfolio value, daily P&L, win rate).
- Filtering and sorting system for customizing data views (e.g., by date range or performance).
- Simulated strategy performance reports with metrics like:
  - ROI (Return on Investment)
  - CAGR (Compound Annual Growth Rate)
  - Drawdown percentage
- Section for market updates or recent trades (using dummy data).
- Strategy comparison feature (optional).

---

## Technologies Used
- **Frontend**: React.js, Vite, TailwindCSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (for storing portfolio, strategy, and market data)
- **Optional Features**: JWT Authentication (for user login)

---

## Project Structure

### Frontend:
```
frontend/
│── public/                  # Static files
│── src/                     # Main source folder
│   ├── components/          # Reusable UI components
│   ├── pages/               # Page views (Dashboard, Portfolio, etc.)
│   ├── services/            # API calls
│   ├── context/             # Context API for state management
│   ├── App.js               # Main React app
│   ├── main.jsx             # Vite main entry point
│   ├── index.css            # Global CSS
│── .env                     # Environment variables
│── tailwind.config.js       # TailwindCSS configuration
│── postcss.config.js        # PostCSS configuration
│── package.json             # Dependencies
│── vite.config.js           # Vite configuration
```

### Backend:
```
backend/
│── server.js                # Main server entry point
│── config/                  # Database and environment setup
│── models/                  # MongoDB schemas (Portfolio, Strategy, MarketUpdate)
│── routes/                  # API routes for portfolio, strategy, and market
│── controllers/             # Controllers for business logic
│── middleware/              # Optional authentication middleware
│── utils/                   # Helper functions
│── data/                    # Dummy data (sampleData.json)
│── logs/                    # Log files (error.log)
│── .env                     # Environment variables
│── package.json             # Dependencies
```

---

## Prerequisites
- **Node.js** and **npm** (or **Yarn**) installed.
- **MongoDB** (either local or MongoDB Atlas) for the database.

---

## Setup Instructions

### 1. Clone the Repository
Clone the project repository to your local machine:

```bash
git clone https://github.com/your-username/portfolio-analytics-dashboard.git
cd portfolio-analytics-dashboard
```

### 2. Backend Setup
#### Install dependencies
Navigate to the backend directory and install the required dependencies:

```bash
cd backend
npm install
```

#### Configure Environment Variables
Create a `.env` file in the backend directory with the following content:

```bash
PORT=5000
MONGO_URI=mongodb://localhost:27017/portfolio_analytics  # or your MongoDB Atlas URI
JWT_SECRET=your_jwt_secret_key  # (optional for JWT authentication)
```

#### Start the Backend Server
Run the backend server:

```bash
npm start
```

This will start the server on port `5000` (or the port specified in the `.env` file).

### 3. Frontend Setup
#### Install dependencies
Navigate to the frontend directory and install the required dependencies:

```bash
cd frontend
npm install
```

#### Configure Environment Variables
Create a `.env` file in the frontend directory (optional for environment variables like API URLs).

#### Start the Frontend Development Server
Run the frontend server using Vite:

```bash
npm run dev
```

This will start the development server at `http://localhost:3000` (or the port specified).

---

## Usage

1. **Portfolio Dashboard**:
   - View your portfolio data, including total value and growth over time.
   - Customize the data view using filters such as date range or asset class.

2. **Strategy Reports**:
   - View performance metrics for different investment strategies, including ROI, CAGR, and Drawdown.

3. **Market Updates**:
   - Check the latest market news or recent trades (dummy data for testing).

4. **Strategy Comparison** (Optional):
   - Compare two or more strategies side by side based on performance metrics.

---

## API Endpoints

### Portfolio
- `GET /api/portfolio`: Retrieve all portfolio data.
- `POST /api/portfolio`: Create a new portfolio.
- `PUT /api/portfolio/:id`: Update portfolio data.

### Strategy
- `GET /api/strategy`: Retrieve all strategies and their performance data.
- `POST /api/strategy`: Create a new strategy.
- `PUT /api/strategy/:id`: Update strategy performance data.

### Market Updates
- `GET /api/market`: Retrieve all market updates.
- `POST /api/market`: Create a new market update.

---

## Optional: Authentication (JWT)
If you choose to implement JWT authentication, you can protect certain API routes by adding the `auth.js` middleware. To generate a JWT token, a `POST /api/auth/login` route can be added.

---

## Testing
For testing API routes, you can use tools like **Postman** or **Insomnia** to interact with the backend and send HTTP requests.

---

### Author
[https://github.com/anandspaces]