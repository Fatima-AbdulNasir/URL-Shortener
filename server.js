const express = require('express');
const cors=require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./src/db');
const urlRoutes = require('./src/routes/urlRoutes');
const Url = require('./src/models/UrlModel');
const UrlShortener = require('./src/utils/urlShortener');
const shortid = require('shortid');



const app=express();
const PORT= 3001;

//connecting to database
connectDB();

//middleware
app.use(bodyParser.json());
app.use(cors());

//middleware to serv static files
app.use('/', urlRoutes);
//connecting to front-end
app.use(express.static('public'));


app.listen(PORT, ()=>{
    console.log(`Server is running fine on ${PORT}`);
})
app.post('/api/shorten', async (req, res) => {
    try {
      const { originalUrl } = req.body;
  
      // Check if the URL is valid
      if (!originalUrl) {
        return res.status(400).json({ message: 'URL is required' });
      }
  
      // Check if the URL is already shortened
      let url = await Url.findOne({ originalUrl });
  
      if (url) {
        return res.json(url);
      }
  
      // Generate a short URL
      const shortUrl = shortid.generate();
  
      // Save to the database
      url = new Url({ originalUrl, shortUrl });
      await url.save();
  
      res.json(url);
    } catch (err) {
      console.error('Server error:', err);
      res.status(500).json({ message: 'Server error: ' + err.message });
    }
  });
  app.get('/:shortUrl', async (req, res) => {
    try {
      const { shortUrl } = req.params;
      const url = await Url.findOne({ shortUrl });
  
      if (!url) {
        return res.status(404).json({ message: 'URL not found' });
      }
  
      // Increase the click count if needed
      // url.clicks += 1;
      // await url.save();
  
      res.redirect(url.originalUrl);
    } catch (err) {
      console.error('Server error:', err);
      res.status(500).json({ message: 'Server error: ' + err.message });
    }
  });
  

























