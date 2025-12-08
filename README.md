# 🌍 LearnLingo - Online Language Learning Platform

A modern web application for finding and booking language teachers online. Built with React, Firebase, and modern web technologies.

## 📝 Project Description

LearnLingo is an online platform that connects language learners with qualified teachers. Users can browse through teacher profiles, filter by language, experience level, and price, save their favorite teachers, and book trial lessons.

### Key Features:
- 🔐 **User Authentication** - Secure registration and login with Firebase Auth
- 👨‍🏫 **Teacher Browsing** - Browse 32+ qualified language teachers
- 🔍 **Advanced Filtering** - Filter by language, level, and price
- ❤️ **Favorites System** - Save favorite teachers (persists across sessions)
- 📅 **Booking System** - Book trial lessons with form validation
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile
- 🌐 **Real-time Data** - Teachers data stored in Firebase Realtime Database

## 🚀 Technologies

### Frontend:
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **CSS3** - Custom styling

### Backend & Services:
- **Firebase Authentication** - User authentication
- **Firebase Realtime Database** - Teacher data storage

### Form Management & Validation:
- **react-hook-form** - Form state management
- **yup** - Schema validation

### Additional Libraries:
- **react-hot-toast** - Toast notifications
- **react-icons** - Icon library

## 📦 Installation & Setup

### Prerequisites:
- Node.js (v18 or higher)
- npm or yarn
- Firebase project

### Steps:

1. **Clone the repository:**
```bash
git clone https://github.com/habibecinar/LearnLingo.git
cd LearnLingo
```

2. **Install dependencies:**
```bash
npm install
```

3. **Configure Firebase:**
   - Create a Firebase project at [console.firebase.google.com](https://console.firebase.google.com)
   - Enable Authentication (Email/Password)
   - Create a Realtime Database
   - Update \`src/firebase/firebase.js\` with your Firebase config

4. **Run development server:**
```bash
npm run dev
```

5. **Build for production:**
```bash
npm run build
```

## 🗂️ Project Structure

```
LearnLingo/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Header.jsx
│   │   ├── TeacherCard.jsx
│   │   ├── Modal.jsx
│   │   ├── LoginForm.jsx
│   │   ├── RegisterForm.jsx
│   │   ├── BookingForm.jsx
│   │   ├── BookingModal.jsx
│   │   ├── FilterBar.jsx
│   │   └── PrivateRoute.jsx
│   ├── context/             # React Context
│   │   ├── AuthContext.jsx
│   │   └── FavoritesContext.jsx
│   ├── pages/               # Pages
│   │   ├── Home.jsx
│   │   ├── Teachers.jsx
│   │   └── Favorites.jsx
│   ├── firebase/            # Firebase config
│   │   └── firebase.js
│   └── styles/              # CSS files
│       ├── Home.css
│       ├── Teachers.css
│       ├── Favorites.css
│       ├── Header.css
│       ├── Modal.css
│       ├── TeacherCard.css
│       ├── AuthForms.css
│       └── BookingForm.css
├── public/                  # Static assets
│   └── images/
└── package.json
```

## 🎯 Features

### 1. Home Page
- Hero section with call-to-action
- Company statistics
- "Get Started" button redirects to Teachers page

### 2. Teachers Page
- Display 4 teacher cards initially
- "Load More" button for pagination
- Filter by language, level, and price
- Teacher cards with:
  - Avatar with online indicator
  - Name, languages, rating
  - Reviews (expandable with "Read more")
  - "Book trial lesson" button
  - Favorite heart icon

### 3. Favorites Page (Protected)
- Only for logged-in users
- Shows favorited teachers
- Persists using localStorage per user
- Empty state message when no favorites

### 4. Authentication
- Registration and login modals
- Form validation with yup
- Firebase Authentication integration
- Toast notifications for feedback

### 5. Booking System
- Modal form for booking trial lessons
- Full validation (name, email, phone)
- Success notifications
- Closes via X button, backdrop, or Esc key

## 🔐 Firebase Setup

### Database Structure:
Your Firebase Realtime Database should have this structure:

```json
{
  "teachers": [
    {
      "name": "Teacher Name",
      "surname": "Teacher Surname",
      "languages": ["Language1", "Language2"],
      "levels": ["A1 Beginner", "B1 Intermediate"],
      "rating": 4.8,
      "reviews": [
        {
          "reviewer_name": "Reviewer Name",
          "reviewer_rating": 5.0,
          "comment": "Great teacher!"
        }
      ],
      "price_per_hour": 30,
      "lessons_done": 100,
      "avatar_url": "https://example.com/avatar.jpg",
      "lesson_info": "Lesson description",
      "conditions": ["Condition 1", "Condition 2"],
      "experience": "Teaching experience description"
    }
  ]
}
```

### Database Rules:
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

## 🔗 Links

- **Live Demo**: [Add your Netlify/Vercel link here]
- **Repository**: https://github.com/habibecinar/LearnLingo
- **Figma Design**: https://www.figma.com/design/dewf5jVviSTuWMMyU3d8Mc/Learn-Lingo

## 📄 Technical Requirements

✅ React with Vite bundler  
✅ Firebase Auth & Database  
✅ Form validation (react-hook-form + yup)  
✅ Modal windows (X, backdrop, Esc)  
✅ Protected routes  
✅ Favorites with localStorage  
✅ Dynamic filtering  
✅ Semantic HTML  
✅ Responsive design  
✅ English language UI  

## 🚀 Deployment

### Build for Production:
```bash
npm run build
```

### Deploy to Netlify:
1. Sign up at [netlify.com](https://www.netlify.com)
2. Click "Add new site" → "Deploy manually"
3. Drag and drop the \`dist/\` folder
4. Configure environment variables for Firebase config

### Deploy to Vercel:
```bash
npm install -g vercel
vercel
```

### Deploy to GitHub Pages:
```bash
npm run build
npm run deploy
```

## 📱 Screenshots

### Home Page
- Hero section with engaging call-to-action
- Statistics showcase
- Modern, clean design

### Teachers Page
- Grid layout of teacher cards
- Advanced filtering options
- Load more functionality

### Favorites Page
- Personal collection of favorite teachers
- Quick access to saved profiles

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

---

**Built with ❤️ using React and Firebase**

© 2024 LearnLingo. All rights reserved.
