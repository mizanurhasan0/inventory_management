import Btn from "../btn/Btn";
import "./drawer.css";
import { Close } from "@/assets";

export default function Drawer({ ref }) {
    // const openDrawer = () => {
    //     if (ref.current) {
    //         ref.current.classList.add("open");
    //         // overlayRef.current.classList.add("visible");
    //     }
    // };

    const onClose = () => {
        if (ref.current) {
            ref.current.classList.remove("open");
            // overlayRef.current.classList.remove("visible");
        }
    };

    return (
        <div ref={ref} className="drawer fixed top-0 right-[0%] w-80 h-screen z-50 bg-white transform   
             translate-x-full">
            <div className="flex flex-col h-full">
                {/* 1st part */}
                <div className="flex justify-between p-2">
                    <h1 className="text-2xl">Your Cart</h1>
                    <Close className="w-7 h-7 cursor-pointer" onClick={onClose} />
                </div>
                {/* 2nd part */}
                <div className="py-5 overflow-auto flex-1 p-2">
                    {/* <CartItem /> */}
                    card in here
                </div>
                {/* 3rd part */}
                <div className="border-t-2 border-green-600 border-opacity-50 p-2" onClick={() => push('/')}>
                    <div className="flex items-center justify-between py-2">
                        <p className="text-2xl font-medium">Subtotal</p>
                        <p>25.00 Take</p>
                    </div>
                    <Btn className="text-center w-full flex  justify-center bg-green-800 text-white">
                        Checkout
                    </Btn>
                </div>
            </div>
        </div>
    );
};