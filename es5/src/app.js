let test = "test";
//解构
let [a, b] = [11, 22];
//箭头函数，返回x+x
const foo = x => x + x;

const tmpl = `
			<div class="content">
			  <h1>这是换行了。</h1>
			</div>`;

const items = [1, 2, 3];
let copyTemp = [...items];

function arrToString(...args) {
  return args.join('');
}

function food(opts = {}) {
  console.log('更加简洁，安全');
}

function anotherFun() {
  const one = 1, two = 2, three = 3;
  return { one, two, three };
}
const { one, three, two } = anotherFun();

setTimeout( () => {
	console.log(11111)
});

((name) => {
  console.log(`哈哈哈${name}`);
})(name);

class Dog {
  constructor(names = []) {
    this._name = [...names];
  }
  bark() {
    const currName = this._names[0];
    alert(`one one ${currName}`);
  }
}

const lightRed = '#F07';
const black  = '#000';
const white  = '#FFF';

export default { lightRed, black, white };