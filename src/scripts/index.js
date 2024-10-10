import { ABC } from './test'
import '../styles/index.scss'

const fn = () => {
    console.log('Hello World!')
}

fn()

console.log(ABC)

class x {
    a = 10

    ABC() {
        console.log(a)
    }
}

let a = new x()

a.ABC()