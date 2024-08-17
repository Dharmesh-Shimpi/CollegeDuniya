import ReduxProvider from './redux/reduxProvider';
import Main from './Main/Main';
import Navbar from './Main/Navbar/Navbar';

export default function Home() {
	return (
		<ReduxProvider>
			<main className="flex flex-col">
				<Navbar />
				<Main />
			</main>
		</ReduxProvider>
	);
}
