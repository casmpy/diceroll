import  React,{useState} from 'react'
import {Text,View,Image,TouchableOpacity,StyleSheet} from 'react-native'
import Diceone from './assets/dice1.png'
import Dicetwo from './assets/dice2.png'
import Dicethree from './assets/dice3.png'
import Dicefour from './assets/dice4.png'
import Dicefive from './assets/dice5.png'
import Dicesix from './assets/dice6.png'



const App = () => {
    
    const [uri,setUri] = useState(Diceone)

    const playButtonTap =()=>{
        let randomNumber = Math.floor(Math.random()*6) + 1
        switch (randomNumber) {
            case 1:
                setUri(Diceone)
                break;
                case 2:
                setUri(Dicetwo)
                break;
                case 3:
                setUri(Dicethree)
                break;
                case 4:
                setUri(Dicefour)
                break;
                case 5:
                setUri(Dicefive)
                break;
                case 6:
                setUri(Dicesix)
                break;
        
            default:
                setUri(Diceone)
                break;
        }
    }
    return(
        <>
        <View style={styles.container}>
            <Image source={uri} style={styles.images}/>
            <TouchableOpacity onPress={playButtonTap}>
                <Text style={styles.gameButton}>
                    Play Game
                </Text>
            </TouchableOpacity>
        </View>
        </>
    )
}
export default App;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#222831",
        alignItems:"center",
        justifyContent:"center",
    },
    images:{
        width:200,
        height:200,

    },
    gameButton:{
        fontSize:20,
        marginTop:30,
        color:"#F2A365",
        paddingHorizontal: 40,
        paddingVertical:10,
        borderColor:"#30475E",
        borderRadius:5,
        borderWidth: 3,



    },
})

