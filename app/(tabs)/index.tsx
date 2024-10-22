import { View, Text } from 'react-native'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

function index() {


    return (
        <Tab.Navigator>
            <Tab.Screen name='Library' component={Library} />
            <Tab.Screen name='Liked' component={Liked} />
            <Tab.Screen name='Suggested' component={Suggested} />
        </Tab.Navigator>
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
