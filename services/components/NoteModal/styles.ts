import { Dimensions, StyleSheet } from "react-native";
import colors from "../colors/colors";

const width = Dimensions.get('window').width -40

export const styles = StyleSheet.create({
    container:{
        marginLeft: 10,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerIcon:{
        marginLeft: 20,
    },
    headerIcon2:{
        marginLeft: 150
    },
    headerIcon3:{
        marginRight: 60,
    },
    title:{
        fontSize: 26,
        opacity: 0.5,
        marginLeft: 20,
        marginTop: 20,
        borderBottomWidth: 0.3,
        width: width,
    },
    textBody:{
        fontSize: 16,
        opacity: 1,
        marginLeft: 20,
        marginTop: 10,
    }
})