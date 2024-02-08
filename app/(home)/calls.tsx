import { Text, View, Image, StyleSheet } from "react-native";
import {Feather } from '@expo/vector-icons';
import { useState } from "react";
import { GetCallContainer } from "@/components/containers/get-call-container";
import { CallList } from "@/components/organisms/@home/components/call/call-list";

export default function Page() {
  const [filter, setFilter] = useState("");

  return(
  <View style={styles.root}>
    <View style={[styles.flex,styles.spacebetween, styles.header]}>
      <Text style={styles.headerTitle}>Calls</Text>
      <Feather name="search" size={28} color="black" /> 
    </View>
    
    <GetCallContainer filterBy={filter}>
      {(call) => <CallList data={call} />}
    </GetCallContainer>
  </View>
  );
}

const styles=StyleSheet.create({
	root: {
		flex: 1,
	},
  flex:{
    display:"flex",
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
})
