import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#70ACE8',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        margin: 20,
        fontWeight: '700',
        color: '#2A4C7C',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 6,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        margin: 12,
        borderRadius: 6,
    },
    text: {
        fontSize: 16,
        fontWeight: '400',
        color: '#70ACE8',
    }
});

export default styles;
