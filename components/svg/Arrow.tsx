export const Arrow = ({ ...props }) => (
    <svg
        width={102}
        height={102}
        fill="none"
        {...props}
    >
        <circle cx={51} cy={51} r={50.5} stroke="#D8DEE6" />
        <path
            fill="#fff"
            fillRule="evenodd"
            d="M71.62 41.897A2.38 2.38 0 0 1 74 44.276v25.38a2.38 2.38 0 0 1-4.759 0v-25.38a2.38 2.38 0 0 1 2.38-2.38ZM30.38 34.759a2.38 2.38 0 0 1 0-4.759H73.4L32.061 71.338a2.38 2.38 0 1 1-3.365-3.365L61.91 34.759H30.379Z"
            clipRule="evenodd"
        />
    </svg>
);
