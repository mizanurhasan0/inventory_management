
import React from 'react'
// import { PlusIcon, DownloadIcon, FileIcon, Cross1Icon, UpdateIcon, InfoCircledIcon } from "@radix-ui/react-icons";

// const choiceIcon = { "plus": <PlusIcon />, "download": <DownloadIcon />, "save": <FileIcon />, "cross": <Cross1Icon />, "update": <UpdateIcon />, "details": <InfoCircledIcon /> }

export default function Btn({ children, type = "button", className = "", Icon = "", ...props }) {
    return (
        <button type={type} className={`flex items-center space-x-2 border border-green_base rounded-md px-4 py-2 transition-all duration-200 ${className}`} {...props}>
            <p>{children}</p>
            {/* {choiceIcon[Icon]} */}
        </button>
    )
}
