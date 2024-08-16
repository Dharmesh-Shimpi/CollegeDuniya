import Body from './components/Body/Body';
import Provider from './redux/reduxProvider';

export default function Home() {
	return (
		<Provider>
			<main className="flex flex-col">
				<Body />
			</main>
		</Provider>
	);
}
