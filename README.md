Steps for Installation  :

git clone https://github.com/payal8797/GridSingularityCypress.git
Go to cloned directory and install package.json using npm
npm install package.json  
Download and install required packages using commands:
  npm install --save-dev cypress-xpath
  npm i --save-dev cypress-mochawesome-reporter
export SYNPRESS_HOME=$PWD
cd $SYNPRESS_HOME
Check if it is installed properly with all supported browsers:
  node synpress open

To Run the Tests:
  node synpress run --configFile synpress.json 
