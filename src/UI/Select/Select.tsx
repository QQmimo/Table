import React from "react";
import { ISelectProps } from "./ISelectProps";
import { ISelectState } from "./ISelectState";
import { Utilities } from "Applications/Utilities";
import styles from "./Select.module.scss";

export class Select extends React.Component<ISelectProps, ISelectState> {
    constructor(props: Readonly<ISelectProps>) {
        super(props);
        this.state = {
            label: this.props.label
        };
    }

    public componentDidUpdate(prevProps: Readonly<ISelectProps>): void {
        const diff: Partial<ISelectProps> | null = Utilities.getDiff<ISelectProps>(prevProps, this.props);
        if (diff !== null) {
            this.setState({
                ...diff
            })
        }
    }

    public render(): React.ReactNode {
        return (
            <div className={styles.select}>
                {
                    this.state.label
                        ? <label htmlFor={this.props.id}>{this.state.label}</label>
                        : null
                }
                <select
                    id={this.props.id}
                    onChange={this._onChange}
                >
                    {
                        this.props.options.map(item =>
                        (<option
                            key={item.key}
                            value={item.key}
                        >
                            {item.text}
                        </option>)
                        )
                    }
                </select>
            </div>
        );
    }

    private _onUpdate = (key: string, actionUpdate: () => void): void => {
        this.setState(prevState => {
            if (prevState.selectedKey !== key) {
                return {
                    selectedKey: key
                };
            }
            return null;
        }, actionUpdate);
    }

    private _onChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        const key: string = e.currentTarget.value ?? "";
        const text: string = e.currentTarget.selectedOptions[0]?.text ?? "";
        this._onUpdate(key, () => {
            if (this.props.onChanged) {
                this.props.onChanged(key, text);
            }
        });
    }
}