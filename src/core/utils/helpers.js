import { constants } from '.';

const helpers = {
    getAbsoluteURL(url) {
        return `${constants.HOST_URL}${url}`;
    },
};

export default helpers;