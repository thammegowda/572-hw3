# 572-hw3-CSCI572
A web-app for displaying indexed weapons data from Solr

##Youtube Video

[Team 36 CSCI 572 Weapons Visualization Video](https://youtu.be/uUo1dmmDx_g)

##Dependencies

We leverage these dependencies

- jQuery
- Banana
- Facetview

##Structure

The webapp sits within the `charts` folder.  The app is split into three tabs. Each tab correlates to an html page.

- D3 `-> index.html`
- Banana `-> 572-banana.html`
- Facetview `-> 572-facetview.html`

Within D3 we have 6 visualizations, and each of those visualizations rests in an iframe that we can toggle with navigation panes.

We have included banana as a tab, and we've placed the app within it's own enclosing folder.  Furthermore, We reference banana as an iframe in `572-banana.html`.

Lastly, we have included facetview as an iframe as well. This methodology is identical to what we've done for banana.




