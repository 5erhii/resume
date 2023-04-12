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
router.get('/task22', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('task22', {
    layout: 'basic',
    page_header: {
      title: 'InnovaMind',
      description: 'Welcome to our wonderful community',
    },
    section: {
      about_us: {
        title_list: {
          main: 'InnovaMind',
          sub: 'InnovaMind is a forward-thinking startup focused on innovation. We are dedicated to creating efficient and powerful software through the use of first-class functions.',
        },
        button: { text: 'Show more' },
      },
      advantage: {
        title: 'Advantage',
        efficiency: {
          title: 'Efficiency',
          sub_title: 'Streamline your software development',
          description:
            'Streamline your software development with our innovative platform...',
          button: 'Show more',
        },
        innovation: {
          title: 'Innovation',
          sub_title:
            'Forward-thinking approach to programming',
          description:
            ' Stay ahead of the curve with our forward-thinking approach to programming...',
          button: 'Show more',
        },
        collaboration: {
          title: 'Collaboration',
          sub_title: 'Connect with like-minded developers',
          description:
            'Connect with a community of like-minded developers to share knowledge and insights...',
          button: 'Show more',
        },
      },
      agreement: {
        title: 'Terms of use',
        info: {
          sub_title: 'Check out our requirements',
          detail: {
            text: 'By using or accessing the service, you agree to be bound by the terms and conditions outlined in the agreement.',
            button: 'Аccept',
          },
        },
      },
    },
  })
  //                  ↑↑ сюди вводимо JSON дані
})
// Підключаємо роутер до бек-енду
module.exports = router
