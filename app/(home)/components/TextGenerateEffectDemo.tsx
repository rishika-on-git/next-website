
"use client";


import React from 'react';
import { TextGenerateEffect } from "../../components/ui/text-generate-effect"


const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows Oxygen gets you high. Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows Oxygen gets you high.
`;

function TextGenerateEffectDemo() {
  
  return <TextGenerateEffect words={words} />;
}

export default TextGenerateEffectDemo;
