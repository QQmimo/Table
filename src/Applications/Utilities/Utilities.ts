export class Utilities {
    public static getDiff<T>(origin: T, edited: T): Partial<T> | null {
        const diff: Partial<T> = {};
        const keys: string[] = Object.keys(origin as { new(): T; });
        let foundedDiff: boolean = false;
        keys.forEach(key => {
            if (origin[key as keyof T] !== edited[key as keyof T]) {
                foundedDiff = true;
                diff[key as keyof T] = edited[key as keyof T];
            }
        });

        if (foundedDiff === false) {
            return null;
        }

        return diff;
    }

    public static guid(): string {
        const symbols: string = "0123456789ABCDEF";
        const mask: string = "xxxxxxxx-xxxx-4xxx-xxxx-xxxxxxxxxxxx";
        return mask.replace(/x/g, c => symbols.charAt(Math.random() * symbols.length));
    }
}