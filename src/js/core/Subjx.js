import Helper from './Helper';
import drag from './transform';
import clone from './clone';

export default class Subjx extends Helper {

    constructor(params) {
        super(params);
    }

    drag() {
        return drag.call(this, ...arguments);
    }

    clone() {
        return clone.call(this, ...arguments);
    }

}