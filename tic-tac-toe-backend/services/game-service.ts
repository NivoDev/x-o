import Game from '../models/game';
import {Types} from 'mongoose';

function getRandomCode() {
	return parseInt(Math.random().toString().substring(2)).toString().substring(0, 6);
}

export function createGameFromPlayer(playerName): Promise<any> {
	// store a new game at the database
	// return game object

	const game = new Game({
		code: getRandomCode(),
		playerA: {
			identifier: Types.ObjectId(),
			name: playerName,
			wins: 0
		}
	});

	return game.save();
}

export async function joinGamePlayer(game, playerName) {
	// store a new game at the database
	// return game object

	return {
		...game,
		code: null,
		playerB: {
			identifier: 'ari987yufsdugyf',
			name: playerName,
			wins: 0
		},
		xSign: null,
		currentTurn: null,
		board: [['', '', ''], ['', '', ''], ['', '', '']]
	};
}

export function getGameByIdentifier(player, playerIdentifier) {
	return Game.findOne({
		[`player${player.toUpperCase()}.identifier`]: Types.ObjectId(playerIdentifier)
	})
}

export function getGameByCode(code) {
	return Game.findOne({code})
}
