
export default (context, variableName, cb, interval=50) => {
    let checkVariable = () => {
        if (context[variableName]) {
            cb();
        } else {
            setTimeout(checkVariable, interval);
        }
    }
}
