import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaApple } from "react-icons/fa";

export default function SignUpLogin() {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-200 p-4">
      {/* Placeholder images */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-gray-300 rounded-full" />
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-gray-300 rounded-full" />
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-gray-300 rounded-full" />
      
      <Card className="w-full max-w-md bg-white shadow-lg rounded-lg">
        <CardContent className="p-6 space-y-4">
          <h2 className="text-center text-xl font-bold">Sign Up / Log in</h2>
          <div className="grid grid-cols-2 gap-4">
            <Input placeholder="First Name" />
            <Input placeholder="Last Name" />
          </div>
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <div className="flex items-center gap-2">
            <Checkbox id="terms" />
            <label htmlFor="terms" className="text-sm">
              By clicking Sign Up you're confirming that you agree with our
              <a href="#" className="text-blue-500"> Terms and Conditions</a>.
            </label>
          </div>
          <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">Sign Up</Button>
          <Separator />
          <Button variant="outline" className="w-full">Log in</Button>
          <div className="flex items-center justify-center gap-4 mt-4">
            <FcGoogle className="text-2xl cursor-pointer" />
            <FaFacebook className="text-blue-600 text-2xl cursor-pointer" />
            <FaApple className="text-black text-2xl cursor-pointer" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
