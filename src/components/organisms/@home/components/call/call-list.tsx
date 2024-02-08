import { Call } from "@/type";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { CallView } from "./call-view";


function CallListEmptyView() {
	return (
		<View style={styles.callListEmptyViewRoot}>
			<Text>No recent call...</Text>
		</View>
	);
}

type CallListProps = {
	data: Call[];
};

export function CallList({ data }: CallListProps) {

	return (
		<View style={styles.callList}>
			<FlatList
				contentContainerStyle={styles.callFlatList}
				data={data}
				keyExtractor={(item) => item.id}
				ListEmptyComponent={CallListEmptyView}
				renderItem={({ item }) => <CallView {...item} />}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	callList: {
		flex: 1,
		paddingTop: 12,
		backgroundColor: "white",
	},
	callFlatList: {
		// gap: 12,
		// flexGrow: 1,
		// paddingBottom: 70,
		// paddingHorizontal: 27,
	},
	callListEmptyViewRoot: {
		flex: 1,
		width: "100%",
		height: "100%",
		justifyContent: "center",
		alignItems: "center",
	},
});
