import NxWelcome from './nx-welcome';
import { NativeBaseProvider, Button } from 'native-base';

export const App = () => (
  <>
    <NxWelcome title="app-web" />
    <NativeBaseProvider>
      <Button>Cool</Button>
    </NativeBaseProvider>
  </>
);
