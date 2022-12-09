import React from "react";
import styles from "../styles/ProjectCard.module.scss";

type ProjectCardProps = {
	name: string;
	summary: string;
	url: string;
	languages: string[];
};

function ProjectCard(props: ProjectCardProps) {
	return (
		<li
			className={`flex flex-col gap-4 p-4 w-full lg:w-[calc(50%-1rem)] 2xl:w-[calc(33.333%-1.34rem)] shadow-black shadow-2xl rounded-md list-none cursor-pointer ${styles.card} ${styles.grow}`}
			tabIndex={0}
			onClick={() => {
				window.open(props.url.toString());
			}}
			onKeyPress={(e) => {
				if (e.key == "Enter") window.open(props.url.toString());
			}}
			title={`link to ${props.name} on github`}
			role='link listitem'
		>
			<h3
				className='w-full text-xl text-left break-words border-b pb-4'
				title='project name'
			>
				{props.name}
			</h3>

			<p className='text-sm text-left flex-grow' title='project summary'>
				{props.summary ? props.summary : "Just checkout the github"}
			</p>

			<ul className='flex flex-wrap gap-1' title='project languages'>
				{props.languages.map((e, ind) => {
					return (
						<li key={ind} className={`rounded-full ${styles.puck}`}>
							<div
								className={`py-2 px-4 text-xs text-transparent bg-clip-text font-medium ${styles.background}`}
							>
								{e.toString()}
							</div>
						</li>
					);
				})}
			</ul>
		</li>
	);
}


export default ProjectCard;
