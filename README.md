# Latin Command-Line Translator

## Requirements
- Node.js v18.0.0 (Or Above)

## Usage
Tip: Run `js/latin.js` for quick instructions.

> `-f <in> [out]` to append macrons and format text.

Input:
```
    Venit, ecce,   recent-i caede leaena boun sp-umant-es oblita rict-us, dēposit-ura sitim v-ic-in-i fontis    in und-a.
```

Output:
```
Venit, ecce, recentī caede leaena boun spūmantēs oblita rictūs, dēpositūra sitim vīcīnī fontis in undā.
```

> `-t <in> [out]` to translate text.

Input:
```
Venit, ecce, recentī caede leaena boun spūmantēs oblita rictūs, dēpositūra sitim vīcīnī fontis in undā.
```

Output:
```
veni.t               V      6 1 PRES ACTIVE  IND 3 S    
veneo, venire, venivi(ii), venitus  V   [XXXBO]  
go for sale, be sold (as slave), be disposed of for (dishonorable/venal) gain;
ven.it               V      4 1 PRES ACTIVE  IND 3 S    
ven.it               V      4 1 PERF ACTIVE  IND 3 S    
venio, venire, veni, ventus  V (4th)   [XXXAX]  
come;

ecce                 INTERJ                             
ecce  INTERJ   [XXXAX]  
behold! see! look! there! here! [ecce eum => here he is];

...

und.a                N      1 1 NOM S F                 
und.a                N      1 1 VOC S F                 
und.a                N      1 1 ABL S F                 
unda, undae  N (1st) F   [XXXAX]  
wave;
und.a                V      1 1 PRES ACTIVE  IMP 2 S    
undo, undare, undavi, undatus  V (1st) INTRANS   [XXXBO]  
surge/flood/rise in waves; gush/well up; run, stream; billow; undulate; waver;
```

> `-ft <in> [out]` to format and translate text.

Input:
```
    Venit, ecce,   recent-i caede leaena boun sp-umant-es oblita rict-us, dēposit-ura sitim v-ic-in-i fontis    in und-a.
```

Output:
```
veni.t               V      6 1 PRES ACTIVE  IND 3 S    
veneo, venire, venivi(ii), venitus  V   [XXXBO]  
go for sale, be sold (as slave), be disposed of for (dishonorable/venal) gain;
ven.it               V      4 1 PRES ACTIVE  IND 3 S    
ven.it               V      4 1 PERF ACTIVE  IND 3 S    
venio, venire, veni, ventus  V (4th)   [XXXAX]  
come;

ecce                 INTERJ                             
ecce  INTERJ   [XXXAX]  
behold! see! look! there! here! [ecce eum => here he is];

...

und.a                N      1 1 NOM S F                 
und.a                N      1 1 VOC S F                 
und.a                N      1 1 ABL S F                 
unda, undae  N (1st) F   [XXXAX]  
wave;
und.a                V      1 1 PRES ACTIVE  IMP 2 S    
undo, undare, undavi, undatus  V (1st) INTRANS   [XXXBO]  
surge/flood/rise in waves; gush/well up; run, stream; billow; undulate; waver;
```

> `-s <in> [out]` to strip macrons and punctuations.

Input:
```
Venit, ecce, recentī caede leaena boun spūmantēs oblita rictūs, dēpositūra sitim vīcīnī fontis in undā.
```

Output:
```
Venit ecce recenti caede leaena boun spumantes oblita rictus depositura sitim vicini fontis in unda
```

(Ov. *Met.* 4.96-98)

## Credits

Powered by [latin-words.com](https://latin-words.com).

Made by DmmD GM @ 2023.