import React from "react";
import IconClose from "../../assets/icons/close.svg";
import { Link } from "react-router-dom";

interface IPopup {
    name: string,
    children: React.ReactNode,
    onClose?: React.MouseEventHandler<HTMLAnchorElement>
}
export const Popup = ({name, children, onClose} : IPopup) => {
    return (
        <div className="bg-white w-80 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1]">
            <div className="py-2 px-4">
                <div className="h-10 flex items-center justify-between border-b border-b-slate-300 mb-2">
                    <h3 className="text-xl">{name.toUpperCase()}</h3>
                    <Link to="/users" onClick={onClose}>
                        <img className="w-4 h-4" src={IconClose} alt="Exit" />
                    </Link>
                </div>
                {children}
            </div>
            <div className="bg-slate-300 py-1 px-4">
                <Link to="/users" className="block w-fit bg-slate-400 px-5 py-2 rounded-md text-sm border border-slate-100 hover:bg-white transition-colors"
                        onClick={onClose}>
                    BACK
                </Link>
            </div>
        </div>

    )
}