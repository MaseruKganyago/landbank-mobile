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
  addressSection: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  addressHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  favoriteButton: {
    marginRight: 10,
  },
  addressText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  detailsSection: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  detailRow: {
    flexDirection: 'row',
    marginBottom: 12,
    alignItems: 'flex-start',
  },
  detailLabel: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
    width: 130,
  },
  detailValue: {
    fontSize: 14,
    color: '#333',
    flex: 1,
  },
  confirmLocationSection: {
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  confirmLocationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  confirmLocationText: {
    fontSize: 14,
    color: '#E74C3C',
    fontWeight: '500',
  },
  resolveLocationText: {
    fontSize: 14,
    color: '#ebf0ebff',
    fontWeight: '500',
  },
  confirmLocationButton: {
    backgroundColor: '#6B9BD1',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  confirmLocationButtonValidated: {
    backgroundColor: '#27AE60',
  },
  confirmLocationButtonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '500',
  },
  validationResultText: {
    fontSize: 12,
    fontStyle: 'italic',
    marginTop: 5,
  },
  mapContainer: {
    height: 200,
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 8,
    overflow: 'hidden',
  },
  mapBackground: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    position: 'relative',
  },
  streetLine: {
    position: 'absolute',
    backgroundColor: '#ddd',
  },
  horizontalStreet1: {
    width: '100%',
    height: 2,
    top: 60,
  },
  horizontalStreet2: {
    width: '100%',
    height: 2,
    top: 120,
  },
  horizontalStreet3: {
    width: '100%',
    height: 2,
    top: 160,
  },
  verticalStreet1: {
    height: '100%',
    width: 2,
    left: 80,
  },
  verticalStreet2: {
    height: '100%',
    width: 2,
    left: 140,
  },
  yellowStreet: {
    height: '100%',
    width: 3,
    right: 30,
    backgroundColor: '#FFC107',
  },
  greenArea: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    width: 50,
    height: 40,
    backgroundColor: '#8BC34A',
    borderRadius: 4,
  },
  redMarker: {
    position: 'absolute',
    top: 90,
    left: 90,
    alignItems: 'center',
    justifyContent: 'center',
  },
  blueMarker: {
    position: 'absolute',
    bottom: 50,
    left: 110,
    alignItems: 'center',
    justifyContent: 'center',
  },
  blueDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#2196F3',
    borderWidth: 2,
    borderColor: 'white',
  },
  bottomSection: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: 'white',
  },
  checkinButton: {
    backgroundColor: '#4A90E2',
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: 'center',
  },
  checkinButtonText: {
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
  breaker: { marginTop: 10 },
});
