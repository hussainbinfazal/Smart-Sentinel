import { NextResponse } from "next/server";
import emailModel from "@/models/emailModel";
import { connectDB } from "@/config/db";


export async function POST(request) {
    try {
        await connectDB();
        const { email, name, phone } = await request.json();
        const emailData = new emailModel({ email, name, phone });
        await emailData.save();
        return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Failed to send email!" }, { status: 500 });
    }
}