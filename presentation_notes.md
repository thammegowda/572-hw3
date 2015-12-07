checkbox
	- underage/
	- de-identified/
	
Script

## Intro

- My name is ""
- I'm Representing Team 36 for Univ. of Southern California's CSCI 572 class. Also known as Information Retrieval
- Throughout the semester we have been developing a search engine to visualize weapons data from around the world
- We accopmlished this by:
	- politely crawling weapons sites using **Apache Nutch**
	- indexing the data with **Solr**
		- we employed numerous techniques for determining ranking and relevancy 
		- the techniques include topics such as link based relevancy, content based ranking and even named entity recognition
		- **AND** last but not least, we visualize these indexed results with the webapp you're currently looking at

			
##Design
	
- Our website is composed of three different visualization methods
- D3, Banana, and Facetview are the three visualization tools we use to demonstrate our data
- We've separated these tools into three tabs

- First we'll talk about D3


##D3

###1a. Time based trends 
	
- There were a set of challenges that we were interested in solving.
- The first challenge we were interested in solving was determining:
	1. **What time-based trends exist in our gun ads?**

- To answer that, we used the d3 calendar visualization
	- So we queried our data, and faceted on our date field
	- The goal was to see if there were any spikes in the amount of ads
	- Each of these boxes represents one day
	- Darker colored boxes indicate a higher amount of weapons ads posted
	- We looked for areas where there was a large a change in color. That directly correlates a large increase in sales from one day to the next
	- Upon looking, we saw a trend in increasing gun ads on **INSERT DATE HERE**
	- We were also interested if there were any time AND spatial based trends within our data
	
###1b. Spatial and Time based trends
- To visualize this we created our "Geo Trend" tab, and included a mapview within the frame
- This tab allows us to find the *topN* ads within a location and time window
- We determined posting time and location of these ads by doing named entity recognition on the contents of these sites
	- as mentioned before, we store this information in our solr index
- As we can see here, on the left there is a list of cities which show how many postings occured within that city, and within the time window
- The map view also updates in real time to show what locations have gun postings

	
###1c. Unauthorized buying
- In the interest of determining whether unlawful transfer was happening in any of these locations, we studied up on gun laws
- We were interested to see what states banned gun purchases
- In illinois up until 2012, it was illegal to purchase weapons
- So we tested this out by querying for chicago between 2005 and 2012 to see if there were any ads posted
- The results showed several postings
- This gave us reason to believe that illegal purchases were made in the state of illinois

##2. Similar firearms weapons types
- Another visualization we were interested in demonstrating was an influx of stolen goods/weapons
- The logic was to see if there was a large amount of similar weapons sold in the same region and time
- An example of this could finding if "a lot of shotguns were sold in texas on some day"
- We demonstrated this in our "Similar Weapons" tab with a bubble chart
- The bubble chart shows clusters of weapons 
- We can vary what ads are shown by changing the date range as well as the location
- This gives us the ability to see if there are any large amounts of weapon types (sucha as shotguns or rifles) at a give time and location

###3. Rate of ads

- To indicate a stolen shipment of firearms we analyzed how the rate of ads changed over time
- To visualize this, we placed a "multiline" visualization within our "Weapon Model Influx" tab
- We give the ability to focus on a weapon type within a time range of a few months
- This gives us the ability to see if any rapid spikes occur
- As seen here, there is a clear spike in C2, Ak-47, Beretta 92 and a couple of other guns.  There are thousands of ads spikes within the month of October
- This shows that there is possibly some illegal selling occuring

###4. Underaged weapons

- In the midst of weapons sales, it's possible that underaged people may be making/posting weapons ads 
- One thing we we're interested in doing was determining if it's possible to see what ads were posted by minors
- The simplest method we found was to search our index for slang words that younger indviduals may use
- So we return the top results from our index based on this content based search
- We then tried looking at the posts which contained these slang words
- And simply just went through the profiles of these users to see if it's possible to see if the users might be authorized

<DO EXAMPLE>

###5. Illegal sale explosives

- The last bit of information we wanted to find out about was the sale/transfer of illegal wepons
- These include
	- bombs
	- explosives
	- weapons of mass destruction
	- etc.
- To accomplish this, we created a word cloud visualization
- The word cloud shows the N most frequent weapontypes or weaponnames from our index
- We can see that within the visualization there are types such as
	- nuclear
	- bomb
	- tanks
	- biological
	- grenade

- within our posts
- This indicates that users were posting and most likely transfering illegal weapons

##Banana

- Another amazing bit of software for visualizing data is Banana
- Banana leverages d3, angularjs and requirejs to create a modular front end app for visualizing data
- We have implemented this as a tab within our app
- We simply included it as an iframe and configured the default panels by editing the default.json file
- Banana is really interesting because it gives you complete power over editing the interface via front end (drag and drop, remove via input buttons) 
- **OR** you can just directly edit the default.json file
- We have shown a few different panels
	- word cloud
	- time histogram
	- heat map showing weapontype v time
	- pie chart showing weapon name
- We also have a text search and time form which allows us to vary the time window as well as search our index
- If interested as well, we can add panels on the fly via banana's interface


##Facetview

- The last form of visualization we chose to implement was in the form of Facetview
- Facetview leverages jquery and bootstrap to dynamically add guided navigation
- We can provide search terms to solr, and also facet based on the fields in our index
- It just requires a simple configuration object that can be passed via jquery
- You can then add this view as a div to display the form elements, facets, and search results
- Drilling down on fields is as simple as clicking the element you're interested in faceting on
- 









