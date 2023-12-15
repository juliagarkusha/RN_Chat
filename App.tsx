// External deps
import { ReactElement } from 'react';

// Internal deps
import ChatList from "./src/screens/ChatList";
import Default from "./src/layouts/Default/Default";
import ThemeProvider from "./src/contexts/Theme";
import ChatsProvider from "./src/contexts/Chats";

const App = (): ReactElement => {
  return (
      <ThemeProvider>
          <ChatsProvider>
              <Default>
                  <ChatList />
              </Default>
          </ChatsProvider>
      </ThemeProvider>
  );
}

export default App;
