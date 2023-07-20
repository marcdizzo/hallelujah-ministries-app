import './App.css';
import Layout from './components/layout';
import About from './pages/about';
import Home from './pages/home';
import {  Route, Routes, Navigate } from 'react-router-dom';
import Sermons from './pages/sermons';
import Devotionals from './pages/devotionals';
import ContactUs from './pages/contactus';
import RtlLayout from "layouts/rtl";
import AdminLayout from "layouts/admin";
import AuthLayout from "layouts/auth";
import Sermon from 'pages/sermon';
import Devotional from 'pages/devotional';
import ScrollToTop from 'components/ScrollToTop';
import SignUp from 'pages/signup';
import SignIn from 'pages/signin';
import Blog from 'pages/blog';

function App() {
  return(
    <>
    <ScrollToTop />
    <Routes>
        <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/sermons' element={<Sermons />} />
            <Route path='/devotions' element={<Devotionals />} />
            <Route path='/contact' element={<ContactUs />} />
            <Route path="/sermons/:id" element={<Sermon />} />
            <Route path="/devotions/:id" element={<Devotional />} />
            <Route path="/blogs/:id" element={<Blog />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
         </Route>
         <Route path="auth/*" element={<AuthLayout />} />
         <Route path="admin/*" element={<AdminLayout />} />
         <Route path="rtl/*" element={<RtlLayout />} />
         <Route path="/dashboard" element={<Navigate to="/admin" replace />} />
        </Routes>
    </>
    
   
  );
}

export default App;
