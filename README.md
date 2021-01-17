##DoxMy.Tech
![ninja_icon](https://github.com/mzhang/doxmytech/blob/main/client/src/assets/icon512.png)

## Inspiration
Data breaches have become increasingly more common in the past few years, leaking precious private data that users gave to sites in confidence. However, not all data breaches are from sites getting hacked; the [very recent Parler leak](https://www.techradar.com/news/massive-parler-data-leak-exposes-millions-of-posts-messages-and-videos) showed that a lot of possibly private info was available publicly on the internet, waiting for someone to discover it. In Parler's case, they weren't "hacked" in the traditional sense. Rather, they failed to strip EXIF data from images uploaded by users, allowing attackers to all download images sequentially and read said EXIF data. EXIF contains significant metadata about the photo, including the GPS location of where the photo was taken. Many photos were potentially taken inside the user's home, causing sensitive information of millions of individuals has been compromised.

While the vast majority of users aren't on Parler, our thoughts jumped towards mainstream social media. We wondered what private data people might have unknowingly posted, or, since many people have been using social media for close to a decade, we wondered if people disclosed sensitive data ages ago and simply forgot.

## What it does
[DoxMyTech](https://doxmy.tech) is a web application that allows users to analyze their public social media profiles, for cool analytics and to "dox" themselves - a feature that displays potentially sensitive data that they might have posted and forgot about. The user inputs their social media handles (we currently support Facebook, Twitter and Reddit), and after confirming the inputted social media handles belong to the user using OAuth flows or temporarily editing profile bios, users can view information about what they posted online and statistics about their social media presence. This ensures that our service cannot be used by malicious actors looking to dox people without consent.

Here are some of the things doxmy.tech can currently provide users, depending on what data they've posted online:

- Potential name
- Potential email
- Potential address
- Potential location
- Potential phone number
- Sentiment Analysis
- Data breaches
- Commonly used words

We also integrate with [Have I Been Pwned](https://haveibeenpwned.com/)'s API to inform the user if their data was leaked in a traditional data breach.

## How we built it
- **React + Javascript:** We used React and Javascript to create the frontend of our website, which communicates with our Flask API
- **Flask**: We built a REST API using Flask in Python
- **Dropbase**: We used Dropbase's API to automatically parse, process and format the data we pulled from social media platforms into a singular database
- **Python**: We used Python to handle backend processes, including communication with Azure Text Analytics.
- **Azure**: We used Azure Text Analytics to perform NLP on the data gathered from the social media platforms for sentiment analysis and entity recognition

## Challenges we ran into
We initially planned to use Facebook's API for the majority of our data collection since we felt it was the platform where people are the most personal. However, we realized that, due to Facebook's strong privacy practices, our app required a review before we were allowed to access complex user data such as their posts or location, and our app likely wouldn't be approved in time. Thus, we shifted focus to relying more on data from Reddit and Twitter.

Another major issue we faced was that the various APIs returned data in many different formats (subreddits vs tweets vs posts, etc). Therefore, we decided to use Dropbase's API to process our data. We used Dropbase's data pipelines to automatically format our data in a standardized format and export it to a PostgreSQL database, allowing us to easily utilize the data.

## Accomplishments that we're proud of

- Integrating multiple complex and different APIs together (Facebook, Twitter, and Pushshift with the help of Dropbase) to create a singular data structure that we could use
- Building our own REST API for our frontend to communicate with
- Deploying a website and API server to production
- Build an aesthetic frontend with React(most of us have not touched React beforehand!)

## What we learned
- Flask + Python for building REST APIs
- React for programmatically creating front-end
- Dropbase API for automatically generating PostgreSQL databases
- Azure for natural language processing 

## What's next for [DoxMy.Tech](https://doxmy.tech/)
Our next step is to increase the number of social media that we can support, with a focus on getting Facebook + Instagram data collection working. This will allow us to give more detailed information to the user and increase the accuracy of our analyses.

## Authors
[Aurik Datta](https://github.com/aurik-datta), [Sunny Zuo](https://github.com/sunny-zuo), [Wolf Van Dierdonck](https://github.com/WolfDierdonck), [Matt Zhang](https://github.com/mzhang)
