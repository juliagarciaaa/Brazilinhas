import { StyleSheet } from "react-native";
import { colors } from "../../styles/globalstyles";

export const styles = StyleSheet.create({

    Image: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },

    bolinha: {
        padding: 10,
        flexDirection: "row",

    },
    TextArea: {
        width: 350,

    },
    Text: {
        color: colors.amarelo,
        fontFamily: "Comfortaa_400Regular",
        textAlign: "justify",
        fontSize: 20,

    },

    brilho: {
        flex: 1,
        justifyContent: "flex-start",
        paddingTop: 100,
        alignItems: "center",

    },

    brilhinho:{
        width:150,
        height:150,
    },
}) 


