import React from 'react';

export interface CardProps {
	type: string;
	date: string;
	title: string;
	tags: string[];
	author: string;
}

const Card: React.FC<CardProps> = (props: CardProps) => {
	return (
		<div className='card-wrapper'>
      <p>
        <span className='type'>{props.type}</span>
        <span className="date">{props.date}</span>
      </p>
		</div>
	);
};

export default Card;
