import { MESSAGES } from "@/data/message";
import { Message } from "@/type";
import { ReactNode } from "react";

export function GetMessageOfDiscussionContainer({
	discussionId,
	children,
}: {
	discussionId: string;
	children(messages: Message[]): ReactNode;
}) {
	console.log(discussionId);
	return children(
		MESSAGES.filter((message) => message.discussionId === discussionId)
	);
}
