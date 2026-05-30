import { NextResponse } from "next/server";
import Email from "@/model/emailModel";
import { connectDB } from "@/config/db";
import { logger } from "@/config/logger";
import { validateEmail, validatePhoneNumber } from "@/utils/validator";




export async function POST(request:Request) {
    try {
        await connectDB();
        const { email, name, phone } = await request.json();
        if(!email){
            logger.warn("email is required")
        }
        if (!validateEmail(email)) {
            return NextResponse.json({ message: 'Invalid email format' }, { status: 400 });
        }
        if (!validatePhoneNumber(phone)) {
            return NextResponse.json({ message: 'Invalid email format' }, { status: 400 });
        }
        const emailData = new Email({ email, name, phone });
        await emailData.save();
        logger.info("Email saved successfully")
        return NextResponse.json({ message: "Email saved successfully!" }, { status: 200 });
    } catch (error:unknown) {
        const message = error instanceof Error ? error.message : "Error in saving email"
       logger.error("Failed to send Email",{message})
        return NextResponse.json({ message: "Failed to saved email!" }, { status: 500 });
    }
}