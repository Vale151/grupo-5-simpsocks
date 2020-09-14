'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        firstname: 'Admin',
        lastname: 'Simpsocks',
        email: 'admin@mail.com',
        password: '$2a$10$hhvZDtpcjxDoaDRLiMnoEeBJsOT.sVgEGRcE0kTDMFzLuwGR750Xq',
        image: 'admin.png',
        phone: '446-875-3008',
        role_id: 2
      },
      {
        firstname: 'User',
        lastname: 'Simpsocks',
        email: 'user@mail.com',
        password: '$2a$10$hhvZDtpcjxDoaDRLiMnoEeBJsOT.sVgEGRcE0kTDMFzLuwGR750Xq',
        image: 'user.png',
        phone: '399-284-4638',
        role_id: 1
      },
      {
        firstname: 'Garvy',
        lastname: 'Newstead',
        email: 'gnewstead2@salon.com',
        password: '$2a$10$hhvZDtpcjxDoaDRLiMnoEeBJsOT.sVgEGRcE0kTDMFzLuwGR750Xq',
        image: null,
        phone: '698-846-1120',
        role_id: 1
      },
      {
        firstname: 'Melvin',
        lastname: 'Langfield',
        email: 'mlangfield3@wix.com',
        password: '$2a$10$hhvZDtpcjxDoaDRLiMnoEeBJsOT.sVgEGRcE0kTDMFzLuwGR750Xq',
        image: null,
        phone: '908-541-2344',
        role_id: 1
      },
      {
        firstname: 'Garwin',
        lastname: 'Piatti',
        email: 'gpiatti4@boston.com',
        password: '$2a$10$hhvZDtpcjxDoaDRLiMnoEeBJsOT.sVgEGRcE0kTDMFzLuwGR750Xq',
        image: null,
        phone: '695-601-3650',
        role_id: 1
      },
      {
        firstname: 'Andeee',
        lastname: 'Gobeau',
        email: 'agobeau5@mozilla.com',
        password: '$2a$10$hhvZDtpcjxDoaDRLiMnoEeBJsOT.sVgEGRcE0kTDMFzLuwGR750Xq',
        image: 'user_6.jpg',
        phone: '413-113-5090',
        role_id: 1
      },
      {
        firstname: 'Netty',
        lastname: 'Steers',
        email: 'nsteers6@youku.com',
        password: '$2a$10$hhvZDtpcjxDoaDRLiMnoEeBJsOT.sVgEGRcE0kTDMFzLuwGR750Xq',
        image: 'user_7.jpg',
        phone: '707-604-7975',
        role_id: 1
      },
      {
        firstname: 'Graehme',
        lastname: 'Ertel',
        email: 'gertel7@istockphoto.com',
        password: '$2a$10$hhvZDtpcjxDoaDRLiMnoEeBJsOT.sVgEGRcE0kTDMFzLuwGR750Xq',
        image: 'user_8.jpg',
        phone: '568-306-3901',
        role_id: 1
      },
      {
        firstname: 'Brandtr',
        lastname: 'Bauldry',
        email: 'bbauldry8@elegantthemes.com',
        password: '$2a$10$hhvZDtpcjxDoaDRLiMnoEeBJsOT.sVgEGRcE0kTDMFzLuwGR750Xq',
        image: null,
        phone: '643-847-4104',
        role_id: 1
      },
      {
        firstname: 'Reinhard',
        lastname: 'Huxley',
        email: 'rhuxley9@si.edu',
        password: '$2a$10$hhvZDtpcjxDoaDRLiMnoEeBJsOT.sVgEGRcE0kTDMFzLuwGR750Xq',
        image: null,
        phone: '511-334-3597',
        role_id: 1
      },
      {
        firstname: 'Roi',
        lastname: 'Kenwell',
        email: 'rkenwella@nytimes.com',
        password: '$2a$10$hhvZDtpcjxDoaDRLiMnoEeBJsOT.sVgEGRcE0kTDMFzLuwGR750Xq',
        image: null,
        phone: '894-222-2435',
        role_id: 1
      },
      {
        firstname: 'Normy',
        lastname: 'Wane',
        email: 'nwaneb@posterous.com',
        password: '$2a$10$hhvZDtpcjxDoaDRLiMnoEeBJsOT.sVgEGRcE0kTDMFzLuwGR750Xq',
        image: null,
        phone: null,
        role_id: 1
      },
      {
        firstname: 'Lucian',
        lastname: 'O Connell',
        email: 'loconnellc@spiegel.de',
        password: '$2a$10$hhvZDtpcjxDoaDRLiMnoEeBJsOT.sVgEGRcE0kTDMFzLuwGR750Xq',
        image: null,
        phone: '105-331-2606',
        role_id: 1
      },
      {
        firstname: 'Tresa',
        lastname: 'Fanshawe',
        email: 'tfanshawed@rambler.ru',
        password: '$2a$10$hhvZDtpcjxDoaDRLiMnoEeBJsOT.sVgEGRcE0kTDMFzLuwGR750Xq',
        image: null,
        phone: null,
        role_id: 1
      },
      {
        firstname: 'Carmine',
        lastname: 'Heathfield',
        email: 'cheathfielde@ocn.ne.jp',
        password: '$2a$10$hhvZDtpcjxDoaDRLiMnoEeBJsOT.sVgEGRcE0kTDMFzLuwGR750Xq',
        image: null,
        phone: null,
        role_id: 1
      },
      {
        firstname: 'Brad',
        lastname: 'Bynert',
        email: 'bbynertf@flickr.com',
        password: '$2a$10$hhvZDtpcjxDoaDRLiMnoEeBJsOT.sVgEGRcE0kTDMFzLuwGR750Xq',
        image: null,
        phone: '627-319-2724',
        role_id: 1
      },
      {
        firstname: 'Esma',
        lastname: 'Storcke',
        email: 'estorckeg@aboutads.info',
        password: '$2a$10$hhvZDtpcjxDoaDRLiMnoEeBJsOT.sVgEGRcE0kTDMFzLuwGR750Xq',
        image: null,
        phone: '678-254-0554',
        role_id: 1
      },
      {
        firstname: 'Saba',
        lastname: 'Sattin',
        email: 'ssattinh@mashable.com',
        password: '$2a$10$hhvZDtpcjxDoaDRLiMnoEeBJsOT.sVgEGRcE0kTDMFzLuwGR750Xq',
        image: 'user_18.jpg',
        phone: '629-701-8266',
        role_id: 1
      },
      {
        firstname: 'Halsey',
        lastname: 'Scheu',
        email: 'hscheui@engadget.com',
        password: '$2a$10$hhvZDtpcjxDoaDRLiMnoEeBJsOT.sVgEGRcE0kTDMFzLuwGR750Xq',
        image: 'user_19.jpg',
        phone: '596-318-0719',
        role_id: 1
      },
      {
        firstname: 'Alexa',
        lastname: 'Skeermer',
        email: 'askeermerj@ustream.tv',
        password: '$2a$10$hhvZDtpcjxDoaDRLiMnoEeBJsOT.sVgEGRcE0kTDMFzLuwGR750Xq',
        image: 'user_20.jpg',
        phone: '906-654-7659',
        role_id: 1
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
