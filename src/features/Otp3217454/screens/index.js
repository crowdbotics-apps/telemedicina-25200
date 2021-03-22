import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"
import { connect } from "react-redux"
import { widthPercentageToDP as wp } from "react-native-responsive-screen"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c44/a59f/44e0a966d9afb80907428d8b1075515b"
        }}
        style={styles.ImageBackground_4_97}
      />
      <View style={styles.View_4_118}>
        <View style={styles.View_4_98} />
        <View style={styles.View_4_100}>
          <View style={styles.View_4_101}>
            <View style={styles.View_4_102} />
          </View>
          <View style={styles.View_4_110}>
            <View style={styles.View_4_111}>
              <Text style={styles.Text_4_111}>Enter OTP</Text>
            </View>
          </View>
          <View style={styles.View_4_125}>
            <View style={styles.View_4_126} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2197/2209/0261b7a4dc3ff78a97acf3f27b63ddbc"
              }}
              style={styles.ImageBackground_4_128}
            />
            <View style={styles.View_4_130}>
              <View style={styles.View_4_131} />
            </View>
          </View>
        </View>
        <View style={styles.View_4_119}>
          <View style={styles.View_4_120} />
          <View style={styles.View_4_121}>
            <Text style={styles.Text_4_121}>Submit</Text>
          </View>
          <View style={styles.View_4_123}>
            <Text style={styles.Text_4_123}>Resend OTP</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_4_134}>
        <View style={styles.View_4_135} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9289/333b/5dd294f3acf0040d58283f221c1b0c20"
          }}
          style={styles.ImageBackground_4_136}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_4_97: {
    width: wp("102.4330900243309%"),
    minWidth: wp("102.4330900243309%"),
    height: 632,
    minHeight: 632,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2.4330900243309004%"),
    top: -2
  },
  View_4_118: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: 267,
    minHeight: 267,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 575
  },
  View_4_98: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: 267,
    minHeight: 267,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_4_100: {
    width: wp("85.15815085158151%"),
    minWidth: wp("85.15815085158151%"),
    height: 60,
    minHeight: 60,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.542579075425791%"),
    top: 59,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_4_101: {
    flexGrow: 1,
    width: wp("85.15815085158151%"),
    height: 60,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_4_102: {
    flexGrow: 1,
    width: wp("85.15815085158151%"),
    height: 60,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.8700000047683716
  },
  View_4_110: {
    width: wp("28.710462287104622%"),
    minWidth: wp("28.710462287104622%"),
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.2992700729927025%"),
    top: 20,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_4_111: {
    flexGrow: 1,
    width: wp("28.710462287104622%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_4_111: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_125: {
    width: wp("7.785888077858881%"),
    minWidth: wp("7.785888077858881%"),
    height: 32,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.01946472019465%"),
    top: 14,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_4_126: {
    width: wp("7.785888077858881%"),
    height: 32,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_4_128: {
    width: wp("3.8929440389294405%"),
    height: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9464720194647214%"),
    top: 6
  },
  View_4_130: {
    width: wp("3.8929440389294405%"),
    height: 21,
    top: 6,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9464720194647214%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_4_131: {
    width: wp("7.785888077858881%"),
    height: 32,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(95, 95, 95, 1)"
  },
  View_4_119: {
    width: wp("49.148418491484186%"),
    minWidth: wp("49.148418491484186%"),
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.552311435523116%"),
    top: 147
  },
  View_4_120: {
    width: wp("21.897810218978105%"),
    minWidth: wp("21.897810218978105%"),
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.250608272506078%"),
    top: 0,
    backgroundColor: "rgba(111, 207, 151, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_4_121: {
    width: wp("13.86861313868613%"),
    minWidth: wp("13.86861313868613%"),
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.386861313868614%"),
    top: 17
  },
  Text_4_121: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_123: {
    width: wp("23.357664233576642%"),
    minWidth: wp("23.357664233576642%"),
    minHeight: 26,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 14
  },
  Text_4_123: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_134: {
    flexGrow: 1,
    width: wp("100%"),
    height: 16,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 807,
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_4_135: {
    width: wp("24.330900243309003%"),
    minWidth: wp("24.330900243309003%"),
    height: 3,
    minHeight: 3,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.71289537712895%"),
    top: 7,
    backgroundColor: "rgba(79, 79, 79, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  ImageBackground_4_136: {
    width: wp("100%"),
    height: 17.33333396911621,
    top: -0.615386962890625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2: { height: 823 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
