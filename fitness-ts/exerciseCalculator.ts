type Exercises = number[];
interface Output {
  periodLength?: number;
  daysTrained?: number;
  success?: boolean;
  rating?: number;
  ratingDescription?: string;
  target?: number;
  average?: number;
}

interface Results {
    exercises: number[];
    target: number
}

export const parseArguments = (args: Array<string>): Results => {
    if (args.length < 4 ) throw new Error('Not enough arguments');

    const argsSplice = args.splice(2);

    if(argsSplice.some(arg => isNaN(Number(arg)))){
        throw new Error('Args should be numbers');
    }

    const result = {
        exercises: argsSplice.map(arg => Number(arg)).splice(1),
        target: argsSplice.map(arg => Number(arg))[0]
    };

    return result;
};

export const calculateExercise = (exercises: Exercises, target: number): Output => {
  const periodLength: number = exercises.length;
  const getDaysTrained = (): number => {
    return exercises.filter((e) => e !== 0 ).length;
  };

  const getAverage = (): number => {
    const sum = exercises.reduce((a, b) => a + b, 0);
    return sum / exercises.length || 0;
  };

  const getSuccess = (average: number): boolean => {
    if (average < target) {
      return false;
    } else return true;
  };

  interface Rating {
      rating: number;
      ratingDescription: string,
  }

  const ratingCalc = (success: boolean, average: number, target: number): Rating => {
    let rating = 0;
    let ratingDescription = '';

    if(!success && (average < (target / 2))) {
        rating = 1;
    } else if (!success) {
        rating = 2;
    } else if(success) {
        rating = 3;
    }

    if(rating === 1){
        ratingDescription = "Not doing good, keep chipping at it";
    } else if (rating === 2) {
        ratingDescription = "Not bad, but could do better";
    } else if (rating === 3){
        ratingDescription = "Good job! Keep up the good work!";
    }

    const ratingResult: Rating = {
        rating,
        ratingDescription
    };

    return ratingResult;
    };

    const daysTrained = getDaysTrained();
    const average = getAverage();
    const success = getSuccess(average);
    const {rating, ratingDescription} = ratingCalc(success, average, target);
    
    const result ={
        periodLength,
        daysTrained,
        success,
        rating,
        ratingDescription,
        target,
        average
    };

    return result;
};

/* const {exercises, target} = parseArguments(process.argv)

console.log(calculateExercise(exercises, target)); */
