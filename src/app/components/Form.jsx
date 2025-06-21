'use client'

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
      toast.success("Email sent successfully!");
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
    <div className="max-w-screen-2xl w-full dark:bg-black min-h-[300px] bg-white flex flex-col items-center justify-center p-4">
      <div>
        <Card className="w-full max-w-sm  md:w-full bg-black">
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="email">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value.trim())}
                    required
                    className={
                      "dark:bg-black border-t-0 border-r-0 border-l-0 rounded-none outline-none  border-b-2"
                    }
                  />
                  {errors.name && (
                    <span className="text-red-500 text-xs">{errors.name}</span>
                  )}
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value.trim())}
                    required
                    className={
                      "dark:bg-black border-t-0 border-r-0 border-l-0 rounded-none outline-none  border-b-2"
                    }
                  />
                  {errors.email && (
                    <span className="text-red-500 text-xs">{errors.email}</span>
                  )}
                </div>
                <div className="grid gap-3">
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
                      "dark:bg-black border-t-0 border-r-0 border-l-0 rounded-none outline-none  border-b-2"
                    }
                  />
                  {errors.phone && (
                    <span className="text-red-500 text-xs">{errors.phone}</span>
                  )}
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button type="submit" className="w-full" >
              Login
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Form;
