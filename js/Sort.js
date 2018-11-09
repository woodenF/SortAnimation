export default class Sort {
	constructor(arr) {
		this.arr = arr;
		this.init();
		this.timer = null;
		this.bubbleSort();
		this.currentIndex = {
			i: -1,
			j: 0
		}
	}
	init() {
		let width = document.body.offsetWidth / this.arr.length;
		let container = document.querySelector('.sort-box');
		let fragment = document.createDocumentFragment();
		for(let i = 0; i < this.arr.length; i++) {
			let temp = document.createElement('div');
			temp.className = 'sort';
			temp.id = i;
			temp.style.width = `${width}px`
			temp.style.left = `${i * width}px`
			let node = document.createElement('div');
			let nodeHeight = this.setHeight(this.arr[i]);
			node.style.height = nodeHeight;
			node.className = 'sort-data'
			node.innerText = this.arr[i];
			temp.append(node)
			fragment.append(temp);
		}
		container.append(fragment);
	}
	setHeight(num) {
		let maxNum = Math.max.apply(Math, this.arr);
		return `${num / maxNum * 100}%`
	}
	addActive() {
		[...arguments]
		.filter((item) => item >= 0)
		.forEach((item) => document.getElementById(item).firstChild.classList.add('active'));
	}
	removeActive() {
		[...arguments]
		.filter((item) => item >= 0)
		.forEach((item) => document.getElementById(item).firstChild.classList.remove('active'));
	}
	addComplete() {
		[...arguments]
		.forEach((item) => document.getElementById(item).firstChild.classList.add('complete'))
	}
	nodeExchange(i, j) {
		[this.arr[i], this.arr[j]] = [this.arr[j], this.arr[i]];
		let x = document.getElementById(i);
		let y = document.getElementById(j);
		[x.style.left, y.style.left] = [y.style.left, x.style.left];
		[x.id, y.id] = [y.id, x.id]
	}
	bubbleSort() {
		setTimeout(() => {
			this.removeActive(this.currentIndex.i, this.currentIndex.i + 1);
			this.currentIndex.i++;
			if(this.currentIndex.i > this.arr.length - this.currentIndex.j - 2) {
				this.currentIndex.i = 0;
				this.currentIndex.j++;
				if(this.currentIndex.j > this.arr.length) {
					return
				}
				this.addComplete(this.arr.length - this.currentIndex.j)
			}
			this.addActive(this.currentIndex.i, this.currentIndex.i + 1)
			if(this.arr[this.currentIndex.i] > this.arr[this.currentIndex.i + 1]) {
				setTimeout(() => {
					this.nodeExchange(this.currentIndex.i, this.currentIndex.i + 1)
					this.bubbleSort()
				}, 500)
			} else {
				this.bubbleSort()
			}
		}, 500)
	}
	selectionSort() {
		
	}
}