
import { Link } from 'expo-router'
import { View, Text } from 'react-native'

function account() {
  return (
    <View>
      <Text>Account Page</Text>
      <Link href={'/accountInfo'}>
        <Text>Account Info</Text>
      </Link>
    </View>
  )
}

export default account
