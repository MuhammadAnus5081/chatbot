const User = require('../model');

exports.createUser = async (req, res) => {
  const {
    name,
    emailAddress,
    date,
    howManyNights,
    honeymoonPackage,
    moreDetails,
    resorts,
    phoneNumber,
    flightTimings
  } = req.body;

  try {
    const user = new User({
      name,
      emailAddress,
      date,
      howManyNights,
      honeymoonPackage,
      moreDetails,
      resorts,
      phoneNumber,
      flightTimings
    });

    await user.save();

    res.json({ message: 'User created successfully', userId: user._id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


const questions = {
  section1: {
   questions: [
    'Hello there!',
    'Greetings from Iris Holidays, we will help you plan your holiday.',
    'We are the only company in Kerala which has won TripAdvisor Certificate of Excellence for three consecutive years - 2016, 2015 & 2014.',
    'May I know your name?'
  ],
  questiontype: "string"},

  section2:{
   questions: [
    'Nice to meet you! May I know your email id where I can send the package?'
  ],
  questiontype: "Emailaddress"},

  section3: {
  questions: [
    'Thanks :) Let me know your travel dates. This can help us to check the availability with resorts.'
  ],
  questiontype: "Date"},

  section4:
  {
  questions:   [
    'And how many nights?'
  ],
  questiontype: "Number"},
  section5: 
  {
  questions: [
    'Just wondering whether you are looking for a honeymoon package?'
  ],
  questiontype: "String"},
  section6:{
    questions: [
    'Awesome. Just need some more details to customize your holiday!'
  ],
  questiontype: "String"},

  section7: {
   questions: [
    'What type of resorts do you prefer?'
  ],
  questiontype: "String"},
  section8: {
  questions: [
    'In case we want to call you after sending the package, we may need your phone number. Which number should we call?'
  ],
  questiontype: "Number"},

  section9: {
    questions: [
    'Is there something else you want to tell us? Like your flight timings if you have booked.'
  ],
  questiontype: "String"},

  section10: {
    questions: [
    'Thank you. We have all the details now.',
    'You\'ll hear from our team at Iris Holidays soon.',
    'Have a great day!'
  ],
  questiontype: "lastmessage"}
};

exports.getQuestions = (req, res) => {
  try {
    const sections = Object.keys(questions);
    const questionList = sections.map(section => {
      return { section, questions: questions[section] };
    });
    res.json({ questionList });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.handleUserInput = async (req, res) => {
  const userInput = req.body.message;

  try {
    // Handle user input based on the current section
    // ... Your existing code to handle user input goes here ...
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


exports.getUser = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const sections = [
      { section1: ['Hello there!', 'Greetings from Iris Holidays, we will help you plan your holiday.', 'We are the only company in Kerala which has won TripAdvisor Certificate of Excellence for three consecutive years - 2016, 2015 & 2014.', 'May I know your name?'], Answer: user.name },
      { section2: ['Nice to meet you! May I know your email id where I can send the package?'], Answer: user.emailAddress },
      { section3: ['Thanks :) Let me know your travel dates. This can help us to check the availability with resorts.'], Answer: user.date },
      { section4: ['And how many nights?'], Answer: user.howManyNights },
      { section5: ['Just wondering whether you are looking for a honeymoon package?'], Answer: user.honeymoonPackage },
      { section6: ['Awesome. Just need some more details to customize your holiday!'], Answer: user.moreDetails },
      { section7: ['What type of resorts do you prefer?'], Answer: user.resorts },
      { section8: ['In case we want to call you after sending the package, we may need your phone number. Which number should we call?'], Answer: user.phoneNumber },
      { section9: ['Is there something else you want to tell us? Like your flight timings if you have booked.'], Answer: user.flightTimings },
      { section10: ['Thank you. We have all the details now.', 'You\'ll hear from our team at Iris Holidays soon.', 'Have a great day !'] }
    ];

    res.json({ sections });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};