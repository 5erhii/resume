// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

var header = {
  name: {
    firstname: "Ivan",
    lastname: "Ivanov",
  },
  position: "Junior Fullstack JS Developer",
  salary: "600$ в місяць",
  address: "Ukraine, Kyiv",
}

var footer = {
  sotial: {
    email: {
      text: "ivan@mail.com",
      href: "mailto:ivan@mail.com",
    },
    phone: {
      text: "+380670000123",
      href: "tel:+380670000123",
    },
    linkedin: {
      text: "LinkedIn",
      href: "https://www.linkedin.com/in/dmytro-test",
    },
  },
}

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: "Resume || Summary",
    },

    header,
    main: {
      summary: {
        title: "Summary",
        text: `Open-minded for new technologies, with 1 years of experience in development. Whenever I start to 
        work on a new project I learn the domain and try to understand the idea of the project. Good team 
        player, every colleague is a friend to me.`,
      },
      experience: {
        title: "Other experience",
        text: `Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (
          tournament position, goals etc), analyzing by simple mathematics models and preparing probability 
        for such events like: money line - first win / draw / second win, totals etc.`,
      },
    },

    footer,
  })
})


// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: "Resume || Skills",
    },
    header,
    main: {
      skills: [
        {
          name: "HTML",
          point: 1,
          isTop: true,
        },
        {
          name: "Handlebars",
          point: 2,
          isTop: true,
        },
        {
          name: "VS Code & NPM",
          point: 3,
          isTop: false,
        },
        {
          name: "GIT & erminal",
          point: 4,
        },
        {
          name: "React.js",
          point: 0,
        },
        {
          name: "PHP",
          point: null,
        },
      ],
      hobbies: [
        { name: "Cars", isMain: false },
        { name: "Bikes", isMain: true },
        { name: "Science", isMain: false },
      ],
    },
    footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: "Resume || Education",
    },
    header,
    main: {
      educations: [
        { name: "IT-BRAINS", isEnd: true },
        { name: "Cornell University", isEnd: false },
        { name: "New York University", isEnd: true },
        { name: "Carnegie Mellon University", isEnd: false },
      ],

      certificates: [
        { name: "IT philosophy 2023", id: 1001 },
        { name: "Guru Coder", id: 1010 },
        { name: "Clear Code Course", id: 101 },
      ],
    },
    footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані

    layout: "big",

    page: {
      title: "Resume || Work",
    },
    header,
    main: {
      works: [
        {
          position: "Junior Fullstack Developer",
          company: {
            name: "IT Brains",
            url: "https://www.it-brains.com.ua",
          },
          duration: {
            from: "01.02.2023",
            to: null,
          },
          projectAmount: 3,

          projects: [
            {
              name: "Recume",
              url: "https://recume.com.ua",
              about: "Creating recume project",
              stacksAmount: 3,
              stacks: [
                { name: "React.js" },
                { name: "HTML / CSS" },
                { name: "Node.js" },
              ],
              awardsAmount: 2,
              awards: [
                { name: "This is Award number 1" },
                { name: "This is Award number 2" },
              ],
            },
          ],
        },
        {
          position: "Junior Developer",
          company: {
            name: "IT Heads",
            url: null,
          },
          duration: {
            from: "01.01.2022",
            to: "01.02.2023",
          },
          projectAmount: 3,
          projects: [
            {
              name: "Project",
              url: "https://project.com.ua",
              about: "Creating simple project",
              stacks: [
                { name: "React.js" },
                { name: "HTML / CSS" },
                { name: "Node.js" },
              ],
              stacksAmount: 3,
              awardsAmount: 2,
              awards: [
                { name: "This is Award number 1" },
                { name: "This is Award number 2" },
              ],
            },
          ],
        },
      ],
    },
    footer,
  })
})

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/task21', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('task21', {
    layout: "basic",
    heading: {
      main: {
        title: 'JavaScript',
        text: 'JavaScript is a popular high-level, dynamic, and interpreted programming language.',
        button_text: {
          solid: 'Open page',
          outline: 'Add to cart',
        },
      },
      second: {
        title: 'Stack Overflow',
        text: 'First-class functions',
        button_text: {
          solid: 'Open page',
          outline: 'Add to cart',
        },
      },
      subblock: {
        title: 'JavaScript Weekly',
        text: 'Prototype-based inheritance newsletter',
        button_text: {
          solid: 'Open page',
          outline: 'Add to cart',
        },
      },
    },
    nested_display: {
      title: 'HTML',
      children_display: {
        title: 'Outdated HTML tags',
        text: 'tags that have been identified as deprecated and not recommended for use in HTML version 5',
        button: {
          text: 'Орen',
        },
      },
      header_text: 'Sections',
      button: {
        text: 'Learn more',
      },
    },
    paragraph: {
      title: 'About modules',
      text: 'Modules with import/export statements',

      button: {
        text: 'Open link page',
        url: 'https://google.com',
      },
      list_name: [
        {
          text: 'Github',
          url: 'https://github.com/',
        },
        {
          text: 'Bootstrap',
          url: 'https://getbootstrap.com/',
        },
      ],
    },
  })
  //                  ↑↑ сюди вводимо JSON дані
})

// Підключаємо роутер до бек-енду
module.exports = router
