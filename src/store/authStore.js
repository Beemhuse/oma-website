import { create } from "zustand";
import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const useAuthStore = create((set) => ({
  email: cookies.get("auth_email") || null, // Initialize from cookie if available
  isAuthenticated: !!cookies.get("oma-token"),
  token: cookies.get("oma-token"),
  user: null, // Initialize user as null

  // Save email and authenticate user
  setEmail: (email) => {
    // Save email in cookies with options
    cookies.set("auth_email", email, {
      path: "/", // Available across the entire site
      maxAge: 60 * 60 * 24 * 7, // Cookie expires in 7 days
      secure: process.env.NODE_ENV === "production", // Use secure cookies in production
      sameSite: "strict", // Prevent cross-site request forgery
    });
    set({ email });
  },
  setToken: (token) => {
    // Save token in cookies with options
    cookies.set("oma-token", token, {
      path: "/", // Available across the entire site
      maxAge: 60 * 60 * 24 * 7, // Cookie expires in 7 days
      secure: process.env.NODE_ENV === "production", // Use secure cookies in production
      sameSite: "strict", // Prevent cross-site request forgery
    });
    set({ token, isAuthenticated: true });
  },
  // Save user details in the store
  setUser: (user) => {
    cookies.set("oma-user", user, {
      path: "/", // Available across the entire site
      maxAge: 60 * 60 * 24 * 7, // Cookie expires in 7 days
      secure: process.env.NODE_ENV === "production", // Use secure cookies in production
      sameSite: "strict", // Prevent cross-site request forgery
    });
    set({ user });
  },
  // Logout and clear all data
  logout: () => {
    cookies.remove("oma-token", { path: "/" }); // Remove cookie
    cookies.remove("oma-user", { path: "/" }); // Remove cookie
    window.location.href = "/";
    set({ email: null, token: null, user: null, isAuthenticated: false });
  },
}));
