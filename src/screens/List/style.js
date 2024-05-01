import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#70ACE8',
    },
    title: {
        fontSize: 30,
        margin: 20,
        fontWeight: '700',
        color: '#2A4C7C',
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        width: '100%',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        margin: 10,
        borderRadius: 6,
    },
    text: {
        fontSize: 16,
        fontWeight: '400',
        color: '#70ACE8',
    },
    textProduct: {
        fontSize: 18,
        fontWeight: '600',
        color: '#2A4C7C',
    }
});


export default styles;
