export default function TextArea({ className = "", type = "text", ...props }) {

    return (
        <textarea
            type={type}
            className={`flex  w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground 
            outline-none text-cgray focus:border-cgreen disabled:cursor-not-allowed disabled:opacity-50 ${className}`}

            {...props}
        />
    )
}