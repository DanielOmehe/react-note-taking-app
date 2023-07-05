import React from "react";
import {
	NotesEditorHeader,
	NotesEditorSection,
	NotesEditorSectionHeader,
	NotesEditorWrapper,
	NotesEditorBody,
} from "./style";
import { NoteIcons } from "../utils/style";

const NotesEditor = () => {
	return (
		<NotesEditorWrapper>
			<NotesEditorHeader>
				<h1>Reflections on the Month of June</h1>
				<NoteIcons
					src="icons/ellipsis.svg"
					alt="ellipsis"
					border={0.1}
					radius={100}
				/>
			</NotesEditorHeader>
			<NotesEditorSection>
				<NotesEditorSectionHeader>
					<NoteIcons src="icons/date.svg" alt="calendar" />
					<p>Date</p>
					<p>21/06/2022</p>
				</NotesEditorSectionHeader>
				<NoteIcons src="icons/line.svg" alt="line" />
			</NotesEditorSection>
			<NotesEditorSection>
				<NotesEditorSectionHeader>
					<NoteIcons src="icons/folder.svg" alt="folder" />
					<p>Folder</p>
					<p>Personal</p>
				</NotesEditorSectionHeader>
				<NoteIcons src="icons/line.svg" alt="line" />
			</NotesEditorSection>
			<NotesEditorSection>
				<NotesEditorSectionHeader>
					<p>Paragraph</p>
					<NoteIcons src="icons/angleDown.svg" alt="folder" />
					<div className="size">
						<small>16</small>{" "}
						<NoteIcons src="icons/angleDown.svg" alt="angle" />
					</div>
					<div className="size">
						<NoteIcons src="icons/bold.svg" alt="bold" />
						<NoteIcons src="icons/italic.svg" alt="italic" />
						<NoteIcons src="icons/underline.svg" alt="underline" />
					</div>
					<div className="size">
						<NoteIcons src="icons/photo.svg" alt="bold" />
						<NoteIcons src="icons/link.svg" alt="link" />
					</div>
					<NoteIcons src="icons/stack.svg" alt="stack" />
				</NotesEditorSectionHeader>
				<NoteIcons src="icons/line.svg" alt="line" />
			</NotesEditorSection>
			<NotesEditorBody>
				<p>
					It's hard to believe that June is already over! Looking back on the
					month, there were a few highlights that stand out to me. One of the
					best things that happened was getting promoted at work. I've been
					working really hard and it's great to see that effort recognized. 
                    
                    It's also exciting to have more responsibility and the opportunity to
					contribute to the company in a bigger way. I'm looking forward to taking on new challenges and learning as much as I can in my new role.

					I also had a great time on my vacation to Hawaii. The beaches were
					beautiful and I loved trying all of the different types of Hawaiian
					food. It was nice to relax and get away from the daily grind for a
					bit. I'm so grateful to have had the opportunity to take a trip like
					that.
                    
                    On the downside, I feel like I didn't make as much progress on
					my fitness goals as I would have liked. I was really busy with work
					and didn't make it to the gym as often as I planned. I'm going to try
					to be more consistent in July and make exercise a higher priority.
                    I know it will be good for my physical and mental health. I also had a
					few rough patches in my relationships this month. I had a couple of
					misunderstandings with friends and it was hard to navigate those
					conflicts.
                    
                    But I'm glad we were able to talk things through and move
					past them. I value my relationships and I want to make sure I'm always
					working to be a good friend. Overall, it was a good month with a mix
					of ups and downs. I'm looking forward to what July has in store! I'm
					hoping to make some more progress on my goals and spend quality time
					with the people I care about.
				</p>
			</NotesEditorBody>
		</NotesEditorWrapper>
	);
};

export default NotesEditor;
