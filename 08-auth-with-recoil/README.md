#   Authentication (Part 2)
## Learning Goals
* Demonstrate Authorization (Access Management)
* Handle Authorization Errors on the Front End

{_Notes for Deploying_}
#### _Settings on Render Web service_
*  Build command: `pip install -r requirements.txt && npm install --prefix client && CI=false npm run build --prefix client`
*  Start command: `gunicorn --chdir server app:app`
