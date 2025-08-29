import { Route, Routes } from 'react-router-dom';
import WelcomePage from './pages/welcome';
import ProtectedRoute from './components/ProtectedRoute';
import AuthenticationPage from './pages/AuthenticationPage';
import HomePage from './pages/home/HomePage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path='/welcome' element={<WelcomePage />} />
      <Route path='/learnmore' element={<WelcomePage />} />

      <Route
        path='/login'
        element={
          <ProtectedRoute requireAuth={false} requireOnboarding={true}>
            <AuthenticationPage />
          </ProtectedRoute>
        }
      />

      <Route
        path='/home'
        element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        }
      />
      <Route
        path='/'
        element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
