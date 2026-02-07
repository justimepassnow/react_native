import { StyleSheet, Text, View } from 'react-native'

export default function Spacer({width="100%",height=20}) {
  return (
    <View style={{width:width,height:height}}/>
  )
}

const styles = StyleSheet.create({})