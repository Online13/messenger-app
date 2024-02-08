import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import {Feather, FontAwesome, FontAwesome5 , AntDesign ,MaterialIcons  } from '@expo/vector-icons';

export default function Page() {
  return(
  <View>
    <View style={[styles.flex,styles.spacebetween, styles.header]}>
      <Text style={styles.headerTitle}>Settings</Text>
      <Feather name="moon" size={28} color="black" />
    </View>
    <View style={styles.info}>
      <View>
        <Image style={styles.profilImage} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGeYCl1zuDIBzoAGV-Isbahh6xmIDclTBs5A&usqp=CAU'}}/>
        <View style={styles.camIcon}>
          <FontAwesome name="camera" size={15} color="white" style={styles.cameraIcon}/>
        </View>
      </View>
      <Text style={styles.name}>Fateme Zafarpour</Text>
      <Text style={styles.textNumber}>+261 34 93 779 53</Text>
    </View>
    <View style={[styles.listMenu, styles.flex]}>
      <TouchableOpacity style={[styles.flex, styles.spacebetween, styles.menu]}>
        <View style={[styles.flex, styles.spacebetween]}>
          <FontAwesome5 name="user-circle" size={24} color="#a5adba" style={styles.detailIcon}/>
          <Text style={styles.textMenu}>Account</Text>
        </View>
        <AntDesign name="right" size={24} color="#a5adba" />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.flex, styles.spacebetween, styles.menu]}>
        <View style={[styles.flex, styles.spacebetween]}>
          <MaterialIcons name="security" size={24} color="#a5adba" style={styles.detailIcon}/>
          <Text style={styles.textMenu}>Privacy and Security</Text>
        </View>
        <AntDesign name="right" size={24} color="#a5adba" />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.flex, styles.spacebetween, styles.menu]}>
        <View style={[styles.flex, styles.spacebetween]}>
          <AntDesign name="questioncircleo" size={24} color="#a5adba" style={styles.detailIcon}/>
          <Text style={styles.textMenu}>FAQ</Text>
        </View>
        <AntDesign name="right" size={24} color="#a5adba" />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.flex, styles.spacebetween, styles.menu]}>
        <View style={[styles.flex, styles.spacebetween]}>
          <Feather name="mail" size={24} color="#a5adba" style={styles.detailIcon}/>
          <Text style={styles.textMenu}>Contact Us</Text>
        </View>
        <AntDesign name="right" size={24} color="#a5adba" />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.flex, styles.spacebetween, styles.menu]}>
        <View style={[styles.flex, styles.spacebetween]}>
          <Feather name="users" size={24} color="#a5adba" style={styles.detailIcon}/>
          <Text style={styles.textMenu}>Invite Friends</Text>
        </View>
        <AntDesign name="right" size={24} color="#a5adba" />
      </TouchableOpacity>
    </View>
  </View>
  );
}

const styles=StyleSheet.create({
  flex:{
    display:"flex",
  },
  profilImage:{
    width:110,
    height:110,
    borderRadius:300
  },
  cameraIcon:{
    backgroundColor:"#176ef9",
    padding:10,
    borderRadius:20
  },
  camIcon:{
    alignItems: 'flex-start',
    position:"absolute",
    bottom:0,
    right:0
  },
  info:{
    display:"flex",
    alignItems:"center",
    backgroundColor:"white",
    paddingVertical:40
  },
  spacebetween:{
    justifyContent:"space-between",
    flexDirection:"row"
  },
  header:{
    paddingHorizontal:20,
    paddingVertical:10,
    borderBottomColor:"#a5adba",
    borderBottomWidth:0.5,
    backgroundColor:"white"
  },
  headerTitle:{
    fontSize:22,
    fontWeight:"500"
  },
  detailIcon:{
  },
  name:{
    fontSize:18,
    fontWeight:"500",
    marginTop:10,
    marginBottom:5
  },
  textNumber:{
    color:"#a5adba"
  },
  listMenu:{
    marginTop:20,
    gap:1
  },
  menu:{
    backgroundColor:"white",
    paddingVertical:15,
    paddingHorizontal:25
  },
  textMenu:{
    marginLeft:20,
    fontSize:16,
    fontWeight:"400"
  }
})
