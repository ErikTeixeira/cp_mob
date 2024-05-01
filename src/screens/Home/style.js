import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#70ACE8',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    paddingVertical: 20,
  },
  containerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
    width: '100%',
    backgroundColor: '#70ACE8',
  },
  title: {
    fontSize: 33,
    fontWeight: '700',
    color: '#2A4C7C',
    marginRight: 20,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    marginVertical: 10,
    borderRadius: 6,
    width: 120,
  },
  text: {
    fontSize: 19,
    fontWeight: '400',
    color: '#70ACE8',
  },
});

export default styles;
