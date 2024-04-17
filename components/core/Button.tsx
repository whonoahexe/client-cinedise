interface ButtonProps {
    color?: 'primary' | 'secondary';
    isActive?: boolean;
    text: string;
    onClick?: () => void;
}

const Button = ({ color = 'primary', isActive = true, text, onClick }: ButtonProps) => {
    const activePrimary = "bg-accent-primary px-6 py-3 rounded-full"
    const activeSecondary = "bg-white-primary px-6 py-3 rounded-full"
    const inactive = "px-6 py-3 rounded-full"

    const buttonClass = isActive
        ? color === 'primary'
            ? activePrimary
            : activeSecondary
        : inactive;

    return (
        <button className={buttonClass} onClick={onClick}>
            <span className={isActive ? "text-black-primary text-[28px] leading-9 tracking-[-0.08em]" : "text-white-primary text-[28px] leading-9 tracking-[-0.08em]"}>{text}</span>
        </button>
    );
}
 
export default Button;
