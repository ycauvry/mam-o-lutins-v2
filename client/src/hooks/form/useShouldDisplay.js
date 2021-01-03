import {useState, useEffect} from "react";

export const useShouldDisplay = (inputInfos, watch) => {
    const [shouldDisplay, setShouldDisplay] = useState(!inputInfos.watch);

    useEffect(() => {
        if (inputInfos.watch) {
            const watchField = watch(inputInfos.watch.field);
            setShouldDisplay(inputInfos.watch.value.includes(watchField));
        }
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [shouldDisplay])

    return shouldDisplay;
}
