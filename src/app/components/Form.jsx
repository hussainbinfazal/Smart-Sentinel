"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { z } from "zod";
import axios from "axios";
import { toast } from "sonner";
import { Shield } from "lucide-react";

export const formSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name is too long"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .min(10, "Phone must be 10 digits")
    .max(10, "Phone must be 10 digits")
    .regex(/^\d+$/, "Phone must contain only numbers"),
});
const Form = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [errors, setErrors] = useState({});

  const submitEmail = async () => {
    const emailData = {
      email,
      name,
      phone,
    };
    try {
      const response = await axios.post("/api/submitEmail", emailData);
      toast.success(
        "Security consultation request sent successfully! Our team will contact you within 24 hours."
      );
      setEmail("");
      setName("");
      setPhone("");
    } catch (error) {
      toast.error("Failed to send email!");
    }
  };
  const handleSubmit = async (e) => {
    console.log("submit");
    e.preventDefault();
    const result = formSchema.safeParse({ name, email, phone });
    if (!result.success) {
      const fieldErrors = {};
      result.error.errors.forEach((err) => {
        fieldErrors[err.path[0]] = err.message;
      });
      setErrors(fieldErrors);
    } else {
      setErrors({});
      submitEmail();
    }
  };
  return (
    <div className="max-w-screen-2xl w-full dark:bg-black min-h-[300px] bg-white flex flex-col items-center justify-center p-4 ">
      <div className="w-full flex flex-col items-center justify-center gap-16">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white uppercase">
              <span className="font-bold text-green-800">Secure</span> Your Property Today
            </h2>
          </div>
          <p className="text-lg text-black dark:text-white mb-2">
            Ready to protect what matters most? Get a <span className="font-bold text-green-800 curs">Free</span> security assessment
            from our certified professionals.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Fill out the form below or call us directly for immediate
            assistance.
          </p>
        </div>
        <Card className="w-full max-w-sm  md:max-w-full dark:bg-black bg-white">
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="flex md:flex-row justify-between flex-col gap-6">
                <div className="grid gap-3 md:w-1/3">
                  <Label htmlFor="email">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value.trim())}
                    required
                    className={
                      "dark:bg-black border-t-0 border-r-0 border-l-0 rounded-none outline-none  border-b-2 "
                    }
                  />
                  {errors.name && (
                    <span className="text-red-500 text-xs">{errors.name}</span>
                  )}
                </div>
                <div className="grid gap-3 md:w-1/3">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value.trim())}
                    required
                    className={
                      "dark:bg-black border-t-0 border-r-0 border-l-0 rounded-none outline-none  border-b-2 focus:outline-none  focus:shadow-none focus:ring-0 focus:border-b-green-800"
                    }
                  />
                  {errors.email && (
                    <span className="text-red-500 text-xs">{errors.email}</span>
                  )}
                </div>
                <div className="grid gap-3 md:w-1/3">
                  <Label htmlFor="email">Phone</Label>
                  <Input
                    id="number"
                    type="text"
                    placeholder="m@example.com"
                    required
                    maxLength={10}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.trim())}
                    className={
                      "dark:bg-black border-t-0 border-r-0 border-l-0 rounded-none outline-none  border-b-2 focus:border-0 focus:shadow-none"
                    }
                  />
                  {errors.phone && (
                    <span className="text-red-500 text-xs">{errors.phone}</span>
                  )}
                </div>
              </div>
              <Button type="submit" className="w-full bg-green-800 dark:bg-green-800 mt-6 text-white " disabled={name === "" || email === "" || phone === ""}>
                Get Free Security Assessment
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex-col gap-2"></CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Form;
