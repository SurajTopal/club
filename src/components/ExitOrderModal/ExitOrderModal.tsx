// import React, {useCallback, useRef} from 'react';
// import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
// import {GestureHandlerRootView} from 'react-native-gesture-handler';
// import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';

// const ExitOrderModal = () => {
//   // Reference for BottomSheet
//   const bottomSheetRef = useRef<BottomSheet>(null);

//   // Function to open BottomSheet
//   const openBottomSheet = () => {
//     bottomSheetRef.current?.expand();
//   };

//   // Handle sheet changes
//   const handleSheetChanges = useCallback((index: number) => {
//     console.log('handleSheetChanges', index);
//   }, []);

//   return (
//     <GestureHandlerRootView style={styles.container}>
//       {/* Button to Open Bottom Sheet */}
//       <TouchableOpacity style={styles.button} onPress={openBottomSheet}>
//         <Text style={styles.buttonText}>Open Bottom Sheet</Text>
//       </TouchableOpacity>

//       {/* Bottom Sheet */}
//       <BottomSheet
//         ref={bottomSheetRef}
//         index={-1}
//         snapPoints={['25%', '50%']}
//         onChange={handleSheetChanges}>
//         <BottomSheetView style={styles.contentContainer}>
//           <Text style={styles.sheetText}>Awesome 🎉</Text>
//         </BottomSheetView>
//       </BottomSheet>
//     </GestureHandlerRootView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'grey',
//   },
//   button: {
//     backgroundColor: '#6200EA',
//     paddingVertical: 12,
//     paddingHorizontal: 24,
//     borderRadius: 8,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   contentContainer: {
//     flex: 1,
//     padding: 36,
//     alignItems: 'center',
//   },
//   sheetText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default ExitOrderModal;
