import { DISCUSSION_LIST } from "@/data/discussion";
import { Discussion } from "@/type";
import { ReactNode } from "react";

export function GetDiscussionByIdContainer({
	children,
	id,
}: {
	children(data: Discussion): ReactNode;
	id: string;
}) {
	const discussion = DISCUSSION_LIST.find(
		(discussion) => discussion.id === id
	);
	if (discussion === undefined)
		throw new Error("It's impossible... Error in data...");
	return children(discussion);
}
