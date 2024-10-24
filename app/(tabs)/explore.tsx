
import { View, Text, Button, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'
import BottomPull from '@/components/BottomPull'
import ParallaxScrollView from '@/components/ParallexScrollView'

function explore() {
  const [openPicture, setOpenPicture] = useState(false)
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ParallaxScrollView headerBackgroundColor={{ dark: 'black', light: 'white' }} headerImage={<Image style={{ flex: 1 }} source={{ uri: "https://ideogram.ai/assets/image/lossless/response/LlzCI1y_S2ihwxDeb6Wz7A" }} />}>
        <Text>Explore Page</Text>
        <Button title='Open BottomSheet' onPress={() => setOpenPicture(true)} />
        {openPicture && (
          <BottomPull onClose={() => setOpenPicture(false)} />
        )}
      </ParallaxScrollView>
    </SafeAreaView >
  )
}

export default explore
