---
title: 'Toxic Comment Classifier'
date: '2021-12-30'
---


<h1>NLP: Toxic Comment Classifier</h1>

[PowerPoint Presentaiton](https://docs.google.com/presentation/d/1XRuFEMjr6Ev1OPPZm6DsBwPTdoXLICb1po0KzDOrJ1A/edit?usp=sharing)

1. <h3> Problem </h3>
   
    In recent years, children and adolescents have been spending significant amounts of time on the internet, switching between their cell phones and computers. It is no wonder that children learn a lot of profanity and toxic comments from the internet, which can negatively affect their young minds and distort their sense of morality. By reducing the impact of internet toxicity, we can make the online environment more inclusive and less harmful for everyone.


2. <h3> Motivation </h3>
    
    The motivation behind this project is that as the world becomes increasingly digital, people are using technology at a younger age, making it crucial to ensure online safety. People on social media often encounter hurtful messages in their direct messages (DMs) or posts that cause discomfort. In some severe cases, this cyberbullying may lead to self-harm or mental disorders. This project aims to combat cyberbullying to create a more enjoyable social media experience.

3. <h3> Data </h3>
   
    The dataset we plan to use is a toxic comments dataset. These comments originate from Kaggle but were initially sourced from Wikipedia's talk page edits. This issue was highlighted by the Conversation AI team, a research initiative founded by Jigsaw and Google dedicated to building tools that improve online conversations.

4. <h3> Proposed Methods </h3>
   
    The proposed solution to this problem is logistic regression. This choice is based on the fact that sequence prediction or text generation is not the primary focus of this project. We need a good predictor to determine if a comment is toxic and, if so, in what way(s).

    Logistic regression is a method where the output is the probability of a specific class. The benefits of logistic regression include interpretability, non-parametric nature, and lower susceptibility to overfitting.  

5. <h3> Evualtion Metrics </h3>
    
    For evaluating this logistic regression model, we will consider recall, precision, accuracy, and the ROC curve. Recall indicates the fraction of true positives the model correctly predicted, while precision shows how many of the predicted positives were true positives. Accuracy provides a general sense of model performance, and the ROC curve illustrates the model's performance under different thresholds. We will also assess the AUC to gauge the model's overall performance.   

6. <h3> Implementation details for reporducibility </h3>
   
    The data was sourced from the Kaggle competition but was preprocessed by another Kaggle user who shared the cleaned comments dataset. This preprocessing involved correcting misspellings, removing punctuation, expanding abbreviations, eliminating symbols, converting comments to lowercase, and fixing grammar and spelling errors. Additionally, certain columns like 'id' and 'set' were removed. Stop words from the NLTK English package were removed from the comments.

    Features were extracted using the TfidfVectorizer() from scikit-learn, along with sentiment analysis, subjectivity analysis, comment length, and flags for profanity and "you." To prevent excessive RAM usage, a sample of 100,000 rows from the dataset was used as the primary dataset. A numerical pipeline was applied to standardize column values before feeding the data into the models.


7. <h3> Results </h3>
   
    Contrary to our initial expectations, the Logistic Regression models exceeded our expectations. While we initially anticipated better performance from Random Forest models due to our dataset's size and high dimensionality, we faced RAM limitations on Google Colab. In comparison, the logistic regression models demonstrated impressive accuracy and were less prone to overfitting, achieving an average accuracy of 0.94 and an average recall of 0.85. Since our primary focus was on increasing the recall metric, logistic regression proved ideal for our needs.

    One of the primary reasons logistic regression achieved excellent results was its ability to handle our imbalanced dataset effectively. Given the disproportionate amounts of toxic and neutral comments in our data, weighted logistic regression balanced these proportions and accurately penalized certain classifications, providing an efficient classification methodology.

    Please identify important factors contributing to success if the results are as expected and good. If there are any unexpected issues in the proposed methods, kindly highlight them.