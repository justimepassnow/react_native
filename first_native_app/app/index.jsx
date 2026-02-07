import {Link} from 'expo-router'
import { StyleSheet,Text } from 'react-native'

//themed components
import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'
import ThemedCard from '../components/ThemedCard'
import Spacer from '../components/Spacer'
const home = () => {
  return (
    <ThemedView style= {[styles.container]}>
      <ThemedView  style= {[{justifyContent:"top"}]}>
        <ThemedText title={true} style= {{fontSize:20}}>THE APP</ThemedText>
      </ThemedView>
      <Spacer height={40}/>
      <ThemedView style={[styles.container]}>
        <ThemedCard>
          <Link href='/about'>
          <ThemedText>
            About
          </ThemedText>
          </Link>
        </ThemedCard>
        
        <Text>hello</Text>
      </ThemedView>
    </ThemedView>

  )
}

export default home

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
  
    
  
  },
  button:{
    alignItems:"center",
    justifyContent:'center',
    backgroundColor:"rgb(138, 201, 44)",
    margin:10,
    
  }
})
