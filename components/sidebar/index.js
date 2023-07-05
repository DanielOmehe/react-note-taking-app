import React from "react";
import {
  NoteSidebarWrapper,
  NoteSidebarHeader,
  AddNewNotesContainer,
  AddNewNotes,
} from "./style";
import { NoteIcons } from "../utils/style";
import RecentNotes from "./recents";
import Folders from "./folders";
import MoreItems from "./more";

const NoteSidebar = () => {
  return (
    <NoteSidebarWrapper>
      <NoteSidebarHeader>
        <NoteIcons src="icons/nowted.svg" alt="logo" />
        <NoteIcons src="icons/search.svg" alt="search" />
      </NoteSidebarHeader>
      <AddNewNotesContainer>
        <AddNewNotes>
          <NoteIcons src="icons/plus.svg" alt="noted" />
          <h3>New Note</h3>
        </AddNewNotes>
      </AddNewNotesContainer>
      <RecentNotes />
      <Folders />
      <MoreItems />
    </NoteSidebarWrapper>
  );
};

export default NoteSidebar;
