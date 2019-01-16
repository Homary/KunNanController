/*设置localStorage*/

class Storage {
	key: string;

	constructor(key = 'list'){
		this.key = key;
	}
	getStorage(name: string){
	    return localStorage.getItem(name) ? JSON.parse(localStorage.getItem(name)) : '';
	}

	setStorage(key: string, value) {
	    let _value = JSON.stringify(value);

	    localStorage.setItem(key, _value);
	    return;
	}

	clearStorage() {
	    localStorage.clear();

	    return;
	}
}

export default new Storage;