'use client';

import { PlayIcon } from '@assets/svg/PlayIcon';
import scss from './playButton.module.scss';

type PlayButtonProps = {
	phonetics: [
		{
			audio: string;
		}
	];
};

export default function PlayButton({ phonetics }: PlayButtonProps) {
	const object = phonetics.find((obj: { audio: string }) => obj.audio !== '');
	const audio = object?.audio;

	function playAudio() {
		const audioElement = new Audio(audio);
		audioElement.play();
	}

	if (!audio) {
		return null;
	}

	return (
		<button
			className={scss.playButton}
			onClick={playAudio}
		>
			<PlayIcon />
		</button>
	);
}
