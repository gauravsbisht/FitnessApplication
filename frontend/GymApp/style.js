import { StyleSheet } from 'react-native';

export const commonStyles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    padding: 10,
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#a3a3a3',
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 24,
    marginBottom: 10,
  },
  subheading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  usernameText: {
    fontSize: 16,
    marginBottom: 10,
  },
  
  input: {
    height: 40,
    borderColor: '#E0E0E0',
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  label: {
    flex: 1,
    fontSize: 16,
  },
  picker: {
    flex: 2,
    height: 40,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalClose: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  modalOption: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    width: '100%',
    alignItems: 'center',
  },
  workoutPlanWrapper: {
    marginBottom: 15,
  },
  workoutPlanContainer: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    padding: 10,
    borderRadius: 8,
  },
  exercisesContainer: {
    marginLeft: 10,
  },
  toggleText: {
    color: 'blue',
  },
  createButton: {
    backgroundColor: '#0074e4',
    borderRadius: 8,
    padding: 10,
	marginBottom: 15,
    alignSelf: 'stretch',
  },
  createButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  message: {
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
