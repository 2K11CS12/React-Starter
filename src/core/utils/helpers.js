import { constants } from '.';
import { createBrowserHistory } from 'history';

const helpers = {
    getAbsoluteURL(url) {
        return `${constants.HOST_URL}${url}`;
    },
    history(){
        return createBrowserHistory();
    }
};

export default helpers;