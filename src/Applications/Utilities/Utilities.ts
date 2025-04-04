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
}