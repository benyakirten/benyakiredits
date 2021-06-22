const defaultState: OptionsState = {
    showControls: true,
    toggleControls: () => {},
    showDescription: true,
    toggleDescription: () => {},
    shownItem: {
        path: '',
        id: '',
        name: '',
        description: '',
        meta: ['']
    },
    setShowcaseItem: () => {}
};

export default defaultState;