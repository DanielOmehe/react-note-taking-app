import NotesAppContext from "../context";
import NotesApp from "../components";

const NoteTakingApp = () => {
  return (
    <NotesAppContext>
      <NotesApp />
    </NotesAppContext>
  );
};

export default NoteTakingApp;
