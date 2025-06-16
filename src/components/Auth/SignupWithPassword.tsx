"use client";
import { EmailIcon, PasswordIcon, UserIcon } from "@/assets/icons";
import Link from "next/link";
import React, { useState } from "react";
import InputGroup from "../FormElements/InputGroup";
import { Checkbox } from "../FormElements/checkbox";
import { signIn } from "next-auth/react";

export default function SignupWithPassword() {
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        repassword: "",
        remember: false,
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // You can remove this code block
        setLoading(true);

        console.log(data);

        setTimeout(() => {
            setLoading(false);
        }, 1000);
    };

    return (
        <form onSubmit={handleSubmit}>
            <InputGroup
                type="text"
                label="Full name"
                className="mb-4 [&_input]:py-[15px]"
                placeholder="Enter your name"
                name="name"
                handleChange={handleChange}
                value={data.name}
                icon={<UserIcon />}
            />
            
            <InputGroup
                type="email"
                label="Email"
                className="mb-4 [&_input]:py-[15px]"
                placeholder="Enter your email"
                name="email"
                handleChange={handleChange}
                value={data.email}
                icon={<EmailIcon />}
            />

            <InputGroup
                type="password"
                label="Password"
                className="mb-5 [&_input]:py-[15px]"
                placeholder="Enter your password"
                name="password"
                handleChange={handleChange}
                value={data.password}
                icon={<PasswordIcon />}
            />
            
            <InputGroup
                type="password"
                label="Re enter password"
                className="mb-5 [&_input]:py-[15px]"
                placeholder="Re enter password"
                name="repassword"
                handleChange={handleChange}
                value={data.repassword}
                icon={<PasswordIcon />}
            />

            <div className="mb-6 flex items-center justify-between gap-2 py-2 font-medium">
                <Checkbox
                    label="Remember me"
                    name="remember"
                    withIcon="check"
                    minimal
                    radius="md"
                    onChange={(e) =>
                        setData({
                            ...data,
                            remember: e.target.checked,
                        })
                    }
                />
            </div>

            <div className="mb-4.5">
                <button
                    type="submit"
                    className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-primary p-4 font-medium text-white transition hover:bg-opacity-90"
                >
                    Sign Up
                    {loading && (
                        <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-white border-t-transparent dark:border-primary dark:border-t-transparent" />
                    )}
                </button>
            </div>
        </form>
    );
}
