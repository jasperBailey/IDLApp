"use client";

import { ChangeEventHandler, useState } from "react";

interface TextInputProps {
    placeholder?: string;
    className?: string;
    onChange?: ChangeEventHandler<HTMLTextAreaElement>;
    id?: string;
}

const TextInput = ({
    placeholder = "input",
    className = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",

    id,
}: TextInputProps) => {
    const [state, setState] = useState<String>("");

    const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        console.log("hi");
        const value = event.target.value;
        setState(value);
    };

    console.log("hi");
    return (
        <>
            <textarea
                id={id}
                className={className}
                placeholder={placeholder}
                onChange={onChange}
            ></textarea>
            <p>{state}</p>
        </>
    );
};

export default TextInput;
