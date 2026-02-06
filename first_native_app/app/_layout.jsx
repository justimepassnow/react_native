import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import { Link, Stack } from 'expo-router'
import {Colors} from '../constants/colors'
import {StatusBar} from 'expo-status-bar'
const _layout = () => {
  const colorscheme = useColorScheme()
  const theme=Colors[colorscheme] 
  return (
    <>
      <StatusBar value ='auto'/>
      <View style={styles.footer}>
          <Stack screenOptions={{
            headerStyle:{ backgroundColor:theme.navBackground},
            headerTintColor:theme.title,
          }}>
            <Stack.Screen name='index' options={{title:'HOME'}}/>
            <Stack.Screen name='about' options={{title:'About'}}/>
          </Stack>
          <View style={styles.footText}>
            <Link href='/'>HOME</Link>
          </View>     
      </View>
    </>
  )
}

export default _layout

const styles = StyleSheet.create({
    footer:{
        flex:1,
        justifyContent:'center',
        alignContent:'center',
    },
    footText:{
        flexDirection:"row",
        padding:'10px',
        justifyContent:'space-evenly',
        alignContent:'center',
        backgroundColor:'rgb(21, 127, 249)'
    }
})