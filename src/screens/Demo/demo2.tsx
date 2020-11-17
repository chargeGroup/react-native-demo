import React, { useState } from 'react';
import { View, Text, Switch, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');
const cellWidth = width * 0.3;

function  Demo2() {
  const [isSingle, setIsSingle] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text>单选</Text>
        <Switch style={{ marginLeft: 10 }} value={isSingle} onValueChange={setIsSingle} />
      </View>
      <View style={styles.row}>
        {isSingle
          ? [...new Array(9)].map((_, i) => (
            <TouchableOpacity
              key={i}
              style={[styles.cell, selectedIndex === i && styles.activeBg]}
              onPress={() => setSelectedIndex(i)}
             />
          ))
          : [...new Array(9)].map((_, i) => <Cell key={i} />)
        }
      </View>
    </View>
  );
}

function Cell() {
  const [selected, setSelected] = useState(false);
  return (
    <TouchableOpacity
      style={[styles.cell, selected && styles.activeBg ]}
      onPress={() => setSelected(!selected)}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  cell: {
    width: cellWidth,
    height: cellWidth,
    borderColor: '#000',
    borderWidth: 1,
  },
  activeBg: {
    backgroundColor: '#ff4747'
  }
});

export default Demo2;
