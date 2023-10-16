'use client'

import React from "react";

const Button = ({ styles }) => {
    return (
        <button type="button" className={`py-4 px-6 bg-purple-gradient font-poppins font-meduim text-primary outline-none ${styles}`}>
            Get Started
        </button>
    )
}

export default Button