import { getColsClass, isMobile } from "@/utils";
import { useEffect, useState } from "react";

interface WorkCardProps {
    title: string;
    description: string;
    image: string;
    cols: number;
    onClick?: () => void;
    className?: string;
}

const WorkCard = ({ title, description, image, cols, onClick, className }: WorkCardProps) => {
    const [colsClass, setColsClass] = useState('col-span-12');

    useEffect(() => {
        setColsClass(getColsClass(cols, isMobile()));
    }, [cols]);

    return (
        <div className={`flex flex-col gap-6 ${colsClass} ${className}`}>
            <div className="w-full h-[415px] bg-black-tertiary rounded-[22px] cursor-pointer" onClick={onClick}>
                <img src={`/${image}`} alt="Thumbnail" className="w-full h-full object-cover rounded-[22px]" />
            </div>
            <div className="flex flex-col gap-2">
                <p className="text-[45px] text-white"><span className="cursor-pointer tracking-[-0.08em]" onClick={onClick}>{title}</span></p>
                <p className="text-[18px] text-white">{description}</p>
            </div>
        </div>
    );
}
 
export default WorkCard;
