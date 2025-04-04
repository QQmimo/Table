export class Utilities {
    public static getDiff<T>(origin: T, edited: T): Partial<T> | null {
        const diff: Partial<T> = {};
        const keys: (keyof T)[] = Object.keys(origin as { new(): T; }) as (keyof T)[];
        let foundedDiff: boolean = false;
        keys.forEach(key => {
            if (typeof origin[key] === 'object') {
                if ((origin[key] as Array<unknown>)?.length !== undefined
                    || (edited[key] as Array<unknown>)?.length !== undefined) {
                    const arrayDiff: Partial<typeof key> | null = this.getDiff<typeof key>(origin[key] as typeof key, edited[key] as typeof key);
                    if ((origin[key] as Array<unknown>)?.length !== (edited[key] as Array<unknown>)?.length
                        || arrayDiff !== null) {
                        foundedDiff = true;
                        diff[key] = edited[key];
                    }
                } else {
                    const objectDiff: Partial<typeof key> | null = this.getDiff<typeof key>(origin[key] as typeof key, edited[key] as typeof key);
                    if (objectDiff !== null) {
                        foundedDiff = true;
                        diff[key] = edited[key];
                    }
                }
            }
            else if (origin[key] !== edited[key]) {
                foundedDiff = true;
                diff[key] = edited[key];
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