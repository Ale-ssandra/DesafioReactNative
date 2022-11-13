
import { StyleSheet, StatusBar, View } from 'react-native';
import React from 'react';

export default function App() {
  return (
    <View style={styles.box}>
      <StatusBar style="auto" />
      <View style={styles.azulClaro}></View>

      <View style={styles.boxTwo}>

        <View style={styles.rosaQuadrado}></View>
        <View style={styles.laranjaRetagulo}></View>

      </View>

      <View style={styles.boxThree}>

        <View style={styles.roxo}></View>
        <View style={styles.verde}></View>
        <View style={styles.azulClaro}></View>

      </View>
      <View style={styles.boxFour}>

        <View style={styles.rosaQuadrado}></View>
        <View style={styles.rosaQuadrado}></View>
        <View style={styles.rosaQuadrado}></View>
        <View style={styles.rosaQuadrado}></View>
        <View style={styles.rosaQuadrado}></View>
        <View style={styles.rosaQuadrado}></View>

      </View>
        <View style={styles.vermelho}></View>
    </View>



  );
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    backgroundColor: '#FFE4E1',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  azulClaro: {
    backgroundColor: '#00BFFF',
    width: '100%',
    height: 30,
  },
  boxTwo: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  rosaQuadrado: {
    backgroundColor: '#FF1493',
    width: 90,
    height: 90,
  },
  laranjaRetagulo: {
    backgroundColor: '#FF4500',
    width: 200,
    height: 40,
    marginTop: 20,
  },
  boxThree: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  roxo: {
    backgroundColor: '#A020F0',
    width: '50%',
    height: 60,
  },
  verde: {
    backgroundColor: '#00FF00',
    width: '50%',
    height: 60,
  },
  boxFour:{
    alignContent:'space-between',
    justifyContent: 'space-between',
    flexDirection:'row',
    flexWrap:'wrap',
    width: '80%',
    height:200,

  },
  vermelho:{
    backgroundColor: '#8B0000',
    width: '100%',
    height: 60,
  }
});
