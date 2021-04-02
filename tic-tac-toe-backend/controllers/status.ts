import {getGameByIdentifier} from "../services/game-service";

export default async function gameStatus(req, res) {
	const token = req.headers.token;

	const player = token[0];
	const identifier = token.substring(1);
	

	const game = await getGameByIdentifier(player,identifier)
	res.json(player === "A" ? getGameForPlayerA(game) : getGameForPlayerB(game))
}
function getGameForPlayerA(game){
	return{
		identifier:  "A" + game.playerA.identifier.toString(),
		me: {
		  name: game.playerA.name,
		  wins: game.playerA.wins
		},
		opponent:{ 
		  name: game.playerB.name,
		  wins: game.playerB.wins
		},
		isMyTurn: game.currentTurn === "A",
		mySign: game.xSign === "A" ? "x" : "o",
		board: game.board
	}
}
function getGameForPlayerB(game){
	return{
		identifier:  "B" + game.playerB.identifier.toString(),
		me: {
		  name: game.playerB.nBme,
		  wins: game.playerB.wins
		},
		opponent:{ 
		  name: game.playerA.name,
		  wins: game.playerA.wins
		},
		isMyTurn: game.currentTurn === "B",
		mySign: game.xSign === "B" ? "x" : "o",
		board: game.board
	}
}