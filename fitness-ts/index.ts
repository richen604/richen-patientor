import express from 'express';
import {calculateBmi, parseArgs} from './bmiCalculator';
import {parseArguments, calculateExercise} from './exerciseCalculator'
const app = express();
app.use(express.json())

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {

    const {height, weight, error} = parseArgs([String(req.query.height), String(req.query.weight)]);

    if(error){
        res.json({error});
        return;
    } 
    
    const bmi = calculateBmi(height, weight);
    
    res.json({weight, height, bmi});

  });

app.post('/exercises', (req, res) => {
    const body = req.body

    const {exercises, target, error} = parseArguments(body.daily_exercises, body.target)

    if(error){
        res.json({error})
        return
    }

    const result = calculateExercise(exercises, target)

    res.json(result)
})

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});