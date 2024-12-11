import React from 'react';

interface CircularRatingProps {
    rating: number;
    size?: number; // Tamaño opcional, en píxeles
}

const CircularRating: React.FC<CircularRatingProps> = ({ rating, size = 100 }) => {
    const normalizedRating = Math.max(0, Math.min(100, Math.round(rating)));
    const radius = size / 2 - 10; // Radio calculado en función del tamaño
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (normalizedRating / 100) * circumference;

    // Colores específicos
    const red = '#E54545';
    const green = '#4DA14F';

    // Elegir color basado en el rating
    const color = normalizedRating >= 50 ? green : red;


    return (
        <div style={{ position: 'relative', width: size, height: size, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <svg width={size} height={size}>
                <circle cx={size / 2} cy={size / 2} r={radius} stroke="#e6e6e6" strokeWidth="4" fill="none" />
                <circle cx={size / 2} cy={size / 2} r={radius} stroke={color} strokeWidth="4" 
                    fill="none" 
                    strokeDasharray={circumference} 
                    strokeDashoffset={offset} 
                    style={{ transition: 'stroke-dashoffset 0.5s ease-in-out' }} 
                />
            </svg>
            <div style={{ position: 'absolute', fontSize: size / 6, fontWeight: 'bold', color: '#fff' }}>
                {normalizedRating}%
            </div>
        </div>
    );
};

export default CircularRating;
