import { NewWindowIcon } from '@assets/svg/NewWindowIcon';
import scss from './results.module.scss';
import PlayButton from '@components/PlayButton/PlayButton';
import { Fragment } from 'react';

type ResultsProps = {
	data: {
		word: string;
		phonetic: string;
		phonetics: [
			{
				audio: string;
			}
		];
		meanings: {
			partOfSpeech: string;
			definitions: {
				definition: string;
				example: string;
			}[];
			example: string;
			synonyms: string[];
		}[];
		sourceUrls: string;
	};
};

export default function Results({ data }: ResultsProps) {
	return (
		<div className={scss.results}>
			<div className={scss.resultsHeader}>
				<div className={scss.title}>
					<h1>{data.word}</h1>
					<div className={scss.pronunciation}>{data.phonetic}</div>
				</div>
				<PlayButton phonetics={data.phonetics} />
			</div>
			<div className={scss.resultsDetails}>
				{data.meanings.map((meaning, i) => (
					<div
						key={i}
						className={scss.meanings}
					>
						<div className={scss.header}>
							<h2>{meaning.partOfSpeech}</h2>
							<span></span>
						</div>
						<h3>Meaning</h3>
						<ul className={scss.definitions}>
							{meaning.definitions.map((definition, i) => (
								<Fragment key={i}>
									<li>{definition.definition}</li>
									{definition.example && (
										<li className={scss.example}>
											&ldquo;{definition.example}&rdquo;
										</li>
									)}
								</Fragment>
							))}
						</ul>

						{meaning.synonyms.length > 0 && (
							<div className={scss.synonyms}>
								<>
									<h3>Synonyms</h3>
									<ul>
										{meaning.synonyms.map((synonym: string, i) => (
											<li key={i}>{synonym}</li>
										))}
									</ul>
								</>
							</div>
						)}
					</div>
				))}
				<div className={scss.source}>
					<span>Source</span>
					<a
						href={data.sourceUrls}
						target='_blank'
					>
						{data.sourceUrls}
						<NewWindowIcon />
					</a>
				</div>
			</div>
		</div>
	);
}
