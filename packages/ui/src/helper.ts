
const solidCls = {
    default: "bg-default text-default-foreground",
    primary: "bg-primary text-primary-foreground",
    secondary: "bg-secondary text-secondary-foreground",
    success: "bg-success text-success-foreground",
    warning: "bg-warning text-warning-foreground",
    error: "bg-error text-error-foreground",
    foreground: "bg-foreground text-background",
} as const;

const shadowCls = {
    default: "shadow-lg shadow-default/50 bg-default text-default-foreground",
    primary: "shadow-lg shadow-primary/40 bg-primary text-primary-foreground",
    secondary: "shadow-lg shadow-secondary/40 bg-secondary text-secondary-foreground",
    success: "shadow-lg shadow-success/40 bg-success text-success-foreground",
    warning: "shadow-lg shadow-warning/40 bg-warning text-warning-foreground",
    error: "shadow-lg shadow-error/40 bg-error text-error-foreground",
    foreground: "shadow-lg shadow-foreground/40 bg-foreground text-background",
} as const;

const borderedCls = {
    default: "border bg-transparent border-default text-foreground",
    primary: "border bg-transparent border-primary text-primary",
    secondary: "border bg-transparent border-secondary text-secondary",
    success: "border bg-transparent border-success text-success",
    warning: "border bg-transparent border-warning text-warning",
    error: "border bg-transparent border-error text-error",
    foreground: "border bg-transparent border-foreground text-foreground",
} as const;

const flatCls = {
    default: "bg-default/40 text-default-foreground",
    primary: "bg-primary/20 text-primary",
    secondary: "bg-secondary/20 text-secondary",
    success: "bg-success/20 text-success-600 dark:text-success",
    warning: "bg-warning/20 text-warning-600 dark:text-warning",
    error: "bg-error/20 text-error dark:text-error-500",
    foreground: "bg-foreground/10 text-foreground",
} as const;

const fadedCls = {
    default: "border-default bg-default-100 text-default-foreground",
    primary: "border-default bg-default-100 text-primary",
    secondary: "border-default bg-default-100 text-secondary",
    success: "border-default bg-default-100 text-success",
    warning: "border-default bg-default-100 text-warning",
    error: "border-default bg-default-100 text-error",
    foreground: "border-default bg-default-100 text-foreground",
} as const;

const lightCls = {
    default: "bg-transparent text-default-foreground",
    primary: "bg-transparent text-primary",
    secondary: "bg-transparent text-secondary",
    success: "bg-transparent text-success",
    warning: "bg-transparent text-warning",
    error: "bg-transparent text-error",
    foreground: "bg-transparent text-foreground",
} as const;

const ghostCls = {
    default: "border-default text-default-foreground hover:!bg-default",
    primary: "border-primary text-primary hover:!text-primary-foreground hover:!bg-primary",
    secondary: "border-secondary text-secondary hover:text-secondary-foreground hover:!bg-secondary",
    success: "border-success text-success hover:!text-success-foreground hover:!bg-success",
    warning: "border-warning text-warning hover:!text-warning-foreground hover:!bg-warning",
    error: "border-error text-error hover:!text-error-foreground hover:!bg-error",
    foreground: "border-foreground text-foreground hover:!bg-foreground",
} as const;

const radiusCls = {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
    none: "rounded-none",
} as const;


export const colorVariants = {
    solidCls,
    shadowCls,
    borderedCls,
    flatCls,
    fadedCls,
    lightCls,
    ghostCls,
    radiusCls
};


export const getVariantKey = (key: any) => {
    const keys  = {
        solidCls: 'solid',
        borderedCls: 'outline',
    } as any;
    return keys[key] || key;
};

/**
 * A function that generates variants based on the input object and variants string.
 */
export const getVariantsTheme = <T extends Record<string, Record<string, string>>>(obj: T = colorVariants) => {
    const variants = Object.keys(obj).reduce((acc, key) => {
        const themes = Object.keys(obj[key]);
        const themeVariants = themes.map((theme) => {
            return {
                variant: getVariantKey(key),
                theme,
                className: obj[key][theme],
            };
        });
        return acc.concat(themeVariants);
    }, []);

    console.log(variants);
    return variants;
};

