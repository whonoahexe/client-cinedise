export const capitalizeFirstLetter = (string: string) => {
    if (string === "ui") return "UI";
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const getColsClass = (cols: number): string => {
    if (cols >= 1 && cols <= 12) {
        return `col-span-${cols}`;
    } else {
        return 'col-span-1';
    }
}
