import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  photoUploadBox: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  photoPlaceholder: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoX: {
    fontSize: 30,
    color: '#999',
    fontWeight: '300',
  },
  multiplePhotosContainer: {
    marginVertical: 10,
  },
  photoItem: {
    position: 'relative',
    marginRight: 10,
  },
  photoImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
  },
  removeButton: {
    position: 'absolute',
    top: -5,
    right: -5,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#ff4444',
    justifyContent: 'center',
    alignItems: 'center',
  },
  removeButtonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  addPhotoBox: {
    width: 80,
    height: 80,
    borderStyle: 'dashed',
    borderWidth: 2,
    borderColor: '#999',
    backgroundColor: 'transparent',
  },
  addPhotoText: {
    fontSize: 10,
    color: '#999',
    marginTop: 2,
    textAlign: 'center',
  },
});
