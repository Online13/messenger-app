import { DISCUSSION_LIST } from "@/data/discussion";
import { Discussion } from "@/type";
import { ReactNode } from "react";

export function GetDiscussionContainer({
	children,
	filterBy,
}: {
	children(data: Discussion[]): ReactNode;
	filterBy: string;
}) {
	return children(
		DISCUSSION_LIST.filter((discussion) =>
			new RegExp(filterBy).test(discussion.name)
		)
	);
}
