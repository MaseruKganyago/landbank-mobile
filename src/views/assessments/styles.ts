import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#6B9BD1',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  menuButton: {
    padding: 5,
    marginRight: 15,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  dateBanner: {
    backgroundColor: '#4A90E2',
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  dateText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
  assessmentsList: {
    flex: 1,
    backgroundColor: 'white',
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
