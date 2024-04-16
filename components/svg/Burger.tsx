export const Burger = ({ ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={55}
        height={32}
        fill="none"
        {...props}
    >
        <path
            stroke="#FFA4AA"
            strokeLinecap="round"
            strokeWidth={3}
            d="M2 2h51M2 30h51M2 15.726h20.617M31.298 15.726H53"
        />
    </svg>
);
