import React from 'react'

export interface CardProps {
    
}

const Card: React.FC<CardProps> = (props: CardProps) => {
    return (
        <div className="card-wrapper">
            <span className="type"></span>
        </div>
    )
}

export default Card