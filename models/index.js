var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/wikistack', {
    logging: false
});

var Page = db.define('page', {
    title: {
        type: Sequelize.STRING, allowNull: false
    },
    urlTitle: {
        type: Sequelize.STRING, allowNull: false, 

        // get() {
        //         return '/wiki/' + this.urlTitle 
        //     }
        },

    content: {
        type: Sequelize.TEXT, allowNull: false
    },
    status: {
        type: Sequelize.ENUM('open', 'closed')
    },
    date: {
        type: Sequelize.DATE, defaultValue: Sequelize.NOW
    }
});

function makeURLTitle(title){
    if (!title){
      return Math.random().toString(36).substring(2, 7);
    } else return title.replace(/ /g,"_").replace(/\W/g, '');
  }

Page.hook('beforeValidate', (page, options) => {
    var pageTitle = page.title;
    page.urlTitle = function (title){
        if (!title){
          return Math.random().toString(36).substring(2, 7);
        } else return title.replace(/ /g,"_").replace(/\W/g, '');
      }(pageTitle);
})

var User = db.define('user', {
    name: {
        type: Sequelize.STRING, allowNull: false
    },
    email: {
        type: Sequelize.STRING, allowNull: false, validate: {
            isEmail: true
        }
    }
});

module.exports = {
  Page: Page,
  User: User,
  db: db
};