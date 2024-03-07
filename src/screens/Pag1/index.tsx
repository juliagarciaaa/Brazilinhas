import { ImageBackground, Image, View } from "react-native"
import { styles } from './styles'
import { Botao } from "../components/Botao"
import { IPage } from "../../../App"


export function Pag1({ setPage }: IPage) {
    const fundo = require('../../assets/fundo.png')
    return (
        <ImageBackground style={styles.container} source={fundo}>
            <View style={styles.brazilinhas} >
                <Image source={require('../../assets/texto.png')} />
            </View>
            <View style={styles.bolinha}>
                <Botao onPress={() => setPage(1)} />
                <Botao onPress={() => setPage(2)} />
                <Botao onPress={() => setPage(3)} />
                <Botao onPress={() => setPage(4)} />
            </View>

        </ImageBackground>
    )
}

