import { isAdmin } from "../config/Admin";
import AdminLayout from "./AdminLayout";
import MainLayout from "./MainLayout";

export const Layout = isAdmin ? AdminLayout : MainLayout;