import {useState, useEffect} from "react";

export const useShouldDisplay = (inputInfos, watch) => {
    const [shouldDisplay, setShouldDisplay] = useState(!inputInfos.watch);

    let watchField;
    if (inputInfos.watch) {
        watchField = watch(inputInfos.watch.field);
    }
    useEffect(() => {
        if (inputInfos.watch) {
            setShouldDisplay(inputInfos.watch.value.includes(watchField));
        }
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [watchField])

    return shouldDisplay;
}
