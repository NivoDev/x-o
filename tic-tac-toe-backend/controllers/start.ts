import {getGameByCode, getGameByIdentifier, joinGamePlayer} from '../services/game-service';

export default async function startGame(req, res) {
	//
	const {playerName, code} = req.body || {};
	const identifier = req.headers.token && req.headers.token.substring(1);

	if (identifier) {
		const game = await getNewGameForPlayerA(identifier);
		res.json(game);
	} else if (playerName && code) {
		const game = await getNewGameForPlayerB(playerName, code);
		res.json(game);
	} else {
		return res.status(400).send({message: 'you should fill the game code and your name'});
	}
}

async function getNewGameForPlayerA(identifier) {
	const game = await getGameByIdentifier('A', identifier);

	return {
		identifier: identifier,
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
	};
}

async function getNewGameForPlayerB(playerName, code) {
	const game = await getGameByCode(code);

	if (game.playerB) {
		throw new Error('this game is already full');
	
	}
	
	const updatedGame = joinGamePlayer(game, playerName);

	return {
		identifier: "B" + updatedGame.playerB.identifier.toString(),
		me: {
		  name: updatedGame.playerB.name,
		  wins: updatedGame.playerB.wins
		},
		opponent:{ 
		  name: updatedGame.playerA.name,
		  wins: updatedGame.playerA.wins
		},
		isMyTurn: updatedGame.currentTurn === "B",
		mySign: updatedGame.xSign === "B" ? "x" : "o",
		board: updatedGame.board
	};
}