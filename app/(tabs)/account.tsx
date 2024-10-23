
import { Link } from 'expo-router'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

function account() {
  return (
    <SafeAreaView>
      <Text>Account Page</Text>
      <Link href={'/accountInfo'}>
        <Text>Account Info</Text>
      </Link>
    </SafeAreaView>

  )
}

export default account
