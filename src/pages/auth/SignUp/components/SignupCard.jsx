import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaApple } from "react-icons/fa";

export default function SignUpCard() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#EBEBEB]">
      <Card className="w-[1299px] h-[600px] bg-[#EBEBEB]">
        <CardContent className="h-full p-6 relative">
          <h2 className="text-2xl font-bold text-center mb-6 mt-10">Sign Up / Log in</h2>
          

          <div className="grid grid-cols-2 gap-4 max-w-4xl mx-auto">
            <div>
              <Input 
                type="text" 
                placeholder="First Name" 
                className="w-full h-12 bg-white border-[#031749] placeholder:text-[#031749] px-4"
              />
            </div>
            <div>
              <Input 
                type="text" 
                placeholder="Last Name" 
                className="w-full h-12 bg-white border-[#031749] placeholder:text-[#031749] px-4"
              />
            </div>
            
            <div>
              <Input 
                type="email" 
                placeholder="Email" 
                className="w-full h-12 bg-white border-[#031749] placeholder:text-[#031749] px-4"
              />
            </div>
            <div className="relative flex items-center">
              <div className="absolute left-4 z-10 flex items-center h-12">
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="flex items-center justify-center"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-[#031749]" />
                  ) : (
                    <Eye className="h-5 w-5 text-[#031749]" />
                  )}
                </button>
              </div>
              <Input 
                type={showPassword ? "text" : "password"}
                placeholder="Password" 
                className="w-full h-12 bg-white border-[#031749] placeholder:text-[#031749] pl-12 pr-4"
              />
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-6">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label 
                htmlFor="terms" 
                className="text-[14px] text-[#031749] font-normal leading-[150%] font-inter"
              >
                By clicking Sign Up you're confirming that you agree with our Terms and Conditions.
              </label>
            </div>

            <div className="flex justify-between mt-4">
              <Button 
                className="flex h-12 px-8 py-3 justify-center items-center gap-2 rounded-[500px] border border-[#FFB200] bg-[#7642C8] hover:bg-[#7642C8]/90 w-[416px]"
              >
                Sign Up
              </Button>
              <Button 
                className="flex h-12 w-[416px] px-8 justify-center items-center gap-2 rounded-[500px] border border-[#7642C8] bg-transparent hover:bg-[#7642C8]/10 text-[#031749]"
              >
                Log in
              </Button>
            </div>

            <div className="relative flex items-center justify-center mt-6 max-w-4xl">
              <div className="w-full h-[1px] bg-[#A7A7A7]"></div>
              <span className="absolute bg-[#EBEBEB] px-4 text-[#A7A7A7]">Or</span>
            </div>

            {/* Social Media Buttons */}
            <div className="flex justify-center space-x-4 mt-6">
              <button className="w-[46px] h-[46px] rounded-full bg-white flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                <FcGoogle className="w-6 h-6" />
              </button>
              <button className="w-[46px] h-[46px] rounded-full bg-white flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                <FaFacebook className="w-6 h-6 text-[#1877F2]" />
              </button>
              <button className="w-[46px] h-[46px] rounded-full bg-white flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                <FaApple className="w-6 h-6" />
              </button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
