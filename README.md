# user_crud_and_login

Project with the purpose of learning how to use firebase services, authentication, firestore and hosting.

Link:

https://crud-and-login.web.app/login


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Environment variables
```
Create a new file .env.local following the exemple .env.exemple, and put your firebase variables:

VUE_APP_API_KEY=""
VUE_APP_AUTH_DOMAIN=""
VUE_APP_PROJEC_ID=""
VUE_APP_STORAGE_BUCKET=""
VUE_APP_MESSAGING_SENDER_ID=""
VUE_APP_APP_ID=""
```

### Folder Structure
```
Thinking of an expandable project, the following folder structure was used to make this possible.
```
```
└── @core -> It contains all the main components to define a minimal application functioning structure. They are: Header, Sidebar, etc...
```
```
└── @shared -> All components shared in the application.
```
```
└── modules -> Contains all application modules;
    └── module-exemple -> Exemple module;
        ├── components -> All components used exclusively by the module;
        ├── services -> Services related to the module;
        ├── views -> All module pages;
        └── module-exemple.routes.js -> All module routes.
```

### Customize configuration
```
See [Configuration Reference](https://cli.vuejs.org/config/).
