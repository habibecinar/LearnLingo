# 🎓 LearnLingo - Language Learning Platform

LearnLingo is a modern web application for online language learning services. Users can browse language tutors, filter them by various criteria, and book trial lessons.

## ✨ Features

- 🔐 **User Authentication** - Firebase Authentication with email/password
- 👨‍🏫 **Teacher Listings** - Browse through language tutors with detailed profiles
- 🔍 **Advanced Filtering** - Filter teachers by language, level, and price
- ❤️ **Favorites System** - Save favorite teachers (requires login)
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices
- 📅 **Booking System** - Book trial lessons with form validation
- 🔄 **Load More** - Pagination with 4 teachers per page
- 💾 **Persistent Data** - Favorites saved in localStorage

## 🛠️ Technologies Used

- **React 19** - UI library
- **React Router DOM** - Routing
- **Firebase** - Authentication & Realtime Database
- **React Hook Form** - Form handling
- **Yup** - Form validation
- **React Hot Toast** - Notifications
- **React Icons** - Icon library
- **Vite** - Build tool

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Firebase account

## 🚀 Getting Started

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd LearnLingo
```

2. **Install dependencies**
```bash
npm install
```

3. **Firebase Setup**
- Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
- Enable Authentication (Email/Password)
- Create a Realtime Database
- Update `src/firebase/firebase.js` with your Firebase config

4. **Add Teachers Data**
- Import teacher data to your Firebase Realtime Database under `/teachers` path
- Each teacher should have: id, name, surname, languages, levels, rating, reviews, price_per_hour, lessons_done, avatar_url, lesson_info, conditions, experience

5. **Run the development server**
```bash
npm run dev
```

6. **Open your browser**
- Navigate to `http://localhost:5173` (or the port shown in terminal)

## 📂 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.jsx
│   ├── Modal.jsx
│   ├── TeacherCard.jsx
│   ├── Filter.jsx
│   ├── LoginForm.jsx
│   ├── RegisterForm.jsx
│   ├── BookingForm.jsx
│   └── PrivateRoute.jsx
├── context/            # Context providers
│   ├── AuthContext.jsx
│   └── FavoritesContext.jsx
├── pages/              # Page components
│   ├── Home.jsx
│   ├── Teachers.jsx
│   └── Favorites.jsx
├── styles/             # CSS files
├── firebase/           # Firebase configuration
└── App.jsx            # Main app component
```

## 🎯 Key Features Implementation

### Authentication
- User registration and login with email/password
- Protected routes for favorites page
- Persistent authentication state
- Form validation with react-hook-form & yup

### Teachers Page
- Display 4 teachers initially
- "Load More" button to fetch more teachers
- Filter by language, knowledge level, and price
- Each teacher card shows detailed information
- "Read more" expands teacher details

### Favorites
- Add/remove teachers from favorites
- Heart icon changes color when favorited
- Favorites persist across sessions using localStorage
- Only authenticated users can add favorites

### Booking
- Modal form for trial lesson booking
- Form validation with Yup
- Multiple lesson reasons to choose from
- Email and phone validation
- Modal closes on ESC key, backdrop click, or X button

## 🔒 Firebase Security Rules

For Realtime Database:
```json
{
  "rules": {
    "teachers": {
      ".read": true,
      ".write": false
    }
  }
}
```

## 🎨 Design

The application follows a modern, clean design with:
- Responsive layout
- Smooth animations
- Intuitive user interface
- Accessible components
- Yellow (#f4c550) primary color theme

## 📝 Technical Requirements Met

✅ Firebase Authentication (register, login, logout)  
✅ Form validation with react-hook-form & yup  
✅ All fields required in forms  
✅ Modal closes with ESC, backdrop click, or X button  
✅ Teachers collection in Firebase Realtime Database  
✅ Teacher cards styled as per design  
✅ Load more functionality (4 cards at a time)  
✅ Favorite system with heart button  
✅ Favorites require authentication  
✅ Favorites persist on page refresh  
✅ Read more expands teacher details  
✅ Book trial lesson modal with form  
✅ Private route for Favorites page  
✅ Routing with React Router  
✅ Filtering by language, level, and price  

## 🚀 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 📝 License

MIT License

## 👨‍💻 Author

Your Name

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
