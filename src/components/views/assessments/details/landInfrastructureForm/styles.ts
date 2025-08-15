import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    backgroundColor: 'white',
  },
  section: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  sectionLabel: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 14,
    color: '#333',
    fontWeight: '600',
    marginBottom: 15,
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: 'white',
  },
  dropdownText: {
    fontSize: 14,
    color: '#333',
  },
  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  inputLabel: {
    fontSize: 14,
    color: '#333',
    width: 100,
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 14,
    backgroundColor: 'white',
  },
  infrastructureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  infrastructureLabel: {
    fontSize: 14,
    color: '#333',
  },
  uploadTitle: {
    fontSize: 14,
    color: '#E74C3C',
    fontWeight: '500',
    marginBottom: 15,
  },
  photoUploadContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 15,
  },
  bottomSection: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: 'white',
  },
  nextButton: {
    backgroundColor: '#4A90E2',
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: 'center',
  },
  nextButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomNav: {
    backgroundColor: '#888',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  navButton: {
    padding: 5,
  },
  reportButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#777',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 5,
  },
  reportButtonText: {
    color: 'white',
    marginLeft: 8,
    fontSize: 14,
  },
});
