import React from 'react';

export default function TestTextBlur() {
    return (
        <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
            {/* Div pour l'arrière-plan flou */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'blue', // Change ça si nécessaire
                filter: 'blur(15px)', // Appliquer le flou
                zIndex: 1
            }} />
            {/* Contenu texte */}
            <div style={{
                position: 'relative',
                zIndex: 10,
                backgroundColor: 'rgba(255, 255, 255, 0.5)', // Légèrement opaque pour le contraste
                padding: '20px',
                borderRadius: '8px',
            }}>
                <h1 style={{ fontSize: '2rem', color: 'black' }}>Texte avec Flou d'Arrière-Plan !</h1>
                <p style={{ color: 'black' }}>Le texte reste lisible tandis que le fond est flou.</p>
            </div>
        </div>
    );
}
