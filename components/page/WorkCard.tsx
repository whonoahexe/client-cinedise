import { getColsClass } from "@/utils";

interface WorkCardProps {
    title: string;
    description: string;
    cols: number;
    onClick?: () => void;
    className?: string;
}

const WorkCard = ({ title, description, cols, onClick, className }: WorkCardProps) => {
    const colsClass = getColsClass(cols);

    return (
        <div className={`flex flex-col gap-6 ${colsClass} ${className}`}>
            <div className="w-full h-[415px] bg-black-tertiary rounded-[22px] cursor-pointer" onClick={onClick} />
            <div className="flex flex-col gap-2">
                <p className="text-[45px] text-white"><span className="cursor-pointer tracking-[-0.08em]" onClick={onClick}>{title}</span></p>
                <p className="text-[18px] text-white">{description}</p>
            </div>
        </div>
    );
}
 
export default WorkCard;
