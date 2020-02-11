import Layout from '../components/Layout';
import NextNprogress from 'nextjs-progressbar';

const Index = () => {
	return (
		<React.Fragment>
			<NextNprogress color="#008eaa" />
			<Layout>
				<h2>Index</h2>
			</Layout>
		</React.Fragment>
	);
};

export default Index;
