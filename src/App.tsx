import './App.scss';
import { cardsData } from './cardsData';
import Card from './components/Card';

function App() {
	return (
		<div className='App'>
			<div className='card-layout'>
				{cardsData.map((card) => (
					<Card
						type={card.type}
						date={card.date}
						title={card.title}
						tags={card.tags}
						author={card.author}
					></Card>
				))}
			</div>
		</div>
	);
}

export default App;
