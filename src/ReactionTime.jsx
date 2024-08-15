import React, { useState, useEffect } from 'react';

const ReactionTime = () => {
    const [isActive, setIsActive] = useState(false);
    const [reactionTime, setReactionTime] = useState(null);
    const [startTime, setStartTime] = useState(null);
    const [buttonText, setButtonText] = useState('Click to Start');
    const [buttonClass, setButtonClass] = useState('btn btn-primary btn-lg');

    useEffect(() => {
        let timer;
        if (isActive) {
            timer = setTimeout(() => {
                setButtonClass('btn btn-danger btn-lg');
                setButtonText('Click Now!');
                setStartTime(Date.now());
            }, Math.floor(Math.random() * 5000) + 2000);
        }

        return () => clearTimeout(timer);
    }, [isActive]);

    const handleClick = () => {
        if (!isActive) {
            setIsActive(true);
            setButtonText('Wait for Color Change...');
            setButtonClass('btn btn-primary btn-lg');
            setReactionTime(null);
        } else if (buttonClass.includes('btn-danger')) {
            const endTime = Date.now();
            setReactionTime(endTime - startTime);
            setIsActive(false);
            setButtonText('Click to Start');
            setButtonClass('btn btn-success btn-lg');
        } else {
            setIsActive(false);
            setButtonText('Too Soon! Click to Retry');
            setButtonClass('btn btn-warning btn-lg');
        }
    };

    return (
        <div className="d-flex flex-column align-items-center justify-content-center vh-100">
            <h1 className="text-center mb-4">Reaction Time Tester</h1>
            <button
                onClick={handleClick}
                className={buttonClass}
                style={{
                    width: '80%',
                    maxWidth: '300px',
                    height: '80%',
                    maxHeight: '300px',
                    fontSize: '1.5rem'
                }}
            >
                {buttonText}
            </button>
            {reactionTime && (
                <div className="mt-4">
                    <h2>Your Reaction Time: {reactionTime} ms</h2>
                </div>
            )}
        </div>
    );
};

export default ReactionTime;
