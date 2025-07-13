import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Loader2, Lock, Mail, MessageSquare } from "lucide-react";
import AuthImagePattern from "../components/AuthImagePattern";
import { loginUser } from "../Api/auth";
import { useAuthStore } from "../store/useAuthStore";
import { toast, Toaster } from "react-hot-toast"; 

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsLoggingIn(true);

  try {
    const res = await loginUser(formData); // هذا بيرجع { token, user }

    localStorage.setItem("token", res.token);

    login(res.user);

    toast.success("Logged in successfully!");
    navigate("/");
  } catch (err) {
    toast.error(err?.response?.data?.message || "Login failed");
  } finally {
    setIsLoggingIn(false);
  }
};
  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-purple-950 text-purple-100">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="flex flex-col justify-center items-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center mb-8">
            <div className="flex flex-col items-center gap-2 group">
              <div className="w-12 h-12 rounded-xl bg-purple-700/30 flex items-center justify-center group-hover:bg-purple-600/30 transition-colors">
                <MessageSquare className="w-6 h-6 text-purple-300" />
              </div>
              <h1 className="text-2xl font-bold mt-2 text-purple-100">Welcome Back</h1>
              <p className="text-purple-400">Sign in to your account</p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium text-purple-200">Email</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-purple-400" />
                </div>
                <input
                  type="email"
                  className="input input-bordered w-full pl-10 bg-purple-900 text-purple-100 border-purple-700 placeholder-purple-400"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium text-purple-200">Password</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-purple-400" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  className="input input-bordered w-full pl-10 bg-purple-900 text-purple-100 border-purple-700 placeholder-purple-400"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-purple-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-purple-400" />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="btn w-full bg-purple-700 hover:bg-purple-800 text-white border-0"
              disabled={isLoggingIn}
            >
              {isLoggingIn ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Loading...
                </>
              ) : (
                "Sign in"
              )}
            </button>
          </form>

          <div className="text-center">
            <p className="text-purple-400">
              Don’t have an account?{" "}
              <a href="/SignUpPage" className="underline text-purple-300 hover:text-purple-100 transition">
                Create account
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center p-6 sm:p-12">
        <AuthImagePattern
          title="Welcome back!"
          subtitle="Sign in to continue your conversations and catch up with your messages."
        />
      </div>
    </div>
  );
};

export default LoginPage;
