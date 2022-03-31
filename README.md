# Scroll of Scrying
## Final Product

Desktop View of Party Page
<!-- !["Party page in desktop view."](https://github.com/jbenson4/scroll_of_scrying/blob/master/docs/scroll-of-scrying-party-desktop.png?raw=true) -->
<img src="https://github.com/jbenson4/scroll_of_scrying/blob/master/docs/scroll-of-scrying-party-desktop.png?raw=true" width="600">

## Features
- Scroll of Scrying is a tool for Dungeon Masters running D&D 5th Edition campaigns.
- A party tracker, with stats and conditions to keep track of how each party member is doing.
- An inventory page, to help track what magic items you have given the party at this point in the campaign.
- An initiative tracker, to keep track of turn order in combat.
- A page for DMs to take notes on how their campaign is going. 
- Lastly, roll tables to help generate monster encounters, treasure drops, and even NPCs.

## Getting Started
1. Navigate to the client folder, and install dependencies with `npm install`.
2. Navigate to the server folder, and install dependecies with `npm install`.

    1. Create a database with posgreSQL and use an appropriate `.env` file.
    2. Run the server with `npm start.`

3. Back in the client folder, run `npm start` there as well.
4. Go to [http://localhost:3000/](http://localhost:3000/).

## How to Use

<ins>Player Stats and Conditions:</ins>

To view a player's stats, click the "Details" button under their name. Here you can also add a condition by choosing the desired condition from the drop down options menu. To delete a condition, click the "X" button below the condition. You can also click on the condition icon to see what effects that condition has on gameplay.

<img alt="Add and remove a player condition." src="https://github.com/jbenson4/scroll_of_scrying/blob/master/docs/scroll-of-scrying-party-page.gif?raw=true" width="600">

<ins>Inventory</ins>

View any item currently in your party's possession and click on each item to see the details of that particular item. 

<i>W.I.P. Click "Add New Item" to select an item to add to the inventory and click the "X" to remove an item.</i>

<ins>Combat:</ins>

Here the DM can add a NPC or a monster to the table by clicking the "Add Custom" button. Create a NPC by filling in the empty fields or create a monster by selecting from the drop down options or by searching for its specific name. Click "Roll Initiative" to set the order for combat. You can use the "Dice Roll" drop down to roll any applicable dice with any applicable modifiers. To edit the HP of any participant, enter the new HP value and click "HP Edit". To remove a monster or NPC once combat has finished, click the "Delete" button.

<img alt="Create monsters/NPCs and use dice and initiative rolls for combat." src="https://github.com/jbenson4/scroll_of_scrying/blob/master/docs/scroll-of-scrying-combat-page.gif?raw=true" width="600">

<ins>Notes</ins>

Enter the title, date, and content of the note and click "Submit" to save.

<i>W.I.P. Notes can only be saved in state, a future update will allow for notes to be saved to the database.</i>

<ins>Roll Tables</ins>

To generate random elements, click on the desired content button, select the number of elements you want returned, and click "Roll". The roll tables will persist even when traversing between other tabs. Content will only be randomized upon clicking "Roll". The "Dice Roll" drop down can also be used to decide which random element to choose from. Clicking on the names of the monsters and magic items will display the details of that specific element.

<img alt=""Use roll tables to generate random monsters, items, and NPCs."" src="https://github.com/jbenson4/scroll_of_scrying/blob/master/docs/scroll-of-scrying-roll-table.gif?raw=true" width="600">


## Dependencies
- dice-roller/rpg-dice-roller
- material/floating-label
- testing-library/jest-dom
- testing-library/react
- testing-library/user-event
- axios
- dnd-npc
- lodash.kebabcase
- material-components-web
- react
- react-dom
- react-scripts
- react-select
- sass
- web-vitals