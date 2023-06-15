import { Dimensions, Pressable, Text, View, SafeAreaView } from 'react-native'

export default function HomeScreen(props) {
  const width = Dimensions.get('window').width

  return (
    <View style={{ width, padding: 24, paddingTop: 40, backgroundColor: '#f2f2f2', gap: 24 }}>
      <Text style={{ fontSize: 32, fontWeight: '700' }}>Home</Text>
    </View>
  )
}