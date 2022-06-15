import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import InstaStory from 'react-native-insta-story'

export default function Insta() {
  function createData() {
    const array = []

    // total instagramusers that posted stories
    const userCount = 10
    //total stories per user
    const userStoryCount = 5

    for (let i = 1; i <= userCount; i++) {
      const storyArray = []
      for (let x = 1; x <= userStoryCount; x++) {
        storyArray.push({
          story_id: i,
          story_image: 'https://picsum.photos/500/800?random=' + Math.random(),
          swipeText: 'Custom swipe text for this story',
          onPress: () => console.log(`story ${i} swiped`)
        })
      }

      array.push({
        user_id: i,
        user_image: 'https://picsum.photos/200/300?random=' + Math.random(),
        user_name: 'Mahdi ' + i,
        stories: storyArray
      })
    }
    return array
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <InstaStory
        style={{ marginTop: 23 }}
        data={createData()}
        duration={5}
        customSwipeUpComponent={
          <View>
            <Text style={{ color: 'white', fontSize: 20 }}>
              Swipe for more photos
            </Text>
          </View>
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FED766'
  }
})
