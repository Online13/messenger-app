import {
	StyleSheet,
	View,
} from "react-native";
import { useState } from "react";
import { GetDiscussionContainer } from "@/components/containers/get-discussion-container";
import { DiscussionList } from "@/components/organisms/@home/components/discussion-list";
import { Searchbar } from "@/components/organisms/@home/components/search-bar";
import { Header } from "@/components/organisms/@home/components/header";

export default function Page() {
	const [filter, setFilter] = useState("");

	return (
		<View style={styles.root}>
			<Header />
			<Searchbar onChange={setFilter} />
			<GetDiscussionContainer filterBy={filter}>
				{(discussions) => <DiscussionList data={discussions} />}
			</GetDiscussionContainer>
		</View>
	);
}

const styles = StyleSheet.create({
	root: {
		flex: 1,
	},
});
