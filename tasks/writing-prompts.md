# Effective Writing Prompts for AI Collaboration

## Overview

This task focuses on mastering the art of prompt engineering
to enhance AI collaboration. Crafting precise, effective 
prompts is the key to unlocking AI's true potential. You'll
learn frameworks and techniques that dramatically improve
response quality across different AI systems.

## Why Writing Prompts Matter

The difference between mediocre and exceptional AI output
lies primarily in prompt quality. Effective prompts:

- **Provide clear direction**: Guide AI toward specific goals
- **Include relevant context**: Help AI understand scenarios
- **Set precise constraints**: Define clear boundaries
- **Establish appropriate tone**: Control response style
- **Specify target audience**: Tailor content perfectly
- **Reduce hallucinations**: Improve factual accuracy

## Modern Prompting Frameworks

### 1. COSTAR Framework

The COSTAR framework provides a complete structure for
crafting professional-grade prompts:

```
Context: Our marketing team needs to create content for
         social media during our upcoming product launch.
Objective: Generate 5 engaging post ideas that highlight
           our product's unique features.
Style: Professional but conversational, maintaining our
       brand voice that's friendly and innovative.
Tone: Enthusiastic and confident without being pushy.
Audience: Tech-savvy professionals ages 25-40 who are
          interested in productivity tools.
Response: Provide each post idea with a headline, body
          copy (max 150 chars), and suggested hashtags.
```

### 2. Chain of Thought (CoT)

CoT prompts encourage AI to show reasoning steps:

```
Question: What would be the approximate monthly payment
on a $300,000 mortgage with a 5.5% interest rate over
30 years?

Let's think through this step by step:
1. First, convert the annual interest rate to monthly
2. Then calculate the total number of payments
3. Next, use the mortgage formula to determine monthly
   payment
4. Finally, round to a practical dollar amount
```

### 3. EmotionPrompt Technique

Research shows adding emotional cues improves AI performance.
Try appending these to complex prompts:

```
[After your main prompt]
This is very important to my career.

OR

Write your answer and give me a confidence score 
between 0-1 for your answer.

OR

Are you sure that's your final answer? It might be 
worth taking another look.
```

### 4. Few-Shot Learning

Show examples before asking for similar output:

```
Convert these sentences to past tense:

Input: I go to the store every Tuesday.
Output: I went to the store every Tuesday.

Input: She runs five miles each morning.
Output: She ran five miles each morning.

Input: They build sandcastles at the beach.
Output: [The AI completes this one]
```

## Task Requirements

Create an `ai-prompting-examples.md` file with:

1. At least one example using each framework above
2. Comparison showing:
   - A basic/ineffective prompt
   - An improved version using a framework
   - Explanation of specific improvements
3. One prompt using expert persona technique:
   ```
   Respond as a senior data scientist with 15+ years
   of experience analyzing healthcare trends...
   ```
4. One prompt using the "breathing" technique:
   ```
   Take a deep breath and solve this step by step...
   ```

## Additional Guidelines

- Keep all prompts under 60 columns wide
- Include specific details rather than vague requests
- Avoid unnecessary politeness ("please," "thank you")
- Break complex requests into multiple prompts
- Use clear delimiters (```, ---, ###) for sections
- Include input validation requests for critical tasks

## Evaluation Criteria

Your prompts will be evaluated based on:

1. Structural clarity and precision
2. Strategic use of frameworks
3. Effectiveness in controlling output format
4. Creative application of emotional and expert techniques
5. Demonstrated before/after improvements

## Resources

- [Effective Prompts for AI: The Essentials](https://mitsloanedtech.mit.edu/ai/basics/effective-prompts/)
- [Best LLM Prompt Techniques](https://medium.com/the-modern-scientist/best-prompt-techniques-for-best-llm-responses-24d2ff4f6bca)
- [EmotionPrompt Research](https://arxiv.org/abs/2307.11760)
- [Chain of Thought Prompting](https://arxiv.org/abs/2201.11903)

## Deliverable

Submit your `ai-prompting-examples.md` file with clear
section headers and properly formatted examples of each
technique. Include a reflection section noting which
techniques you found most effective in your testing. 