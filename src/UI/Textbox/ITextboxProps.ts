export interface ITextboxProps {
    id: string;
    label?: string;
    text?: string;
    onChange?: (text: string) => void;
    onChanged?: (text: string) => void;
}