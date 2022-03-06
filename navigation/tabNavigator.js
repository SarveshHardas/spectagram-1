import React, { Component } from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from " react-native-vector-icons/Ionicons";
import CreatePost from '../screens/createPost';
import Feed from '../screens/feed';

const Tab = createBottomTabNavigator

export default class TabNavigator extends Component{
    render(){
        return(
            <Tab.Navigator screenOptions={({route})=>({
                tabBarIcon:({focused, color, size})=>{
                    var iconName 
                    if(route.name === 'Feed'){
                        iconName=focused?"book":"book-outline"
                    }else if(route.name === 'Create Post'){
                        iconName=focused? "create" : "create-outline"
                    }
                    return <Ionicons name={iconName } 
                      size={size}
                      color={color}  />
                }

            })}
            
            tabBarOptions={{
                activeTintColor:"tomato",
                InactiveTintColor:"grey",
            }}
 >
                <Tab.Screen name="Create Post" component={CreatePost} />
                <Tab.Screen name="Feed" component={Feed} />
            </Tab.Navigator>
        )
    }
}