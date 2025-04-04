import React from 'react'
import styles from './App.module.scss'
import { Button, Textbox } from './UI';

export default class App extends React.Component {
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
        <Button
          text={'click!'}
          onClick={() => {
            console.log('123');
          }}
        />
      </div>
    );
  }
}