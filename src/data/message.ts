import { Message } from "@/type";

const messages1: Message[] = [
	{
		content: "Bonjour tout le monde ! Comment ça va ?",
		owner: { name: "Alice", id: "1" },
		type: "text",
		discussionId: "1",
	},
	{
		content: "Salut Alice, ça va bien merci ! Et toi ?",
		owner: { name: "Bob", id: "2" },
		type: "text",
		discussionId: "1",
	},
	{
		content: "Ça va aussi, merci !",
		owner: { name: "Alice", id: "1" },
		type: "text",
		discussionId: "1",
	},
	{
		content: "Qu'avez-vous prévu pour la journée ?",
		owner: { name: "Charlie", id: "3" },
		type: "text",
		discussionId: "1",
	},
	{
		content: "Je dois terminer le rapport pour la réunion de demain.",
		owner: { name: "Alice", id: "1" },
		type: "text",
		discussionId: "1",
	},
	{
		content: "Je vais travailler sur le nouveau projet.",
		owner: { name: "Bob", id: "2" },
		type: "text",
		discussionId: "1",
	},
	{
		content: "Moi, je vais passer du temps avec ma famille.",
		owner: { name: "Charlie", id: "3" },
		type: "text",
		discussionId: "1",
	},
	{
		content: "Ça a l'air d'une bonne journée chargée pour chacun !",
		owner: { name: "Alice", id: "1" },
		type: "text",
		discussionId: "1",
	},
	{
		content: "Oui, en effet. Mais c'est toujours mieux que de s'ennuyer !",
		owner: { name: "Bob", id: "2" },
		type: "text",
		discussionId: "1",
	},
	{
		content:
			"Absolument ! La diversité des tâches rend la journée intéressante.",
		owner: { name: "Alice", id: "1" },
		type: "text",
		discussionId: "1",
	},
	{
		content: "C'est sûr. Comment se déroule le nouveau projet, Bob ?",
		owner: { name: "Charlie", id: "3" },
		type: "text",
		discussionId: "1",
	},
	{
		content:
			"Plutôt bien jusqu'à présent. Nous avons déjà quelques idées prometteuses.",
		owner: { name: "Bob", id: "2" },
		type: "text",
		discussionId: "1",
	},
	{
		content:
			"C'est génial à entendre. J'ai hâte de voir ce que vous allez réaliser.",
		owner: { name: "Alice", id: "1" },
		type: "text",
		discussionId: "1",
	},
	{
		content:
			"Merci, Alice. Nous vous tiendrons au courant de notre progression.",
		owner: { name: "Bob", id: "2" },
		type: "text",
		discussionId: "1",
	},
	{
		content: "Parfait. Bonne chance à tous pour vos tâches du jour !",
		owner: { name: "Charlie", id: "3" },
		type: "text",
		discussionId: "1",
	},
	{
		content: "Merci, Charlie. À plus tard !",
		owner: { name: "Alice", id: "1" },
		type: "text",
		discussionId: "1",
	},
];

const messages2: Message[] = [
	{
		content: "Rappel : Réunion d'équipe aujourd'hui à 14h.",
		owner: { name: "Charlie", id: "3" },
		type: "text",
		discussionId: "2",
	},
	{
		content: "D'accord, merci pour le rappel !",
		owner: { name: "David", id: "4" },
		type: "text",
		discussionId: "2",
	},
];

const messages3: Message[] = [
	{
		content: "Toujours en train de travailler sur la documentation.",
		owner: { name: "Eva", id: "5" },
		type: "text",
		discussionId: "3",
	},
];

const messages4: Message[] = [
	{
		content: "Merci de vérifier les dernières maquettes de conception.",
		owner: { name: "Frank", id: "6" },
		type: "text",
		discussionId: "4",
	},
];

const messages5: Message[] = [
	{
		content: "Quels sont les projets de chacun pour le week-end ?",
		owner: { name: "Grace", id: "7" },
		type: "text",
		discussionId: "5",
	},
	{
		content: "Je vais aller faire une randonnée !",
		owner: { name: "Henry", id: "8" },
		type: "text",
		discussionId: "5",
	},
];

const messages6: Message[] = [
	{
		content: "Qui est disponible pour la réunion de planification ?",
		owner: { name: "Alice", id: "1" },
		type: "text",
		discussionId: "6",
	},
	{
		content: "Je suis disponible toute la matinée.",
		owner: { name: "Bob", id: "2" },
		type: "text",
		discussionId: "6",
	},
	{
		content: "Je peux être là aussi.",
		owner: { name: "Charlie", id: "3" },
		type: "text",
		discussionId: "6",
	},
	{
		content: "Super, on se retrouve à quelle heure ?",
		owner: { name: "Alice", id: "1" },
		type: "text",
		discussionId: "6",
	},
];

const messages7: Message[] = [
	{
		content: "Préparez vos idées pour la séance de brainstorming demain !",
		owner: { name: "David", id: "4" },
		type: "text",
		discussionId: "7",
	},
	{
		content: "J'ai quelques idées que je voudrais partager.",
		owner: { name: "Eva", id: "5" },
		type: "text",
		discussionId: "7",
	},
	{
		content: "Génial, hâte de les entendre !",
		owner: { name: "Frank", id: "6" },
		type: "text",
		discussionId: "7",
	},
];

const messages8: Message[] = [
	{
		content: "La présentation client est reportée à la semaine prochaine.",
		owner: { name: "Grace", id: "7" },
		type: "text",
		discussionId: "8",
	},
	{
		content: "D'accord, merci pour l'info !",
		owner: { name: "Henry", id: "8" },
		type: "text",
		discussionId: "8",
	},
];

const messages9: Message[] = [
	{
		content:
			"N'oubliez pas la formation sur les nouvelles fonctionnalités cet après-midi.",
		owner: { name: "Ivy", id: "9" },
		type: "text",
		discussionId: "9",
	},
];

const messages10: Message[] = [
	{
		content: "Rendez-vous à la machine à café pour une pause bien méritée !",
		owner: { name: "Jack", id: "10" },
		type: "text",
		discussionId: "10",
	},
	{
		content: "Je vous rejoins dans quelques minutes.",
		owner: { name: "Katie", id: "11" },
		type: "text",
		discussionId: "10",
	},
];

export const MESSAGES: Message[] = [
	...messages1,
	...messages2,
	...messages3,
	...messages4,
	...messages5,
	...messages6,
	...messages7,
	...messages8,
	...messages9,
	...messages10,
];
