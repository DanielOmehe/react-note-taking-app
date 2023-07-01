import NotesAppContext from "../context";
import NotesApp from "../src/components";

const NoteTakingApp = () => {
  return (
    <NotesAppContext>
      <NotesApp />
    </NotesAppContext>
  );
};

export default NoteTakingApp;
