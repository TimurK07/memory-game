export const GameInfo = ({matchedCards, onReset}) => {
	return (
			<div className='game-info'>
				<div>Matched Pairs: {matchedCards.length / 2}</div>
				<button onClick={onReset}>Reset Game</button>
			</div>
	)
}