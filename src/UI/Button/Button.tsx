import React from "react";
import { IButtonProps } from "./IButtonProps";
import styles from "./Button.module.scss";

export class Button extends React.Component<IButtonProps, {}> {
    public render(): React.ReactNode {
        return (
            <div
                className={styles.button}
                onClick={this._onClick}
            >
                {this.props.text}
            </div>
        );
    }

    private _onClick = (): void => {
        if (this.props.onClick) {
            this.props.onClick();
        }
    }
}