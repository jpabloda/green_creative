import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button, SafeAreaView } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
return (
<SafeAreaView style={styles.container}>
<View style={styles.contentBorder}>
<View style={styles.contentBorderTwo}>
<View style={styles.header}>
<LinearGradient
// Background Linear Gradient
colors={['#dab636', '#f2e4b6']}
style={styles.headerBackground}
/>
<Text style={styles.h1}>Green Creative</Text>
<Text style={styles.subtitle}>Inspired by Creative Commons, licensed under Creative Commons.</Text>
</View>
<ScrollView style={styles.navContainer} horizontal={true} showsHorizontalScrollIndicator={false}>
<View style={styles.navButton}>
<LinearGradient
// Background Linear Gradient
colors={['#806817', '#d9b436']}
style={styles.navButtonBkg}
/>
<Text style={styles.navBtnTxt}>home</Text>
</View>
<View style={styles.navButton}>
<LinearGradient
// Background Linear Gradient
colors={['#806817', '#d9b436']}
style={styles.navButtonBkg}
/>
<Text style={styles.navBtnTxt}>about</Text>
</View>
<View style={styles.navButton}>
<LinearGradient
// Background Linear Gradient
colors={['#806817', '#d9b436']}
style={styles.navButtonBkg}
/>
<Text style={styles.navBtnTxt}>portfolio</Text>
</View>
<View style={styles.navButton}>
<LinearGradient
// Background Linear Gradient
colors={['#806817', '#d9b436']}
style={styles.navButtonBkg}
/>
<Text style={styles.navBtnTxt}>prices</Text>
</View>
<View style={styles.navButton}>
<LinearGradient
// Background Linear Gradient
colors={['#806817', '#d9b436']}
style={styles.navButtonBkg}
/>
<Text style={styles.navBtnTxt}>products</Text>
</View>
<View style={styles.navButton}>
<LinearGradient
// Background Linear Gradient
colors={['#806817', '#d9b436']}
style={styles.navButtonBkg}
/>
<Text style={styles.navBtnTxt}>faq</Text>
</View>
<View style={styles.navButton}>
<LinearGradient
// Background Linear Gradient
colors={['#806817', '#d9b436']}
style={styles.navButtonBkg}
/>
<Text style={styles.navBtnTxt}>contact</Text>
</View>
</ScrollView>
<ScrollView style={styles.test} vertical={true} showsVerticalScrollIndicator={false} >
<View style={styles.header}>
<LinearGradient
// Background Linear Gradient
colors={['#d7e6d8', 'white']}
style={styles.headerBackground2}
/>
<Text style={styles.headerTitle}>Template Usage</Text>
</View>
<View>
<Text style={styles.text}>You may use this template on any site, anywhere, for free just please leave the link back to me in the footer. This template validates XHTML Strict 1.0, CSS Validates as well; enjoy :)</Text>
<Text style={styles.text}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer mi. Vivamus sit amet neque vitae sapien bibendum sodales. Curabitur elementum. Duis imperdiet. Donec eleifend porttitor sapien. Praesent leo. Quisque auctor velit sed tellus. Suspendisse potenti. Aenean laoreet imperdiet nunc. Donec commodo suscipit dolor. Aenean nibh. Sed id odio. Aliquam lobortis risus ut felis. Sed vehicula pellentesque quam.</Text>
<Text style={styles.text}> (read more) </Text>
</View>
<View>
<View style={styles.header}>
<LinearGradient
// Background Linear Gradient
colors={['#d7e6d8', 'white']}
style={styles.headerBackground2}
/>
<Text style={styles.headerTitle}>Another Title Goes Here!</Text>
</View>
<Text style={styles.text}>This particular template goes not have a naviagation panel; it was intended for simple sites. I am also making a version of this template with navigation, check out BryantSmith.com to get it.</Text>
<Text style={styles.text}> (read more) </Text>
</View>
<View>
<View style={styles.header}>
<LinearGradient
// Background Linear Gradient
colors={['#d7e6d8', 'white']}
style={styles.headerBackground2}
/>
<Text style={styles.headerTitle}>Yet Another?</Text>
</View>
<Text style={styles.text}>Each title is an H1 tag, so choose them carefully smile</Text>
</View>
</ScrollView>
</View>
</View>
</SafeAreaView>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
flexDirection: "column",
height: "100%",
alignItems: "center",
backgroundColor: '#679159',
alignItems: 'center',
justifyContent: 'center',
},
contentBorder: {
backgroundColor: "#bed2b7",
padding: 15,
borderRadius: 20,
marginLeft: 10,
marginRight: 10
},
contentBorderTwo: {
borderRadius: 20,
flex: 1,
flexDirection: "column",
marginBottom: 0,
},
header: {
paddingLeft: 10,
paddingRight: 10,
//paddingTop: 10,
flex: 3,
justifyContent: "center",
height: "100%",
fontWeight: "bold",
borderRadius: 20,

},
headerTitle: {
  paddingLeft: 20,
  paddingTop: 10,
  fontWeight: "bold",
  flex: 1,
  justifyContent: "center",
  //borderRadius: 20,
  //backgroundColor: "#d7e6d8",
  //marginLeft: 10,
  //marginRight: 10,  
},
headerBackground: {
position: 'absolute',
left: 0,
right: 0,
//top: 0,
height: "100%",
borderRadius: 10,
},
headerBackground2: {
  marginLeft: 10,
  marginRight: 10,
  position: 'absolute',
  left: 0,
  right: 0,
  top: 7,
  height: "100%",
  borderRadius: 10,
  },

h1: {
fontWeight: "800",
fontSize: 24,
color: "#283823"
},
subtitle: {
color: "#679159",
fontWeight: "700",
fontSize: 12
},
navContainer: {
flexDirection: "row",
flex: 70,
marginBottom: 10

},
navButton: {
flex: 1,
justifyContent: "center",
alignItems: "center",
height: 50,
paddingLeft: 10,
paddingRight: 10,
paddingBottom: 25
},
navButtonBkg: {
position: 'absolute',
left: 0,
right: 0,
top: 0,
height: "100%"
},
navBtnTxt: {
color: "#fff",
fontWeight: "700",
fontSize: 14
},
test: {
backgroundColor: "white",
borderRadius: 10,

},
text: {
  paddingLeft: 10,
  paddingRight: 10,
  paddingTop: 15,
  
}

});