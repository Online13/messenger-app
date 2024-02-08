import { CALL_LIST } from "@/data/call";
import { Call } from "@/type";
import { ReactNode } from "react";

export function GetCallContainer({
	children,
	filterBy,
}: {
	children(data: Call[]): ReactNode;
	filterBy: string;
}) {
	return children(
		CALL_LIST.filter((call) =>
			new RegExp(filterBy).test(call.name)
		)
	);
}
