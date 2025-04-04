import React from 'react'
import { Button, ISelectItem, Select, Textbox } from './UI';
import styles from './App.module.scss'

interface IState {
  options: ISelectItem[]
}

export default class App extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props);

    this.state = {
      options: [
        { key: '1', text: 'one' },
        { key: '2', text: 'two' }
      ]
    };
  }

  public render(): React.ReactNode {
    return (
      <div className={styles.app}>
        <Textbox
          id={'test'}
          label={'label'}
          text={'text'}
          onChanged={(text) => {
            console.log(text);
          }}
        />
        <Select
          id={'selecte_test'}
          label={'selector'}
          options={this.state.options}
          onChanged={(key) => {
            console.log(key);
          }}
        />
        <Button
          text={'click!'}
          onClick={() => {
            this.setState(prevState => {
              const opt = prevState.options;
              opt.push({ key: (opt.length + 1).toString(), text: "three" });
              return {
                options: opt
              };
            });
          }}
        />
      </div>
    );
  }
}