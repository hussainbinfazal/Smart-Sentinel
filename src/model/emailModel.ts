import mongoose from "mongoose";

export interface IEmail {
    email: string,
    name: string,
    phone: number
}
const emailSchema = new mongoose.Schema<IEmail>({
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
},{timestamps: true});

const Email = mongoose.models.Email || mongoose.model("Email", emailSchema);
export default Email;