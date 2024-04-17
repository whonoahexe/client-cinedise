interface WorkContainerProps {
    children: React.ReactNode;
}

const WorkContainer = ({ children }: WorkContainerProps) => {
    return (
        <div className="relative w-full pb-12">
            <div className="grid grid-cols-1 gap-6 mx-[58px] h-full sm:grid-cols-12">
                {children}
            </div>
        </div>
    );
}
 
export default WorkContainer;
