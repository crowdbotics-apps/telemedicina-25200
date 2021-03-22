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
      <View style={styles.View_4_4}>
        <View style={styles.View_4_5}>
          <View style={styles.View_4_6} />
        </View>
        <View style={styles.View_4_18}>
          <View style={styles.View_4_19} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa6b/0712/ca16fbd5b65b6042a2a2d8d1cc91e6b6"
            }}
            style={styles.ImageBackground_4_21}
          />
          <View style={styles.View_4_23}>
            <View style={styles.View_4_24} />
          </View>
        </View>
        <View style={styles.View_4_13}>
          <View style={styles.View_4_14}>
            <Text style={styles.Text_4_14}>Phone Number</Text>
          </View>
        </View>
        <View style={styles.View_4_31}>
          <View style={styles.View_4_26} />
          <View style={styles.View_4_30}>
            <Text style={styles.Text_4_30}>Send OTP</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_4_32}>
        <View style={styles.View_4_33} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c10/ba6e/55fe40e0ade32750c0a6e84a0c67e7d8"
          }}
          style={styles.ImageBackground_4_34}
        />
        <View style={styles.View_4_45}>
          <Text style={styles.Text_4_45}>Google</Text>
        </View>
      </View>
      <View style={styles.View_4_60}>
        <View style={styles.View_4_63} />
        <View style={styles.View_4_61}>
          <Text style={styles.Text_4_61}>Facebook</Text>
        </View>
        <View style={styles.View_4_54}>
          <View style={styles.View_4_55} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d0bc/b3b8/8601865fddcdac8a838751fc0b484f48"
            }}
            style={styles.ImageBackground_4_57}
          />
          <View style={styles.View_4_58}>
            <View style={styles.View_4_59} />
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c3a5/a653/09b3d09d02a08fdfb0cade52c0c040e4"
        }}
        style={styles.ImageBackground_1_5}
      />
      <View style={styles.View_4_137}>
        <View style={styles.View_4_138} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9289/333b/5dd294f3acf0040d58283f221c1b0c20"
          }}
          style={styles.ImageBackground_4_139}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_4_4: {
    width: wp("85.15815085158151%"),
    height: 60,
    minHeight: 60,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.2992700729927%"),
    top: 655,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_4_5: {
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
  View_4_6: {
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
  View_4_18: {
    width: wp("9.732360097323602%"),
    minWidth: wp("9.732360097323602%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.919708029197082%"),
    top: 10,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_4_19: {
    width: wp("9.732360097323602%"),
    height: 40,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_4_21: {
    width: wp("4.37956204379562%"),
    height: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.67639902676399%"),
    top: 11
  },
  View_4_23: {
    width: wp("4.37956204379562%"),
    height: 18,
    top: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.67639902676399%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_4_24: {
    flexGrow: 1,
    width: wp("9.732360097323602%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(130, 130, 130, 1)"
  },
  View_4_13: {
    width: wp("31.386861313868614%"),
    minWidth: wp("31.386861313868614%"),
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.30170316301703%"),
    top: 20,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_4_14: {
    flexGrow: 1,
    width: wp("31.386861313868614%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_4_14: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_31: {
    width: wp("21.897810218978105%"),
    minWidth: wp("21.897810218978105%"),
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.80048661800487%"),
    top: 5
  },
  View_4_26: {
    width: wp("21.897810218978105%"),
    minWidth: wp("21.897810218978105%"),
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(111, 207, 151, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_4_30: {
    flexGrow: 1,
    width: wp("19.06397650131634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8176614803119264%"),
    top: 17.045440673828125
  },
  Text_4_30: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_32: {
    width: wp("38.929440389294406%"),
    minWidth: wp("38.929440389294406%"),
    height: 60,
    minHeight: 60,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.2992700729927%"),
    top: 736
  },
  View_4_33: {
    width: wp("38.929440389294406%"),
    minWidth: wp("38.929440389294406%"),
    height: 60,
    minHeight: 60,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  ImageBackground_4_34: {
    width: wp("9.732360097323602%"),
    height: 40,
    top: 12,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.919708029197082%")
  },
  View_4_45: {
    width: wp("17.761557177615572%"),
    minWidth: wp("17.761557177615572%"),
    minHeight: 26,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.328467153284672%"),
    top: 17
  },
  Text_4_45: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_60: {
    width: wp("38.929440389294406%"),
    minWidth: wp("38.929440389294406%"),
    height: 60,
    minHeight: 60,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.52798053527981%"),
    top: 736
  },
  View_4_63: {
    width: wp("38.929440389294406%"),
    minWidth: wp("38.929440389294406%"),
    height: 60,
    minHeight: 60,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(59, 89, 152, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_4_61: {
    width: wp("24.087591240875913%"),
    minWidth: wp("24.087591240875913%"),
    minHeight: 26,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.922141119221408%"),
    top: 17
  },
  Text_4_61: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_54: {
    width: wp("9.732360097323602%"),
    minWidth: wp("9.732360097323602%"),
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4330900243308946%"),
    top: 10,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_4_55: {
    width: wp("9.732360097323602%"),
    height: 40,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_4_57: {
    width: wp("2.4330900243309004%"),
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.649635036496356%"),
    top: 10
  },
  View_4_58: {
    width: wp("2.4330900243309004%"),
    height: 20,
    top: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.649635036496356%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_4_59: {
    width: wp("9.732360097323602%"),
    height: 40,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_1_5: {
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
  View_4_137: {
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
  View_4_138: {
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
  ImageBackground_4_139: {
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
