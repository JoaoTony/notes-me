import Layout from '@/styles/layouts/default';
import SignIn from '@/pages/sign-in';
import { GlobalStyle } from '@/styles/global.styles';

function App() {
  return (
    <Layout>
      <GlobalStyle />
      <SignIn />
    </Layout>
  );
}

export default App;
