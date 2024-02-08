import { Text, View, Image, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { GetCallContainer } from "@/components/containers/get-call-container";
import { CallList } from "@/components/organisms/@home/components/call/call-list";
import { Header } from "@/components/molecules/header";

export default function Page() {
	const [filter, setFilter] = useState("");

	return (
		<View style={styles.root}>
      <Header
        title="Calls"
        icon={<Feather name="search" size={24} color="black" />}
      />
			<GetCallContainer filterBy={filter}>
				{(call) => <CallList data={call} />}
			</GetCallContainer>
		</View>
	);
}

const styles = StyleSheet.create({
	root: {
		flex: 1,
	},
	flex: {
		display: "flex",
	},
	spacebetween: {
		justifyContent: "space-between",
		flexDirection: "row",
	},
});
