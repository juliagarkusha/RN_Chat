// External deps
import { ReactElement } from 'react';

// Internal deps
import ChatList from "./src/screens/ChatList";
import Default from "./src/layouts/Default/Default";
import ThemeProvider from "./src/contexts/Theme";

const App = (): ReactElement => {
  return (
      <ThemeProvider>
          <Default>
            <ChatList />
          </Default>
      </ThemeProvider>
  );
}

export default App;
