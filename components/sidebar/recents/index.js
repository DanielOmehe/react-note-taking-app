import React from "react";
import { RecentNotesContainer, RecentNotesWrapper, RecentNote } from "./style";
import { recents } from "../../../data";
import { NoteIcons } from "../../utils/style";

const RecentNotes = () => {
  return (
    <RecentNotesWrapper>
      <h3>Recent</h3>
      <RecentNotesContainer>
        {recents.map(({ text, url }) => (
          <RecentNote>
            <NoteIcons src={url} />
            <p>{text}</p>
          </RecentNote>
        ))}
      </RecentNotesContainer>
    </RecentNotesWrapper>
  );
};

export default RecentNotes;
