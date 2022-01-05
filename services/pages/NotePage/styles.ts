import { StyleSheet } from "react-native";
import colors from "../../components/colors/colors";



export const styles = StyleSheet.create({
    noteView:{
        flex: 1,
    },
    headerText:{
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: 10,
        color: colors.DARKORANGE
    },
    bodyTasks:{
        flex: 1,
        minHeight: '100%',
        zIndex: +1
    },
    flatList:{
        marginTop: 0,
    },
    buttonAdd:{
        position: 'absolute',
        left: 290,
        top: 670,
        alignSelf: 'center',
        zIndex: 1,
        width: 80,
        height: 60,
    }
})