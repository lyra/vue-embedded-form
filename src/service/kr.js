let accumulatedCallbacks = {};
let accumulator = (name, args) => {
    if (!accumulatedCallbacks.hasOwnProperty(name)) accumulatedCallbacks[name] = [];

    switch (name) {
        case "setFormConfig":
            if (typeof(window.KR_CONFIGURATION) == "undefined") window.KR_CONFIGURATION = {};
            let confKeys = Object.keys(args);
            confKeys.forEach(key => {
                window.KR_CONFIGURATION[key] = args[key];
            });
            break;
        default:
            accumulatedCallbacks[name].push([name, args]);
            break;
    }
};

let accumulatorCallAll = newAccumulator => {
    let accKeys = Object.keys(accumulatedCallbacks);
    accKeys.forEach(key => {
        let items = accumulatedCallbacks[key];
        items.forEach(item => {
            newAccumulator(...item);
        });
    });
};

export default {
    setFormConfig(configuration) {
        accumulator('setFormConfig', configuration);
    },
    triggerReady() {
        accumulator = (name, args) => {
            window.KR[name](args);
        };

        // Call previous calls and close the accumulator
        accumulatorCallAll(accumulator);
    },
};
