type Height = number
type Weight = number
type Result = string

interface Args {
    height?: number
    weight?: number
}

const parseArgs = (args: Array<string>) : Args => {
    if (args.length < 4 ) throw new Error('Not enough arguments')
    if (args.length > 4 ) throw new Error('Too many arguments')

    const argsSplice = args.splice(2)

    if(argsSplice.some(arg => isNaN(Number(arg)))){
        throw new Error('Args should be numbers')
    }

    const result = {
        height: argsSplice.map(arg => Number(arg))[0],
        weight: argsSplice.map(arg => Number(arg))[1]
    }

    return result
}


const calculateBmi = (centimeters: Height, kilograms: Weight) : Result => {
    const meters = centimeters / 100
    const result = ( kilograms /(meters * meters)) 
    if(result > 24.9){
        return 'Overweight (unhealthy weight)'
    } else if (result < 18.5) {
        return 'Underweight (unhealthy weight)'
    } else
    return 'Normal (healthy weight)'
}


const {height, weight} = parseArgs(process.argv) 
console.log(calculateBmi(height, weight))