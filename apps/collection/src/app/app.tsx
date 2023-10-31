// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import NxWelcome from './nx-welcome';
import { Button } from '@kenrey/shared/ui';

export function App() {
  return (
    <div>
      <Button>TEST</Button>
      <NxWelcome title="collection" />
    </div>
  );
}

export default App;
