import { View, Text } from 'react-native'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';


const Tab = createMaterialTopTabNavigator();

function index() {


    return (
        <>
            <SafeAreaView>
            </SafeAreaView>
            <Tab.Navigator>
                <Tab.Screen name='Library' component={Library} />
                <Tab.Screen name='Liked' component={Liked} />
                <Tab.Screen name='Suggested' component={Suggested} />
            </Tab.Navigator>
        </>
    )
}

function Library() {
    return (
        <View>
            <Text>Library</Text>
        </View>
    )
}

function Liked() {
    return (
        <View>
            <Text>Liked</Text>
        </View>
    )
}

function Suggested() {
    return (
        <View>
            <Text>Suggested</Text>
        </View>
    )
}

export default index
