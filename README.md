# Realty Mogul Interview Assignment

## Quick Overview
Congratulations! You've passed our initial round of interviews and we're
curious about your technical chops. Our team is in the business of building
web applications and services and we will be testing you with some of the
tehcnology that we use on a day-to-day basis.

## Development Instructions

### Front End

React frontend:

Given the following JSON string

    {
        "headerData": ["30%", "$2000000", "85%"],
        "contentA": "This should be displayed in Panel A. This is visible by default"
        "contentB": "This should be displayed in Panel B. This should be hidden by default"
    }

1. Please implement the following

* Add code to parse the json string.
* Displays header data horizontally in a header section. This is always visible
* The header section should display a "-" sign by default. When a user clicks this, it will change to a "+" sign.
* Displays a content section by default under the header section. When the "-" sign in the header is clicked, this content section becomes hidden.
* The content section contains 2 panels side by side. The first panel (panel A) should display contentA data. Content in this panel is visible by default.
* The second panel (panel B) should display contentB data. The contents of this panel is hidden by default. The background of this should be *EEEEEE by default.
* When panel B (with the hidden content) is clicked the background should change to *FFFFFF and the content should become visible.
* When panel B content becomes visible, panel A content should become hidden and the background color should change to *EEEEEE.
* The hide/show behavior above should be repeatable any number of times.

See mockup.png for a reference.

2. Implement the case where you have to render the component you built in 1. multiple times.

3. Please implement this using React and any other libraries you think may be necessary. (Redux, Styled components etc). Please write a short paragraph justifying your choice of your libraries or any design choices.
