import { StyleSheet, Text, View } from 'react-native'
import home from '../assets/images/android-icon-monochrome.png'
import { Slot } from 'expo-router'
const _layout = () => {
  return (
    <View  >
        <Slot/>
        <Text style={styles.footer}>footer</Text>
    </View>
  )
}

export default _layout

const styles = StyleSheet.create({
    footer:{
        flex:1,
        justifyContent:'center',
        alignContent:'center',
        backgroundColor:"rgb(0, 156, 234)"
        

    }
})