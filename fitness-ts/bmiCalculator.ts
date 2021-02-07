type Height = number;
type Weight = number;
type Result = string;

interface Args {
    height: number
    weight: number
    error?: string
}

export const parseArgs = (args: Array<string>) : Args => {

    
    if (args.length < 2 ) throw new Error('Not enough arguments');
    if (args.length > 2 ) throw new Error('Too many arguments');

    if(args.some(arg => isNaN(Number(arg)))){
        const result = {
            height: 0,
            weight: 0,
            error: "malformatted parameters"
        };
        return result;
    }

    const height =  Number(args[0]); 
    const weight =  Number(args[1]); 

    const result = {
        height,
        weight,
    };

    return result;
};



export const calculateBmi = (centimeters: Height, kilograms: Weight) : Result => {
    const meters = centimeters / 100;
    const result = ( kilograms /(meters * meters)); 
    if(result > 24.9){
        return 'Overweight (unhealthy weight)';
    } else if (result < 18.5) {
        return 'Underweight (unhealthy weight)';
    } else
    return 'Normal (healthy weight)';
};

/* const {height, weight} = parseArgs(process.argv)
console.log(calculateBmi(height, weight)) */