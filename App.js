import { StatusBar } from 'expo-status-bar';
import * as NavigationBar from 'expo-navigation-bar';
import { Dimensions, Pressable, ScrollView, Text, View } from 'react-native';
import { useEffect, useRef } from 'react';
import { HomeScreen, MedalScreen, QuizScreen } from './screens'
import Animated, { useAnimatedScrollHandler, useAnimatedStyle, useSharedValue, interpolate } from 'react-native-reanimated';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import AppBar from './AppBar';

export default function App() {
  useEffect(() => {
    const androidNavigationBarSettings = async () => {
      await NavigationBar.setPositionAsync('absolute')
      await NavigationBar.setBackgroundColorAsync('#ffffff00')
    }
    androidNavigationBarSettings()
  }, [])

  // settings of bottom tab bar
  const windowWidth = Dimensions.get('window').width
  const scrollViewRef = useRef()

  // settings of Reanimated animation
  const scrollX = useSharedValue(0)
  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollX.value = event.contentOffset.x
  })

  const Tab = ({ index, iconName, title }) => {
    return (
      <Pressable onPress={() => { scrollViewRef.current.scrollTo({ x: index * windowWidth }) }} style={{ flex: 1, alignItems: 'center', paddingTop: 20 }}>
        <MaterialCommunityIcons name={iconName} size={24} />
        <Text style={{ fontSize: 12, fontWeight: '500', marginTop: 8 }}>{title}</Text>
      </Pressable>
    )
  }

  const TabHighlight = () => {
    const viewStyle = useAnimatedStyle(() => {
      const translateX = interpolate(scrollX.value, [0, 3 * windowWidth], [0, windowWidth])
      return { translateX }
    })
    return (
      <View style={{ flex: 1, paddingTop: 16 }}>
        <Animated.View style={[{ width: 48, height: 32, backgroundColor: '#ccccff', borderRadius: 16, left: windowWidth / 6 - 24 }, viewStyle]} />
      </View>
    )
  }

  return (
    <>
      <StatusBar />
      <AppBar />
      <Animated.ScrollView style={{ flex: 1 }} ref={scrollViewRef} onScroll={scrollHandler} scrollEventThrottle={16} horizontal pagingEnabled showsHorizontalScrollIndicator={false} scrollEnabled={true}>
        <HomeScreen />
        <QuizScreen />
        <MedalScreen />
      </Animated.ScrollView>
      <View style={{ height: 96, backgroundColor: '#f2f2f2' }}>
        <TabHighlight />
      </View>
      <View style={{ height: 96, flexDirection: 'row', position: 'absolute', bottom: 0, left: 0, right: 0 }}>
        <Tab index={0} iconName='home' title='Home' />
        <Tab index={1} iconName='chat-question' title='Quiz' />
        <Tab index={2} iconName='medal' title='City Medals' />
      </View>
    </>
  );
}
