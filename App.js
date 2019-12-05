import React, { useState } from 'react';
import { StyleSheet, TouchableWithoutFeedback, Text, Button, ScrollView,View } from 'react-native';
import { RadioButton, Checkbox } from 'react-native-paper';

import Header from './components/Header';

export default function App() {

  const [pairAtom, setPairAtom] = useState(true);
  const [pairEth, setPairEth] = useState(true);
  const [baseCurrency, setBaseCurrency] = useState('btc');
  const [currentData, setCurrentData] = useState('');
  const [loadingFlag, setLoadingFlag] = useState(false);

  const retrieveDataHandler = () => {
    console.log('retrieveDataHandler');
    getData();
  };

  getData = async () => {
    try {
        console.log('getData...');
        if (!pairAtom && !pairEth){
          console.log('Invalid pairs.');
          return;
        }
        if (baseCurrency.length == 0){
          console.log('Invalid base_currency.');
          return;
        }

        let url = 'http://dev-market.rockx.com/v1/markets/?pairs=';
        if(pairAtom){
          if(pairEth)
            url += 'atom,eth';
          else
            url += 'atom';
        } else if(pairEth)
          url += 'eth';

        url += '&base_currency=' + baseCurrency;

        setLoadingFlag(true);
        setCurrentData('');

        await fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
            console.log('response received!');
            console.log('responseJson = ' + JSON.stringify(responseJson));

            setLoadingFlag(false);

            if(responseJson.success) {
                setCurrentData(JSON.stringify(responseJson));
            } else {
                setCurrentData('Error retrieving data!');
            }
        });
    }
    catch(err) {
        console.error(err);
    }
};

  let loadingText = '';
  if(loadingFlag) loadingText = 'Loading...';

  return (

    <View style={styles.screen}>
    <Header>RockX</Header>
      <View style={styles.screen}>
        <View style={styles.dataPicker}>
          <View style={styles.dataPickerGroup}>
            <Text style={styles.title}>Pick your pair(s)</Text>
            <View style={styles.rowContainer}>
              <Checkbox
                status={pairAtom? 'checked' : 'unchecked'}
                onPress={() => {
                  setPairAtom(pairAtom => !pairAtom);
                }}
              />
              <Text>Atom</Text>
            </View>
            <View style={styles.rowContainer}>
              <Checkbox
                status={pairEth? 'checked' : 'unchecked'}
                onPress={() => {
                  setPairEth(pairEth => !pairEth);
                }}
              />
              <Text>Eth</Text>
            </View>

            <Text></Text>

            <Text style={styles.title}>Pick your base currency!</Text>
            <View style={styles.rowContainer}>
              <Text>BTC</Text>
              <RadioButton
                value='btc'
                status={baseCurrency === 'btc' ? 'checked' : 'unchecked'}
                onPress={() => {
                  setBaseCurrency('btc');
                }}
              />
            </View>
            <View style={styles.rowContainer}>
              <Text>USD</Text>
              <RadioButton
                value='usd'
                status={baseCurrency === 'usd' ? 'checked' : 'unchecked'}
                onPress={() => {
                  setBaseCurrency('usd');
                }}
              />
            </View>
            <View style={styles.rowContainer}>
              <Text>USDT</Text>
              <RadioButton
                value='usdt'
                status={baseCurrency === 'usdt' ? 'checked' : 'unchecked'}
                onPress={() => {
                  setBaseCurrency('usdt');
                }}
              />
            </View>

            <View style={styles.button}>
              <Button title="Get Data!" disabled={loadingFlag} onPress={retrieveDataHandler} />
            </View>
          </View>

          <View style={styles.loadingText}>
            <Text>{loadingText}</Text>
          </View>

          <View style={styles.dataRetrievalGroup}>
            
          </View>
        </View>

        <View style={styles.dataRetrieval}>
          <ScrollView style={styles.scrollView}>
            <Text>{currentData}</Text>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center'
  },
  dataPicker: {
    flex: 10,
    padding: 20
  },
  title: {
    marginVertical: 10,
    fontSize: 20,
    textAlign: 'center'
  },
  dataPickerGroup: {
    padding: 5,
    width: '80%'
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  button: {

  },
  loadingText: {
    flex: 1
  },
  dataRetrieval: {
    flex: 10,
    padding: 20,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  loadingOverlay: {
    backgroundColor: 'black',
    opacity: 0.26
  }
});
