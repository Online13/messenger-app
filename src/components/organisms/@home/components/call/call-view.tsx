import { Call } from "@/type";
import { Link } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Feather } from '@expo/vector-icons';

type CallViewProps = Call;


function formatSeconds(totalSeconds:number) {
	const minutes = Math.floor(totalSeconds /  60);
	const seconds = totalSeconds %  60;
  
	// Formatter les minutes pour inclure le 's' seulement s'il y a plus d'une minute
	const minutesFormatted = minutes >  0 ? `${minutes}m ` : '';
  
	// Formatter les secondes pour toujours inclure le 's'
	const secondsFormatted = `${seconds}s `;
  
	// Combiner les deux parties avec une virgule entre elles
	return `${minutesFormatted}${minutesFormatted && secondsFormatted ? '' : ''}${secondsFormatted}`;
}


export function CallView({
	id,
	name,
	datetime,
	type,
	duration,
}: CallViewProps) {
	
	return (
		<Link href={`/Call/${id}`} asChild>
			<TouchableOpacity style={styles.CallViewRoot}>
				<View style={styles.CallView}>
					{/* PDP */}
					<View style={styles.pdp}>
						<Image
							style={styles.image}
							source={{
								uri: `https://i.pravatar.cc/150?img=${id}`,
							}}
						/>
					</View>
					{/* about */}
					<View style={styles.CallAbout}>
						{/* name --- date */}
						<View style={styles.CallAboutContent}>
							<Text style={styles.CallName}>{name}</Text>
							<Text style={styles.small}>{formatSeconds(duration)}</Text>
						</View>
						{/* last Call */}
						<View style={styles.lastCall}>
							{type=="in"?<Feather name="arrow-up-right" size={24} color="#40F8FF" />:<Feather name="arrow-down-right" size={24} color="red" />}<Text numberOfLines={1} style={styles.small}>{datetime}</Text>
						</View>
					</View>
				</View>
			</TouchableOpacity>
		</Link>
	);
}


const styles = StyleSheet.create({
	CallViewRoot: {
		flex: 1,
		width: "100%",
		marginBottom:5
	},
	CallView: {
		gap: 12,
		width: "100%",
		flexDirection: "row",
		paddingVertical: 6,
		paddingHorizontal:20
	},
	pdp: {
		aspectRatio: 1,
		height: 50,
		borderRadius: 50,
		backgroundColor: "silver",
		overflow: "hidden",
	},
	image: {
		width: "100%",
		height: "100%",
	},
	lastCall:{
		display:"flex",
		flexDirection:"row",
		gap:5
	},
	CallAbout:{
		width:"85%",
		gap:10
	},
	CallAboutContent:{
		display:"flex",
		flexDirection:"row",
		alignItems: "center",
		justifyContent: "space-between",

	},
	CallName:{
		fontSize:16,
		fontWeight:"500"
	},
	small:{
		color:"#7b8493"
	}
});
