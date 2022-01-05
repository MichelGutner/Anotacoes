import { StyleSheet } from "react-native";
import colors from "../../components/colors/colors";



export const styles = StyleSheet.create({
    noteView:{
        flex: 1,
    },
    headerText:{
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: 10,
        color: colors.DARKORANGE
    },
    bodyTasks:{
        flex: 1,
        minHeight: '77%',
        zIndex: -1,
    },
    flatList:{
        marginTop: 0,
    }
})