import { ISelectItem } from "./ISelectItem";

export interface ISelectProps {
    id: string;
    label?: string;
    options: ISelectItem[];
    selectedKey?: string;
    onChanged?: (key: string, text: string) => void;
}