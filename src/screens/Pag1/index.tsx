import { ImageBackground, Image} from "react-native"
import {styles} from './styles'


export function Pag1() {
    const fundo = require('../../assets/fundo.png')
    return (
        <ImageBackground style={styles.container} source={fundo}>
            <Image source={require('../../assets/texto.png')}/>
        </ImageBackground>
    )
}

