import { Discussion } from "@/type";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { DiscussionView } from "./discussion-view";


function DiscussionListEmptyView() {
	return (
		<View style={styles.discussionListEmptyViewRoot}>
			<Text>No discussion...</Text>
		</View>
	);
}

type DiscussionListProps = {
	data: Discussion[];
};

export function DiscussionList({ data }: DiscussionListProps) {
	return (
		<View style={styles.discussionList}>
			<FlatList
				contentContainerStyle={styles.discussionFlatList}
				data={data}
				keyExtractor={(item) => item.id}
				ListEmptyComponent={DiscussionListEmptyView}
				renderItem={({ item }) => <DiscussionView {...item} />}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	discussionList: {
		flex: 1,
		paddingTop: 12,
		backgroundColor: "white",
	},
	discussionFlatList: {
		gap: 12,
		flexGrow: 1,
		paddingBottom: 70,
		paddingHorizontal: 27,
	},
	discussionListEmptyViewRoot: {
		flex: 1,
		width: "100%",
		height: "100%",
		justifyContent: "center",
		alignItems: "center",
	},
});
