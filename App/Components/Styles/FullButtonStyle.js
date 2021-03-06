// @flow

import { StyleSheet } from 'react-native'
import { Fonts, Colors } from '../../Themes/'

export default StyleSheet.create({
  button: {
    marginVertical: 5,
    backgroundColor: Colors.colorTukangYellow
  },
  buttonText: {
    margin: 18,
    textAlign: 'center',
    color: Colors.colorTukangBlack,
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.type.bold,
    fontWeight: 'bold',
  }
})
