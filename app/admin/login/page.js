"use client";
import LoginButton from '@/components/LoginButton'


export default function Login() {
    return (
        <div className="container mx-auto my-10 w-full max-w-l">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <LoginButton />
            </div>
        </div>
    )
};