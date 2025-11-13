import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

interface PhoneButtonProps {
    showIcon?: boolean;
    children: React.ReactNode;
    phoneNumber: string;
    backgroundColor?: string;
    textColor?: string;
    iconColor?: string;
    className?: string;
}

const PhoneButton: React.FC<PhoneButtonProps> = ({ 
    showIcon = true, 
    children, 
    phoneNumber,
    backgroundColor = '#2563EB',
    textColor = '#FFFFFF',
    iconColor = '#FFFFFF',
    className = ''
}) => {
    return (
        <a
            href={`tel:${phoneNumber}`}
            className={`flex items-center justify-center gap-6 pl-12 pr-14 py-4 rounded-lg shadow-md ${className}`}
            style={{ backgroundColor, color: textColor }}
        >
            {showIcon && (
                <div className="animate-[ring_1s_ease-in-out_infinite]">
                    <FaPhoneAlt size={20} color={iconColor} />
                </div>
            )}
            <span className="font-extrabold text-lg">{children}</span>
        </a>
    );
};

export default PhoneButton;
