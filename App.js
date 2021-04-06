import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button, SafeAreaView } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
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

const styles = ScaledSheet.create({
container: {
flex: '1@s',
flexDirection: "column",
height: "100%",
alignItems: "center",
backgroundColor: '#679159',
alignItems: 'center',
justifyContent: 'center',
},
contentBorder: {
backgroundColor: "#bed2b7",
padding: '15@s',
borderRadius: '20@s',
marginLeft: '10@s',
marginRight: '10@s',
},
contentBorderTwo: {
borderRadius: '20@s',
flex: '1@s',
flexDirection: "column",
marginBottom: '0@s',
},
header: {
paddingLeft: '10@s',
paddingRight: '10@s',
//paddingTop: '10@s',
flex: '3@s',
justifyContent: "center",
height: "100%",
fontWeight: "bold",
borderRadius: '20@s',

},
headerTitle: {
  paddingLeft: '20@s',
  paddingTop: '10@s',
  fontWeight: "bold",
  flex: '1@s',
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
borderRadius: '10@s',

},
headerBackground2: {
  marginLeft: '10@s',
  marginRight: '10@s',
  position: 'absolute',
  left: 0,
  right: 0,
  top: '7@s',
  height: "100%",
  borderRadius: '10@s',
  
  },

h1: {
fontWeight: "800",
fontSize: '24@s',
color: "#283823"
},
subtitle: {
color: "#679159",
fontWeight: "700",
fontSize: '12@s'
},
navContainer: {
flexDirection: "row",
flex: '1@s',
marginBottom: '10@s',




},
navButton: {
flex: '1@s',
justifyContent: "center",
alignItems: "center",
height: '50@s',
paddingLeft: '10@s',
paddingRight: '10@s',
paddingBottom: '25@s'
},
navButtonBkg: {
position: 'absolute',
left: '0@s',
right: '0@s',
top: '0@s',
height: "100%"
},
navBtnTxt: {
color: "#fff",
fontWeight: "700",
fontSize: '14@s'
},
test: {
backgroundColor: "white",
borderRadius: '10@s',

},
text: {
  paddingLeft: '10@s',
  paddingRight: '10@s',
  paddingTop: '15@s',
  
}

});
