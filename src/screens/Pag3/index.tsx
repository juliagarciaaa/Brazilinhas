import React, { useState } from "react";
import { ImageBackground, Image, View, Text } from "react-native"
import { styles } from "../../screens/Pag2/styles";
import { IPage } from "../../../App";
import { Botao } from "../components/Botao";
import { styleContainer } from "../../styles/globalstyles";



export function Pag3({ setPage }: IPage) {

    const fundoAmarelo = require('../../assets/fundoAmarelo.png')
    const cartao = require('../../assets/cartao.png')

    return (
        <ImageBackground source={fundoAmarelo} style = {styleContainer.container}>

            <View style={styles.cartao}>
                <Image source={require('../../assets/brilho.png')} style={styles.brilhinho} />

                <View style={styles.TextArea}>
                    <Text style={styles.Text}>
                        Na BraziNa Brazilinhas, oferecemos a oportunidade
                        de selecionar cores exclusivas para o seu trabalho em crochê!
                        Criamos peças personalizadas com muita dedicação.
                    </Text>
                </View>
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


