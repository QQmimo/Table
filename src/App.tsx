import React from 'react'
import { Button, Select, Textbox } from './UI';
import styles from './App.module.scss'

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
        <Select
          id={'selecte_test'}
          label={'selector'}
          options={[
            { key: '1', text: 'one' },
            { key: '2', text: 'two' }
          ]}
          onChanged={(key, text) => {
            console.log(key, text);
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