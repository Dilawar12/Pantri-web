import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About";
import Home from "../Pages/Home";
import Layout2 from "../Layout/Layout2";
import Home2 from "../Pages/Home2";
import Layout3 from "../Layout/Layout3";
import Home3 from "../Pages/Home3";
import Team from "../Pages/Team";
import TeamDetails from "../Pages/TeamDetails";
import Testimonial from "../Pages/Testimonial";
import ProjectDetails from "../Pages/ProjectDetails";
import PricingPage from "../Pages/PricingPage";
import FaqPage from "../Pages/FaqPage";
import Contact from "../Pages/Contact";
import Services from "../Pages/Services";
import CartToTable from "../Pages/CartToTable";
import Blog from "../Pages/Blog";
import BlogSidebar from "../Pages/BlogSidebar";
import BlogDetails from "../Pages/BlogDetails";
import Project from "../Pages/Project";
import LaunderyPickup from "../Pages/LaunderyPickup";
import HomeOrganizing from "../Pages/HomeOrganizing";
import DashboardLayout from "../Layout/dashboardLayout";
import Dashboard from "../Pages/Dashboard";
import DashboardViewJobs from "../Pages/DashboardViewJobs";
import DashboardEarnings from "../Pages/DashboardEarnings";
import DashboardPayment from "../Pages/DashboardPayment";
import DashboardCustomers from "../Pages/DashboardCustomers";
import DashboardLead from "../Pages/DashboardLead";
import DashboardProjects from "../Pages/DashboardProject";
import RecipeSearch from "../Pages/Recipes";
import RecipesDetail from "../Pages/RecipesDetail";
// import SingupModal from "../Components/Modal/SingupModal";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout3 />,
    children: [
      { index: true, element: <Home3 /> },
      { path: "about", element: <About /> },
      { path: "team", element: <Team /> },
      { path: "team/team-details", element: <TeamDetails /> },
      { path: "testimonial", element: <Testimonial /> },
      { path: "project", element: <Project /> },
      { path: "project/project-details", element: <ProjectDetails /> },
      { path: "service", element: <Services /> },
      { path: "service/carttotable", element: <CartToTable /> },
      { path: "service/laundery-pickup", element: <LaunderyPickup /> },
      { path: "service/home-organizing", element: <HomeOrganizing /> },
      { path: "pricing", element: <PricingPage /> },
      { path: "faq", element: <FaqPage /> },
      { path: "blog", element: <Blog /> },
      { path: "blog/blog-details", element: <BlogDetails /> },
      { path: "blog-sidebar", element: <BlogSidebar /> },
      { path: "contact", element: <Contact /> },
      { path: "recipe", element: <RecipeSearch /> },
      { path: "recipeDetails", element: <RecipesDetail /> },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "view-jobs", element: <DashboardViewJobs /> },
      { path: "earnings", element: <DashboardEarnings /> },
      { path: "payment", element: <DashboardPayment /> },
      { path: "customers", element: <DashboardCustomers /> },
      { path: "leads", element: <DashboardLead /> },
      { path: "projects", element: <DashboardProjects /> },
    ],
  }
])

