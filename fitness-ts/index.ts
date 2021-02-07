import express from 'express';
import {calculateBmi, parseArgs} from './bmiCalculator';
const app = express();

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

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});