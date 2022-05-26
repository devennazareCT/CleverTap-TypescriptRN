
import React from 'react';
const CleverTap = require('clevertap-react-native');

import { Button, StyleSheet, Text, View, SafeAreaView,ScrollView,StatusBar,useColorScheme,Alert} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

interface State {
  enthusiasmLevel: number;
}

const Section: React.FC<{
  title: string;
}> = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

export class App extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
  }
componentDidMount=()=>{
    CleverTap.setDebugLevel(3);
   // CleverTap.setPushToken("fcm:ch9ejVWUSgylcmiWau9OHZ:APA91bHgeEy5pMAK-9-lNzg8UK_5jBwmgQryTsS-pKfBLQX5SKJADd_cFsFZl4r-wgEDVdMOwIW6S6lMWz41ptSt8a3Z32nV0L8zDaYZrmDcXGzsYJMUR1P1lVkVXpa7Em-TYJfVfh_p", CleverTap.FCM);
   // Alert.alert("Component")
   //create notification channel
    CleverTap.createNotificationChannel("ts123", "ts123", "CT React Native TypeScript", 1, true);


   }
   
  pushEvent = () =>{
   //Recording an Event
   CleverTap.recordEvent('testEvent');
  }
  showInapp = () =>{
    //Recording an Event for inapp
    CleverTap.recordEvent('testinapp');
   }
  pushChargedEvent = () =>{
    //Recording a Charged Event
    CleverTap.recordChargedEvent({ 'totalValue': 20, 'category': 'books', 'purchase_date': new Date() },
    [{ 'title': 'book1', 'published_date': new Date('2010-12-12T06:35:31'), 'author': 'ABC' },
    { 'title': 'book2', 'published_date': new Date('2000-12-12T06:35:31') },
    { 'title': 'book3', 'published_date': new Date(), 'author': 'XYZ' }]
);
}
   onUserLogin = () =>
   //Onuser Login
   CleverTap.onUserLogin({
    'Name': 'Deven Nazare', 'Identity': 'ts1234',
    'Email': 'ts@test.com', 'custom1': 123,
    'birthdate': new Date('1992-12-22T06:35:31')
}) 

  showAppInbox=()=>
  //Show Appinbox
  CleverTap.showInbox({
    'tabs': ['Offers', 'Promotions'],
    'navBarTitle': 'My App Inbox',
    'navBarTitleColor': '#000000',
    'navBarColor': '#FFFFFF',
    'inboxBackgroundColor': '#AED6F1',
    'backButtonColor': '#000000',
    'unselectedTabColor': '#0000FF',
    'selectedTabColor': '#000000',
    'selectedTabIndicatorColor': '#000000',
    'noMessageText': 'No message(s)',
    'noMessageTextColor': '#FF0000'
});
  getExclamationMarks = (numChars: number) =>
    Array(numChars + 1).join('!');

  render() {
    //Initialize Inbox
    CleverTap.initializeInbox();

    return (
      <SafeAreaView >
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        >
        <Header />
        <View
          style={{
          }}>
          <Section title="Push Profile">
          <View style={styles.button}>
            <Button
              title="On User Login"
              onPress={this.onUserLogin}
              accessibilityLabel="decrement"
              color="red"
            /></View>
           
          </Section>
          <Section title="Push Event">
          <View style={styles.button}>
            <Button
              title="Push Event"
              onPress={this.pushEvent}
              accessibilityLabel="decrement"
              color="red"
            /></View>
          </Section>
          <Section title="Push Charge Event">
          <View style={styles.button}>
            <Button
              title="Push Charged Event"
              onPress={this.pushEvent}
              accessibilityLabel="decrement"
              color="red"
            /></View>
          </Section>
          <Section title="Show InApp">
          <View style={styles.button}>
            <Button
              title="Display Inapp"
              onPress={this.showInapp}
              accessibilityLabel="decrement"
              color="red"
            /></View>
          </Section>
          <Section title="Show AppInbox">
          <View style={styles.button}>
            <Button
              title="Show App Inbox"
              onPress={this.showAppInbox}
              accessibilityLabel="decrement"
              color="red"
            /></View>
          </Section>
          <Section title="Learn More">
            More Info on https://developer.clevertap.com/docs/react-native
          </Section>
         {/* <LearnMoreLinks /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
    );
  }
}

// styles
const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    alignSelf: 'center'
  },
  buttons: {
    flexDirection: 'row',
    minHeight: 70,
    alignItems: 'stretch',
    alignSelf: 'center',
    borderWidth: 5
  },
  button: {
    flex: 1,
    paddingVertical: 0
  },
  greeting: {
    color: '#999',
    fontWeight: 'bold'
  },
  sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
      },
      sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
      },
      sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
      },
      highlight: {
        fontWeight: '700',
      },
});
 export default App;
