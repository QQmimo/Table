import React from "react";
import { ITextboxProps } from "./ITextboxProps";
import { ITextboxState } from "./ITextboxState";
import { Utilities } from "Applications/Utilities";
import styles from "./Textbox.module.scss";

export class Textbox extends React.Component<ITextboxProps, ITextboxState> {
    constructor(props: Readonly<ITextboxProps>) {
        super(props);
        this.state = {
            label: this.props.label,
            text: this.props.text
        };
    }

    public componentDidUpdate(prevProps: Readonly<ITextboxProps>): void {
        const diff: Partial<ITextboxProps> | null = Utilities.getDiff<ITextboxProps>(prevProps, this.props);
        if (diff !== null) {
            this.setState({
                ...diff
            })
            console.log(diff);
        }
    }

    public render(): React.ReactNode {
        return (
            <div className={styles.textbox}>
                {
                    this.state.label
                        ? <label htmlFor={this.props.id}>{this.state.label}</label>
                        : null
                }
                <input
                    id={this.props.id}
                    type="text"
                    defaultValue={this.state.text}
                    onChange={this._onChange}
                    onKeyDown={this._onChanged}
                    onBlur={this._onBlur}
                >
                </input>
            </div>
        );
    }

    private _onUpdate = (value: string, actionUpdate: () => void): void => {
        this.setState(prevState => {
            if (prevState.text !== value) {
                return {
                    text: value
                };
            }
            return {};
        }, actionUpdate);
    }

    private _onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const value: string = e.currentTarget.value ?? "";
        this._onUpdate(value, () => {
            if (this.props.onChange) {
                this.props.onChange(value);
            }
        });
    }

    private _onChanged = (e: React.KeyboardEvent<HTMLInputElement>): void => {
        if (e.code === "Enter" || e.code === "NumpadEnter") {
            const value: string = e.currentTarget.value ?? "";
            this._onUpdate(value, () => {
                if (this.props.onChanged) {
                    this.props.onChanged(value);
                }
            });
        }
    }

    private _onBlur = (e: React.FocusEvent<HTMLInputElement>): void => {
        const value: string = e.currentTarget.value ?? "";
        this._onUpdate(value, () => {
            if (this.props.onChanged) {
                this.props.onChanged(value);
            }
        });
    }
}