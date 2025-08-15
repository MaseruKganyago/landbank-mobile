import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  backButton: {
    padding: 5,
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: 'white',
  },
  alertContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  alertBox: {
    backgroundColor: '#5DADE2',
    borderRadius: 8,
    padding: 15,
  },
  alertHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#4A90E2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    padding: 2,
  },
  alertText: {
    color: 'white',
    fontSize: 14,
    lineHeight: 20,
  },
  signatureSection: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  signatureLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 15,
  },
  signatureBox: {
    height: 120,
    borderWidth: 2,
    borderColor: '#ddd',
    borderStyle: 'dashed',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fafafa',
  },
  signatureBoxSigned: {
    borderColor: '#4CAF50',
    borderStyle: 'solid',
    backgroundColor: '#f8fff8',
  },
  signaturePlaceholder: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  signaturePlaceholderText: {
    color: '#999',
    fontSize: 14,
    marginTop: 8,
  },
  signatureText: {
    color: '#4CAF50',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
  },
  actionButtonsContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: 'white',
    gap: 12,
  },
  submitButton: {
    backgroundColor: '#4A90E2',
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: 'center',
  },
  submitButtonDisabled: {
    backgroundColor: '#B0BEC5',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  submitButtonTextDisabled: {
    color: '#ffffff80',
  },
  saveDraftButton: {
    backgroundColor: '#E0E0E0',
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: 'center',
  },
  saveDraftButtonText: {
    color: '#666',
    fontSize: 16,
    fontWeight: '600',
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
