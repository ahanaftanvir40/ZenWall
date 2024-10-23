
import { View, Text, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'
import BottomPull from '@/components/BottomPull'

function explore() {
  const [openPicture, setOpenPicture] = useState(false)
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Text>Explore Page</Text>
        <Button title='Open BottomSheet' onPress={() => setOpenPicture(true)} />
        {openPicture && (
          <BottomPull onClose={() => setOpenPicture(false)} />
        )}
      </View>
    </SafeAreaView>
  )
}

export default explore
