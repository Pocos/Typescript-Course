class Hello {
	private name: string;
	constructor(name: string){
		this.name = name;
	}
	public hello(): string {
		return `Hello ${this.name}!`;
	}
}

// Create an instance
const xx: Hello = new Hello('World');
const message: string = xx.hello();
// Change text on the page
let placeholderHeading = document.querySelector('h1');
placeholderHeading!.textContent = message;