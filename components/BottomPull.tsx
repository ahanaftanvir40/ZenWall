import { useCallback } from "react";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet"
import { useRef } from "react"
import { Text, StyleSheet } from "react-native";

function BottomPull({ onClose }: { onClose: () => void }) {

    const bottomSheetRef = useRef(null)
    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
    }, []);

    return (
        <BottomSheet
            ref={bottomSheetRef}
            onChange={handleSheetChanges}
            snapPoints={["99%"]}
            enablePanDownToClose={true}
            onClose={onClose}
            handleIndicatorStyle={{ height: 0 }}
        >
            <BottomSheetView style={styles.contentContainer}>
                <Text>Awesome 🎉</Text>
            </BottomSheetView>
        </BottomSheet>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'grey',
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
    },
});

export default BottomPull
