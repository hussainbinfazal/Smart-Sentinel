import { NextResponse } from "next/server";
import Email from "@/model/emailModel";
import { connectDB } from "@/config/db";


export async function POST(request) {
    try {
        await connectDB();
        const { email, name, phone } = await request.json();
        const emailData = new Email({ email, name, phone });
        await emailData.save();
        return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Failed to send email!" }, { status: 500 });
    }
}