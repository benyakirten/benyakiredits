// ****************** FADE TRANSITIONS *****************

// Simple fade
export const simpleFade: TransitionStyle = {
    entering: { opacity: 0, transform: 'scaleY(1)' },
    entered: { opacity: 1, transform: 'scaleY(1)' },
    exiting: { opacity: 1 },
    exited: { opacity: 0 },
    unmounted: { opacity: 0, transform: 'scaleY(1)' },
    default: { opacity: 1, transform: 'scaleY(1)', transition: 'all 0.4s linear' }
}

// ***************** HYBRID FADE/STRETCH TRANSITIONS ****************
// Fade in and shrink to normal size
export const fadeStretchOut: TransitionStyle = {
    entering: { opacity: 0, transform: 'scaleY(4)' },
    entered: { opacity: 1, transform: 'scaleY(1)' },
    exiting: { opacity: 1 },
    exited: { opacity: 0 },
    unmounted: { opacity: 0, transform: 'scaleY(4)' },
    default: { opacity: 1, transform: 'scaleY(1)', transition: 'all 0.4s linear' }
}

export const fadeStretchOutAndLeft: TransitionStyle = {
    entering: { opacity: 0, transform: 'scale(0.25)' },
    entered: { opacity: 1, transform: 'scale(1)' },
    exiting: { opacity: 1, transform: 'scale(1)' },
    exited: { opacity: 0, transform: 'scale(0.25)' },
    unmounted: { opacity: 0, transform: 'scale(0.25)' },
    default: {
        opacity: 1,
        transform: 'scale(1)',
        transformOrigin: "top right",
        transition: 'all 3s ease'
    } 
}

// ***************** HYBRID FADE/FOLD TRANSITIONS ****************
// Fold from top left to bottom right during fade
export const fadeFoldTopLeft: TransitionStyle = {
    entering: { opacity: 0, transform: 'scale(0)' },
    entered: { opacity: 1, transform: 'scale(1)' },
    exiting: { opacity: 1, transform: 'scale(1)' },
    exited: { opacity: 0, transform: 'scale(0)' },
    unmounted: { opacity: 0, transform: 'scale(0)' },
    default: { opacity: 1, transition: 'all 0.4s ease', transformOrigin: 'top right' }   
}

// Fold from top right to bottom left during fade
export const fadeFoldTopRight: TransitionStyle = {
    entering: { opacity: 0, transform: 'scale(0)' },
    entered: { opacity: 1, transform: 'scale(1)' },
    exiting: { opacity: 1, transform: 'scale(1)' },
    exited: { opacity: 0, transform: 'scale(0)' },
    unmounted: { opacity: 0, transform: 'scale(0)' },
    default: { opacity: 1, transition: 'all 0.4s ease', transformOrigin: 'top left' }   
}

// ****************** SLIDE ANIMATIONS ********************
export const slideLeftToRight: TransitionStyle = {
    entering: { transform: 'translateX(-100%)' },
    entered: { transform: 'translateX(0)' },
    exiting: { transform: 'translateX(0)' },
    exited: { transform: 'translateX(100%)' },
    unmounted: { transform: 'translateX(100%)' },
    default: { transform: 'translateX(0)', transition: 'all 0.4s ease' }
}

export const slideFromRightThenBack: TransitionStyle = {
    entering: { transform: 'translateX(100%)' },
    entered: { transform: 'translateX(0)' },
    exiting: { transform: 'translateX(0)' },
    exited: { transform: 'translateX(100%)' },
    unmounted: { transform: 'translateX(100%)' },
    default: { transform: 'translateX(0)', transition: 'all 0.4s ease' }
}

// ****************** STRETCH TRANSITIONS *****************
// Stretch right

export const stretchRight: TransitionStyle = {
    entering: { transform: 'scaleX(0)' },
    entered: { transform: 'scaleX(1)' },
    exiting: { transform: 'scaleX(1)' },
    exited: { transform: 'scaleX(0)' },
    unmounted: { transform: 'scaleX(0)' },
    default: { transform: 'scaleX(1)', transition: 'all 0.4s ease', transformOrigin: 'left' }
}

export const stretchLeft: TransitionStyle = {
    entering: { transform: 'scaleX(0)' },
    entered: { transform: 'scaleX(1)' },
    exiting: { transform: 'scaleX(1)' },
    exited: { transform: 'scaleX(0)' },
    unmounted: { transform: 'scaleX(0)' },
    default: { transform: 'scaleX(1)', transition: 'all 0.4s ease', transformOrigin: 'right' }
}

export const stretchUp: TransitionStyle = {
    entering: { transform: 'scaleY(0)' },
    entered: { transform: 'scaleY(1)' },
    exiting: { transform: 'scaleY(1)' },
    exited: { transform: 'scaleY(0)' },
    unmounted: { transform: 'scaleY(0)' },
    default: { transform: 'scaleY(1)', transition: 'all 0.4s ease', transformOrigin: 'bottom' }
}

export const stretchDown: TransitionStyle = {
    entering: { transform: 'scaleY(0)' },
    entered: { transform: 'scaleY(1)' },
    exiting: { transform: 'scaleY(1)' },
    exited: { transform: 'scaleY(0)' },
    unmounted: { transform: 'scaleY(0)' },
    default: { transform: 'scaleY(1)', transition: 'all 0.4s ease', transformOrigin: 'top' }
}
