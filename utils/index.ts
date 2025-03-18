export const capitalizeFirstLetter = (string: string) => {
    if (string === "ui") return "UI";
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const getColsClass = (cols: number, isMobile: boolean): string => {
    if (isMobile) {
        return 'col-span-12';
    } else if (cols >= 1 && cols <= 12) {
        return `col-span-${cols}`;
    } else {
        return 'col-span-1';
    }
}

export const titleToSlug = (title: string): string => {
    return title.toLowerCase().replace(/ /g, '-');
}

export const slugToTitle = (slug: string): string => {
    return slug.split('-').map(word => capitalizeFirstLetter(word)).join(' ');
}

export const isMobile = (): boolean => {
    if (typeof window !== "undefined") {
        return window.innerWidth <= 768;
    }
    return false;
};
