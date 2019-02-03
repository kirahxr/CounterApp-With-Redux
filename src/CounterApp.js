/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        counter: state.counter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        plusCounter: () => dispatch({ type:'PLUS_COUNTER' }),
        minCounter: () => dispatch({ type:'MIN_COUNTER' }),
        resetCounter: () => dispatch({ type:'RESET_COUNTER'}),
    }
}

class CounterApp extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image style={{ width: 252, height: 119 }} source={require('../img/logo.png')}/>
          <Text style={{marginVertical: 30, fontSize:25, color:'#61DBFB',}}>React Native 
            <Text style={{color:'white',}}> & </Text>
            <Text style={{marginVertical: 30, fontSize:25, color:'#764ABC',}}>Redux</Text>
          </Text>
        </View>
        <View style={styles.logo}>
          <Text style={styles.angka}>{this.props.counter}</Text>
        </View>
        <View style={styles.st1}>
          <TouchableOpacity onPress={() => this.props.minCounter()} style={styles.st2}>
            <Text>KURANG</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.plusCounter()} style={styles.st2}>
            <Text>TAMBAH</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.logo}>
          <TouchableOpacity onPress={() => this.props.resetCounter()} style={styles.st3}>
              <Text>RESET</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#004d40',
    paddingTop: 30,
  },
  st1: {
    flexDirection: 'row',
    width: 400,
    justifyContent: 'space-around',
    borderBottomColor:'#78909c'
  },
  st2: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#eceff1',
    alignItems: 'center',
    borderRadius: 5,
  },
  st3 : {
    justifyContent: 'flex-end',
    padding: 10,
    backgroundColor: '#eceff1',
    alignItems: 'center',
    borderRadius: 5,
  },
  logo : {
    alignItems: 'center',
  },
  angka : {
    fontSize:150,
    color:'#61DBFB',
    paddingBottom: 30,
  }
});
