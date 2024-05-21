# MagicGPT

MagicGPT is a versatile AI-powered application that allows users to engage in conversations with documents, images, and various models. Built with modern web technologies, MagicGPT provides a seamless and intuitive user experience.

## Features

- **Chat with Documents**: Upload and interact with documents, asking questions and receiving detailed responses.
- **Chat with Images**: Analyze and discuss images with the AI.
- **Multiple Conversation Models**: Switch between different AI models for varied conversational experiences.

## Tech Stack

### Frontend

- **Framework**: React
- **Language**: TypeScript
- **Build Tool**: Vite

### Backend

- **Runtime**: Node.js
- **Framework**: Express
- **Database**: MongoDB

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. **Clone the Repository**
   ```sh
   git clone https://github.com/yourusername/magicGPT.git
   cd magicGPT
   ```

2. **Install Frontend Dependencies**
   ```sh
   cd frontend
   npm install
   # or
   yarn install
   ```

3. **Install Backend Dependencies**
   ```sh
   cd ../backend
   npm install
   # or
   yarn install
   ```

### Configuration

1. **Frontend**
   - Create a `.env` file in the `frontend` directory with the following content:
     ```env
     VITE_API_URL=http://localhost:5000/api
     ```

2. **Backend**
   - Create a `.env` file in the `backend` directory with the following content:
     ```env
     PORT=5000
     MONGO_URI=mongodb://localhost:27017/magicgpt
     ```

### Running the Application

1. **Start the Backend Server**
   ```sh
   cd backend
   npm start
   # or
   yarn start
   ```

2. **Start the Frontend Development Server**
   ```sh
   cd ../frontend
   npm run dev
   # or
   yarn dev
   ```

3. Open your browser and navigate to `http://localhost:3000` to start using MagicGPT.

## Folder Structure

```
magicGPT/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   └── app.js
│   ├── .env
│   ├── package.json
│   └── ...
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── .env
│   ├── vite.config.ts
│   ├── package.json
│   └── ...
├── README.md
└── ...
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or feedback, please reach out to [businesswithsatyam9555@gmail.com](mailto:businesswithsatyam9555@gmail.com).

---

Thank you for using MagicGPT! We hope you enjoy the experience.
