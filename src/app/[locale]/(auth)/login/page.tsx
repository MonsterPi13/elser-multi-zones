"use client";

import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [currentView, setCurrentView] = useState<"login" | "register" | "forgot">("login");

  return (
    <div className="flex min-h-screen font-sans">
      <div
        className={`
          relative hidden overflow-hidden
          lg:flex lg:w-1/2
        `}
        style={{ backgroundColor: "#3F3FF3" }}
      >
        <div className="relative z-10 flex w-full flex-col justify-between px-12 py-12">
          <div className="flex items-center">
            <Image src="/logo.svg" alt="Elser.ai" width={151} height={44} />
          </div>

          <div className="flex flex-1 flex-col justify-center">
            <h2 className="mb-6 text-4xl leading-tight text-white">Effortlessly manage your team and operations.</h2>
            <p className="text-lg leading-relaxed text-white/90">
              Log in to access your CRM dashboard and manage your team.
            </p>
          </div>

          <div className="flex items-center justify-between text-sm text-white/70">
            <span>Copyright © 2025 Frello Enterprises LTD.</span>
            <span className={`
              cursor-pointer
              hover:text-white/90
            `}
            >
              Privacy Policy
            </span>
          </div>
        </div>
      </div>

      <div className={`
        flex w-full items-center justify-center bg-white p-8
        lg:w-1/2
      `}
      >
        <div className="w-full max-w-md space-y-8">
          <div className={`
            mb-8 text-center
            lg:hidden
          `}
          >
            <div
              className="mx-auto mb-3 flex h-8 w-8 items-center justify-center rounded-lg"
              style={{ backgroundColor: "#3F3FF3" }}
            >
              <div className="h-4 w-4 rounded-sm bg-white"></div>
            </div>
            <h1 className="text-xl font-semibold text-foreground">Frello</h1>
          </div>

          <div className="space-y-6">
            <div className="space-y-2 text-center">
              {currentView === "forgot" && (
                <Button
                  variant="ghost"
                  onClick={() => setCurrentView("login")}
                  className={`
                    absolute top-8 left-8 cursor-pointer p-2
                    hover:bg-gray-100
                  `}
                >
                  <ArrowLeft className="h-4 w-4" />
                </Button>
              )}
              <h2 className="text-3xl text-foreground">
                {currentView === "login" && "Welcome Back"}
                {currentView === "register" && "Create Account"}
                {currentView === "forgot" && "Reset Password"}
              </h2>
              <p className="text-muted-foreground">
                {currentView === "login" && "Enter your email and password to access your account."}
                {currentView === "register" && "Create a new account to get started with Frello."}
                {currentView === "forgot" && "Enter your email address and we'll send you a reset link."}
              </p>
            </div>

            <div className="space-y-4">
              {currentView === "register" && (
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium text-foreground">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    className={`
                      h-12 rounded-lg border-gray-200 bg-white shadow-none
                      focus:border-[#3F3FF3] focus:ring-0
                    `}
                  />
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="user@company.com"
                  className={`
                    h-12 rounded-lg border-gray-200 bg-white shadow-none
                    focus:border-[#3F3FF3] focus:ring-0
                  `}
                />
              </div>

              {currentView !== "forgot" && (
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm font-medium text-foreground">
                    Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter password"
                      className={`
                        h-12 rounded-lg border-gray-200 bg-white pr-10 shadow-none
                        focus:border-[#3F3FF3] focus:ring-0
                      `}
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className={`
                        absolute top-0 right-0 h-full cursor-pointer px-3 py-2
                        hover:bg-transparent
                      `}
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 text-muted-foreground" />
                      ) : (
                        <Eye className="h-4 w-4 text-muted-foreground" />
                      )}
                    </Button>
                  </div>
                </div>
              )}

              {currentView === "register" && (
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-sm font-medium text-foreground">
                    Confirm Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm password"
                      className={`
                        h-12 rounded-lg border-gray-200 bg-white pr-10 shadow-none
                        focus:border-[#3F3FF3] focus:ring-0
                      `}
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className={`
                        absolute top-0 right-0 h-full cursor-pointer px-3 py-2
                        hover:bg-transparent
                      `}
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-4 w-4 text-muted-foreground" />
                      ) : (
                        <Eye className="h-4 w-4 text-muted-foreground" />
                      )}
                    </Button>
                  </div>
                </div>
              )}

              {currentView === "login" && (
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="remember"
                      className="cursor-pointer rounded border-gray-300"
                    />
                    <Label
                      htmlFor="remember"
                      className="cursor-pointer text-sm text-muted-foreground"
                    >
                      Remember Me
                    </Label>
                  </div>
                  <Button
                    variant="link"
                    className="h-auto cursor-pointer p-0 text-sm"
                    style={{ color: "#3F3FF3" }}
                    onClick={() => setCurrentView("forgot")}
                  >
                    Forgot Your Password?
                  </Button>
                </div>
              )}
            </div>

            <Button
              className={`
                h-12 w-full cursor-pointer rounded-lg text-sm font-medium text-white shadow-none
                hover:opacity-90
              `}
              style={{ backgroundColor: "#3F3FF3" }}
            >
              {currentView === "login" && "Log In"}
              {currentView === "register" && "Create Account"}
              {currentView === "forgot" && "Send Reset Link"}
            </Button>

            {currentView !== "forgot" && (
              <>
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <Separator className="w-full" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-muted-foreground">
                      Or
                      {" "}
                      {currentView === "login" ? "Login" : "Sign Up"}
                      {" "}
                      With
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Button
                    variant="outline"
                    className={`
                      h-12 cursor-pointer rounded-lg border-gray-200 bg-white shadow-none
                      hover:bg-gray-50 hover:text-gray-900
                    `}
                  >
                    <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    Google
                  </Button>
                  <Button
                    variant="outline"
                    className={`
                      h-12 cursor-pointer rounded-lg border-gray-200 bg-white shadow-none
                      hover:bg-gray-50 hover:text-gray-900
                    `}
                  >
                    <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-.96 3.64-.82 1.57.06 2.75.63 3.54 1.51-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                    Apple
                  </Button>
                </div>
              </>
            )}

            <div className="text-center text-sm text-muted-foreground">
              {currentView === "login" && (
                <>
                  Don't Have An Account?
                  {" "}
                  <Button
                    variant="link"
                    className="h-auto cursor-pointer p-0 text-sm font-medium"
                    style={{ color: "#3F3FF3" }}
                    onClick={() => setCurrentView("register")}
                  >
                    Register Now.
                  </Button>
                </>
              )}
              {currentView === "register" && (
                <>
                  Already Have An Account?
                  {" "}
                  <Button
                    variant="link"
                    className="h-auto cursor-pointer p-0 text-sm font-medium"
                    style={{ color: "#3F3FF3" }}
                    onClick={() => setCurrentView("login")}
                  >
                    Sign In.
                  </Button>
                </>
              )}
              {currentView === "forgot" && (
                <>
                  Remember Your Password?
                  {" "}
                  <Button
                    variant="link"
                    className="h-auto cursor-pointer p-0 text-sm font-medium"
                    style={{ color: "#3F3FF3" }}
                    onClick={() => setCurrentView("login")}
                  >
                    Back to Login.
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
