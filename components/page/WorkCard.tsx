import { getColsClass } from "@/utils";

interface WorkCardProps {
    title: string;
    description: string;
    cols: number;
    className?: string;
}

const WorkCard = ({ title, description, cols, className }: WorkCardProps) => {
    const colsClass = getColsClass(cols);

    return (
        <div className={`flex flex-col gap-6 ${colsClass} ${className}`}>
            <div className="w-full h-[415px] bg-black-tertiary rounded-[22px]" />
            <div className="flex flex-col gap-2">
                <p className="text-[45px] text-white">{title}</p>
                <p className="text-[18px] text-white">{description}</p>
            </div>
        </div>
    );
}
 
export default WorkCard;
