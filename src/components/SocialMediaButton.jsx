import React from "react";
import Facebook from '../../src/assets/SocialMediaButton/Facebook_Logo.png'
import Apple from '../../src/assets/SocialMediaButton/Apple_Logo.png'
import Google from '../../src/assets/SocialMediaButton/Google_Logo.png'
import { motion } from "framer-motion";

const SocialMediaButton = ({platform}) => {
    const platformData = {
        google: {
            label: "Đăng nhập với Google",
            background: "bg-[#333333]", 
            icon: Google, 
            textColor: "text-[#FFFFFF]"
        },
        facebook: {
            label: "Đăng nhập với Facebook",
            background: "bg-[#1877F2]", 
            icon: Facebook,
            textColor: "text-[#FFFFFF]"
        },
        apple: {
            label: "Đăng nhập với Apple",
            background: "bg-[#000000]", 
            icon: Apple,
            textColor: "text-[#FFFFFF]"
        },
    };

    const { label, background, icon, textColor } = platformData[platform] || {};

    if (!label || !background || !icon || !textColor) {
        return null; 
    }

    return (
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={`flex flex-row gap-4 justify-center items-center p-4 rounded-lg w-[70%] cursor-pointer ${background} ${textColor}`}>
            <img src={icon} alt="logo" />
            <p className="font-bold" >{label}</p>
        </motion.div>
            
    );
};

export default SocialMediaButton;
